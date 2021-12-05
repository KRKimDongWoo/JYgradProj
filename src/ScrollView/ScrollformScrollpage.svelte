<script>
    import { slide } from "svelte/transition";
    import { getContext, onMount } from "svelte";

    const transitionDuration = 500;
    export let transition = {
        duration: transitionDuration
    };

    export let section;
    export let page;

    const { activeSectionStore } = getContext("section");
    const { activePageStore, mountPage } = getContext("page");

    let visible;
    $: visible = (sectionID === $activeSectionStore && pageID === $activePageStore);

    let sectionID;
    let pageID;
    onMount(() => {
        const { sid, pid } = mountPage(section, page, false);
        sectionID = sid;
        pageID = pid;
    })
</script>

<style>
    .scrollform-scrollpage {
        position: relative;
        width: 100%;
        height: fit-content;
        background: #FDFDFA 0 0 no-repeat padding-box;

        box-sizing: border-box;
        padding: 88px 0 88px 152px;

        display: flex;
        align-items: center;
    }

</style>

{#if visible}
    <div transition:slide={transition} class="scrollform-scrollpage" style="overflow: auto">
        <slot/>
    </div>
{/if}