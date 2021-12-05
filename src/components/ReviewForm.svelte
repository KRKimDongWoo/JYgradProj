<script>
  import {createEventDispatcher, getContext, onMount} from "svelte";
    import { imask } from '@imask/svelte';

    export let focused;
    export let answerKey;
    export let label;
    export let iMaskPattern;
    export let type;
    const { answerStore, answerValid } = getContext("answers");

    const onFocus = () => { focused = answerKey; }
    const onBlur = () => { focused = null; }

  onMount(() => {
    console.log(focused);
  })
  let disabled;
  $: disabled = focused != null && focused !== answerKey;

</script>
<form class="form-review-form">
    <label class="form-review-label {disabled ? 'form-review-label-disabled' : ''}">{label}</label>
    {#if iMaskPattern == null}
        {#if type === "number"}
            <input class="form-review-input" type="number" bind:value={$answerStore[answerKey]} on:focus={onFocus} on:blur={onBlur} disabled={disabled}>
        {:else}
            <input class="form-review-input" type="text" bind:value={$answerStore[answerKey]} on:focus={onFocus} on:blur={onBlur} disabled={disabled}>
        {/if}
    {:else}
        <input class="form-review-input" bind:value={$answerStore[answerKey]} use:imask={{mask: iMaskPattern}} on:focus={onFocus} on:blur={onBlur} disabled={disabled}>
    {/if}
    <button class="form-review-submit-button">&#x2713 수정완료</button>
</form>