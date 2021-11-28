<script>
    import ErrorMessage from "./ErrorMessage.svelte";
    import ErrorMark from "./ErrorMark.svelte";
    import CheckMark from "./CheckMark.svelte";
    import {getContext, onMount} from "svelte";
    import { imask } from '@imask/svelte';
    import { get } from 'svelte/store'

    export let answerKey;
    export let errorMessage;
    export let pattern;
    export let placeHolder;
    export let iMaskPattern;

    const { answerStore, answerValid } = getContext("answers");

    let errorValid = false;
    let error;
    let inputHeight;
    let inputWidth;

    let input;
    onMount(() => {
        inputHeight = input.offsetHeight;
        inputWidth = input.offsetWidth;
        errorValid = answerKey in $answerValid;
        error = errorValid && !$answerValid[answerKey];
    })

    function checkValidity() {
        errorValid = true;
        error = input.validity.patternMismatch;
        $answerValid[answerKey] = !error;
    }
</script>

<style>
    .page00-input {
        width: 444px;
        height: 94px;
    }
    .page01-input {
        width: 676px;
        height: 94px;
    }
</style>

<form class="form-general">
    {#if iMaskPattern == null}
        <input class="page00-input form-input page{answerKey}-input"
               pattern={pattern}
               placeholder={placeHolder}
               bind:value={$answerStore[answerKey]}
               bind:this={input}
               on:change={checkValidity}
        >
    {:else}
        <input class="page00-input form-input page{answerKey}-input"
               pattern={pattern}
               placeholder={placeHolder}
               bind:value={$answerStore[answerKey]}
               bind:this={input}
               use:imask={{mask: iMaskPattern}}
               on:accept={checkValidity}
        >
    {/if}
    {#if errorValid}
        <ErrorMessage error={error} inputHeight={inputHeight}>{errorMessage}</ErrorMessage>
        <ErrorMark error={error} inputHeight={inputHeight}/>
        <CheckMark error={error} inputHeight={inputHeight}/>
    {/if}
</form>