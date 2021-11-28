<script>
    export let onclick;
</script>

<style>
    .chip-main {
        margin: 4px;
        padding: 12px 36px;

        width: fit-content;

        background: #474747 0 0 no-repeat padding-box;
        border: 2px solid #FFFFFF;
        border-radius: 35px;
        opacity: 1;

        display: flex;
        justify-content: center;
        align-content: center;
    }
    .chip-text {
        margin: 0;
        padding: 0;

        font: normal normal normal 24px noto-sans-cjk-kr;
        text-align: center;

        letter-spacing: 0;
        color: #FFFFFF;
        opacity: 1;
    }

</style>

<div class="chip-main" on:click={onclick}>
    <p class="chip-text"><slot></slot></p>
</div>
