<script>

    export let error;
    export let inputHeight;
</script>

<style>
    .check-mark-span {
        width: 48px;
        height: 48px;

        position: absolute;
        right: 24px;

        text-align: center;
        font: normal normal 500 32px/42px noto-sans-cjk-kr;
        letter-spacing: 0;
        color: #1ACB43;
        opacity: 1;
    }
</style>

{#if !error}
    <span class="check-mark-span" style="top: {inputHeight / 2 - 24}px">&#x2713</span>
{/if}