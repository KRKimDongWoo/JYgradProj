<script>
    import FormatInput from "../components/FormatInput.svelte";
    import {getContext} from "svelte";
    const { answerStore } = getContext("answers");
    const { scrollDown } = getContext("scroll");

    const key = "21"
</script>

<style>
</style>
<div>
    <h1 class="form-title">해당 회사에서 행정상 퇴사하셨습니까?</h1>
    <div class="form-button-group">
        <button style="margin-right: 60px;"
                class="form-button-group-button {$answerStore[key] === '퇴직' ? 'form-button-group-button-selected' : ''}"
                on:click={() => {$answerStore[key] = "퇴직";}}>
            퇴직하였습니다.
        </button>
        <button
                class="form-button-group-button {$answerStore[key] === '재직' ? 'form-button-group-button-selected' : ''}"
                on:click={() => {$answerStore[key] = "재직";}}>
            재직중입니다.
        </button>
    </div>
</div>
