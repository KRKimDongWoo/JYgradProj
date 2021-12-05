<script>
    import ErrorMessage from "./ErrorMessage.svelte";
    import ErrorMark from "./ErrorMark.svelte";
    import CheckMark from "./CheckMark.svelte";
    import {getContext, onMount} from "svelte";
    import {imask} from '@imask/svelte';

    export let title;
    export let label;
    export let answerKey;
    export let errorMessage;
    export let placeHolder;

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
        $answerValid[answerKey] = true;
    }
</script>

<style>
    .page16-input {
        width: 222px;
        height: 94px;
    }
    .page230-form {
        margin-bottom: 32px
    }
    .page230-input {
        width: 667px;
        height: 94px;
    }
    .page231-form {
        margin-bottom: 32px
    }
    .page231-input {
        width: 667px;
        height: 94px;
    }
    .page232-input {
        width: 667px;
        height: 94px;
    }
    .page240-input {
        width: 148px;
        height: 94px;
    }
</style>

<form class="form-number page{answerKey}-form">
    {#if title != null}
        <label class="form-number-label-l">{title}</label>
    {/if}
    <input class="form-input page{answerKey}-input" style="text-align: right;"
           type="number"
           placeholder={placeHolder}
           bind:value={$answerStore[answerKey]}
           bind:this={input}
           on:change={checkValidity}
    >
    <label class="form-number-label-r">{label}</label>
    {#if errorValid}
        <ErrorMessage error={error} inputHeight={inputHeight}>{errorMessage}</ErrorMessage>
        <ErrorMark error={error} inputHeight={inputHeight}/>
        <CheckMark error={error} inputHeight={inputHeight}/>
    {/if}
</form>