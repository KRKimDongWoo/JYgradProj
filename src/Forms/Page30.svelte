<script>
    import FormatInput from "../components/FormatInput.svelte";
    import {getContext} from "svelte";
    const { answerStore, answerValid } = getContext("answers");
    const { prevSection, nextSection } = getContext("scroll");
</script>

<style>
</style>
<div>
    <h1 class="form-title" style="margin-bottom: 503px">모든 답변이 입력되었습니다. 제출하시겠습니까?</h1>
    <div class="form-button-pair">
        <button style="width: 636px; margin-right: 60px" class="form-button-sub" on:click={() => {prevSection();}}>&#x1449    아니오. 다시 검토하겠습니다.</button>
        <button style="width: 636px;" class="form-button-main" on:click={() => {nextSection();}}>&#x2713    네. 제출하겠습니다.</button>
    </div>
</div>
