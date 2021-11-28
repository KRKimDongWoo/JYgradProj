<script>
    export let error;
    export let inputHeight;
</script>

<style>
    .error-mark-span {
        width: 48px;
        height: 48px;
        position: absolute;
        right: 24px;

        text-align: center;
        font: normal normal 500 32px/42px noto-sans-cjk-kr;
        letter-spacing: 0;
        color: #FF0000;

        border: 3px solid #F90000;
        border-radius: 100%;
        opacity: 1;
    }
</style>

{#if error}
<span class="error-mark-span" style="top: {inputHeight / 2 - 24}px">!</span>
{/if}