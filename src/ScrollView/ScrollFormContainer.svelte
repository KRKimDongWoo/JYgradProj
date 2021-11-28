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
            scrollUp()
        } else if (deltaY > 0) {
            scrollDown()
        }
    };

    const scrollUp = async () => {
        if (!$scrollEnableStore)
            return;

        if ($activePageStore <= 0)
            return;

        activePageStore.update(n => n - 1);
    };

    const scrollDown = async () => {
        if (!$scrollEnableStore)
            return;

        const page = pages[$activeSectionStore];

        if ($activePageStore < page.length - 1){
            activePageStore.update(n => n + 1);
        }
    };

    setContext('scroll', {
        scrollDown: scrollDown,
        scrollUp: scrollUp
    });

    const scrollEnableStore = writable(false);
    $: {
        scrollEnableStore.set(
            ($activeSectionStore in pages) &&
            (pages[$activeSectionStore].length > $activePageStore) &&
            pages[$activeSectionStore][$activePageStore].scroll)
    }

    let scrollClass = "scrollform-fixed";
    $: scrollClass = $scrollEnableStore ? "scrollform-fixed" : "scrollform-overflow";

    let canScrollDown;
    $: canScrollDown = $scrollEnableStore &&
        ($activeSectionStore in pages) &&
        $activePageStore < pages[$activeSectionStore].length - 1

    let canScrollUp;
    $: canScrollUp = $scrollEnableStore && $activePageStore > 0;
</script>

<style>
    .scrollform-wrapper {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 273px;
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
    }
</style>

<div class="{scrollClass} scrollform-wrapper">
    <div class="scrollform-container" bind:this={scrollformContent} on:wheel={handleScroll}>
        <slot>
        </slot>
        {#if canScrollUp}
            <ScrollUpButton/>
        {/if}
        {#if canScrollDown}
            <ScrollDownButton/>
        {/if}
    </div>
</div>