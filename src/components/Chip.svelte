<script>
    export let onclick;
</script>

<style>
    .chip-main {
        margin: 4px;

        width: fit-content;
        height: fit-content;

        background: #474747 0 0 no-repeat padding-box;
        border: 2px solid #FFFFFF;
        border-radius: 35px;
        opacity: 1;
    }
    .chip-text {
        margin: 4px 16px;

        font-size: 24px;
        font-weight: normal;
        text-align: center;

        letter-spacing: 0;
        color: #FFFFFF;
        opacity: 1;
    }

</style>

<div class="chip-main" on:click={onclick}>
    <p class="chip-text"><slot></slot></p>
</div>
