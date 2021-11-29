<script>
    import {getContext} from "svelte";
    import { imask } from '@imask/svelte';

    export let answerKey;
    export let label;
    export let iMaskPattern;
    const { answerStore, answerValid } = getContext("answers");


</script>
<form class="form-review-form">
    <label class="form-review-label">{label}</label>
    {#if iMaskPattern == null}
        <input class="form-review-input" bind:value={$answerStore[answerKey]}>
    {:else}
        <input class="form-review-input" bind:value={$answerStore[answerKey]} use:imask={{mask: iMaskPattern}}>
    {/if}
    <button class="form-review-submit-button">&#x2713 수정완료</button>
</form>