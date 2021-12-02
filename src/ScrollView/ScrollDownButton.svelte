<script>
    import {getContext} from "svelte";

    const { scrollDown } = getContext('scroll');
    const { activePageStore } = getContext("page");
    const { activeSectionStore } = getContext("section");

    let visible;
    $: visible = $activeSectionStore === 0 ? ($activePageStore < 6) :
        $activeSectionStore === 1 ? ($activePageStore < 7) :
            $activeSectionStore === 2 ? ($activePageStore < 8) : false;

</script>

<style>
    .scroll-button-down {
        bottom: 32px;
    }
</style>

{#if visible}
    <div class="scroll-button-wrapper scroll-button-down">
        <div class="scroll-container" on:click={scrollDown}>
            <p class="scroll-text">'스크롤' 혹은 '클릭'해서 다음 질문으로 이동하세요.</p>
            <div class="scroll-button-container">
                <span class="scroll-button-b"></span>
                <span class="scroll-button-a"></span>
            </div>
        </div>
    </div>
{/if}