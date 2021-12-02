<script>
    import {getContext} from "svelte";

    const { scrollUp } = getContext('scroll');
    const { activePageStore } = getContext("page");
    const { activeSectionStore } = getContext("section");

    let visible;
    $: visible = $activeSectionStore === 0 ? (0 < $activePageStore && $activePageStore < 6) :
        $activeSectionStore === 1 ? (0 < $activePageStore && $activePageStore < 7) :
        $activeSectionStore === 2 ? (0 < $activePageStore && $activePageStore < 8) : false;

</script>

<style>
    .scroll-button-up {
        top: 32px;
    }
</style>

{#if visible}
<div class="scroll-button-wrapper scroll-button-up">
    <div class="scroll-container" on:click={scrollUp}>
        <div class="scroll-button-container">
            <span class="scroll-button-a"></span>
            <span class="scroll-button-b"></span>
        </div>
        <p class="scroll-text">'스크롤' 혹은 '클릭'해서 이전 질문으로 이동하세요.</p>
    </div>
</div>
{/if}