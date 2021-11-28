<script>
    export let error;
    export let inputHeight;
</script>

<style>
    .error-message {
        position: absolute;
        left: 0;
        margin: 0;

        text-align: left;
        font: normal normal 500 32px/42px Noto Sans CJK KR;
        letter-spacing: 0;
        color: #FF0000;
        opacity: 1;
        width: 100%;
    }
</style>

{#if error}
    <p class="error-message" style="top: {inputHeight + 12}px;"><slot></slot></p>
{/if}