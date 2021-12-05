<script>
    import {onMount, setContext} from "svelte";
    import {writable} from "svelte/store";
    import ScrollDownButton from "./ScrollDownButton.svelte";
    import ScrollUpButton from "./ScrollUpButton.svelte";

    export let scrollformContent;
    const transitionDuration = 500;

    let sections = [];
    let sectionMap = {};
    let pages = {};

    const activePageStore = writable(0);
    setContext('page', {
        activePageStore: activePageStore,
        mountPage: (sectionName, pageName, scroll) => {
            if (!(sectionName in sectionMap)) {
                sectionMap[sectionName] = sections.push(sectionName) - 1;
                console.log(`mounted section ${sectionName} as ${sectionMap[sectionName]}`)
            }

            const sid = sectionMap[sectionName];
            if (!(sid in pages)) {
                pages[sid] = [];
            }

            const pid = pages[sid].push({pageName, scroll}) - 1;
            console.log(`mounted page ${sectionName}-${pageName} as ${sid}-${pid}`)
            return { sid, pid};
        }
    })

    const activeSectionStore = writable(0);
    setContext('section', {
        activeSectionStore: activeSectionStore,
    });

    let recentScroll = 0;
    const handleScroll = (event) => {
        let timer = new Date().getTime();
        if (transitionDuration >= timer - recentScroll)
            return;

        recentScroll = timer;

        let deltaY = event.deltaY;
        if (deltaY < 0) {
            scrollUp(false)
        } else if (deltaY > 0) {
            scrollDown(false)
        }
    };

    let scrollEnable;
    const scrollUp = async (force) => {
        if (!force && !scrollEnable)
            return;

        if ($activePageStore <= 0) {
          prevSection();
          return;
        }

        activePageStore.update(n => n - 1);
    };

    const scrollDown = async (force) => {
        if (!force && !scrollEnable)
            return;

        const page = pages[$activeSectionStore];

        if ($activePageStore < page.length - 1){
            activePageStore.update(n => n + 1);
        }
    };

    const prevSection = () => {
      if ($activeSectionStore > 0) {
        activeSectionStore.update(n => n - 1);
        activePageStore.set(pages[$activeSectionStore].length - 1);
      }
    }

    const nextSection = () => {
        console.log(`${$activeSectionStore} vs ${sections.length}`)
        if ($activeSectionStore < sections.length - 1) {
            activeSectionStore.update(n => n + 1);
            activePageStore.set(0);
        }
    }

    setContext('scroll', {
        scrollDown: scrollDown,
        scrollUp: scrollUp,
        nextSection: nextSection,
        prevSection: prevSection,
    });

    $: scrollEnable = $activeSectionStore === 0 ? ($activePageStore < 6) :
        $activeSectionStore === 1 ? ($activePageStore < 7) :
            $activeSectionStore === 2 ? ($activePageStore < 8) : false;

    let scrollClass = "scrollform-fixed";
    $: scrollClass = scrollEnable ? "scrollform-fixed" : "scrollform-overflow";
</script>

<style>
    .scrollform-wrapper {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0px;
    }

    .scrollform-fixed {
        overflow: hidden;
    }

    .scrollform-overflow {
        overflow: auto;
    }

    .scrollform-container {
        position: relative;
        height: 100%;
        width: 100%;
        padding-left: 273px;
    }
</style>

<div class="{scrollClass} scrollform-wrapper">
    <div class="scrollform-container" bind:this={scrollformContent} on:wheel={handleScroll}>
        <slot>
        </slot>
        <ScrollUpButton/>
        <ScrollDownButton/>
    </div>
</div>