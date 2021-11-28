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
        const { sid, pid } = mountPage(section, page, true);
        sectionID = sid;
        pageID = pid;
    })
</script>

<style>
    .scrollform-fullpage {
        position: relative;
        width: 100%;
        height: 100%;

        box-sizing: border-box;
        padding: 0 0 0 152px;

        display: flex;
        align-items: center;
    }

</style>

{#if visible}
<div transition:slide={transition} class="scrollform-fullpage">
    <slot/>
</div>
{/if}