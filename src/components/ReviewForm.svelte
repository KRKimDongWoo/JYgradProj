<script>
    import {getContext} from "svelte";
    import { imask } from '@imask/svelte';

    export let answerKey;
    export let label;
    export let iMaskPattern;
    export let type;
    const { answerStore, answerValid } = getContext("answers");


</script>
<form class="form-review-form">
    <label class="form-review-label">{label}</label>
    {#if iMaskPattern == null}
        {#if type === "number"}
            <input class="form-review-input" type="number" bind:value={$answerStore[answerKey]}>
        {:else}
            <input class="form-review-input" type="text" bind:value={$answerStore[answerKey]}>
        {/if}
    {:else}
        <input class="form-review-input" bind:value={$answerStore[answerKey]} use:imask={{mask: iMaskPattern}}>
    {/if}
    <button class="form-review-submit-button">&#x2713 수정완료</button>
</form>