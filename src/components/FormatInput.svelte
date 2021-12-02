<script>
    import ErrorMessage from "./ErrorMessage.svelte";
    import ErrorMark from "./ErrorMark.svelte";
    import CheckMark from "./CheckMark.svelte";
    import {getContext, onMount} from "svelte";
    import { imask } from '@imask/svelte';
    import { get } from 'svelte/store'

    export let title;
    export let label;
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
        console.log(`${answerKey} - ${input.value}`)
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
    .page020-input {
        margin-bottom: 32px;

        width: 1333px;
        height: 94px;
    }
    .page021-input {
        width: 1333px;
        height: 94px;
    }
    .page03-input {
        width: 667px;
        height: 94px;
    }
    .page04-input {
        width: 1333px;
        height: 94px;
    }
    .page10-input {
        width: 444px;
        height: 94px;
    }
    .page11-input {
        width: 667px;
        height: 94px;
    }
    .page12-input {
        width: 1333px;
        height: 94px;
    }
    .page140-input {
        margin-bottom: 32px;

        width: 1333px;
        height: 94px;
    }
    .page141-input {
        width: 1333px;
        height: 94px;
    }
    .page15-input {
        width: 667px;
        height: 94px;
    }

    .page200-form {
        margin-right: 132px;
    }
    .page200-input {
        width: 222px;
        height: 94px;
    }
    .page201-form {
        margin-right: 132px;
    }
    .page201-input {
        width: 148px;
        height: 94px;
    }
    .page202-input {
        width: 148px;
        height: 94px;
    }
    .page220-form {
        margin-right: 132px;
    }
    .page220-input {
        width: 222px;
        height: 94px;
    }
    .page221-form {
        margin-right: 132px;
    }
    .page221-input {
        width: 148px;
        height: 94px;
    }
    .page222-input {
        width: 148px;
        height: 94px;
    }
    .page25-input {
        width: 1333px;
        height: 94px;
    }

</style>

<form class="form-general page{answerKey}-form">
    {#if title != null}
        <label class="form-number-label-l">{title}</label>
    {/if}
    {#if iMaskPattern == null}
        <input class="form-input page{answerKey}-input"
               pattern={pattern}
               placeholder={placeHolder}
               bind:value={$answerStore[answerKey]}
               bind:this={input}
               on:change={checkValidity}
        >
    {:else}
        <input class="form-input page{answerKey}-input"
               pattern={pattern}
               placeholder={placeHolder}
               bind:value={$answerStore[answerKey]}
               bind:this={input}
               use:imask={{mask: iMaskPattern}}
               on:accept={checkValidity}
        >
    {/if}
    {#if label != null}
        <label class="form-number-label-r">{label}</label>
    {/if}
    {#if errorValid}
        <ErrorMessage error={error} inputHeight={inputHeight}>{errorMessage}</ErrorMessage>
        <ErrorMark error={error} inputHeight={inputHeight}/>
        <CheckMark error={error} inputHeight={inputHeight}/>
    {/if}
</form>