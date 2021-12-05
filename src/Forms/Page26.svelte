<script>
    import {getContext} from "svelte";

    const { answerStore } = getContext("answers");
    const key = "26"
</script>

<style>
</style>
<div>
    <h1 class="form-title">입사 당시 어떤 방법으로 근로계약하셨습니까?</h1>
    <div class="form-button-group">
        <button style="margin-right: 60px;"
                class="form-button-group-button {$answerStore[key] === '서면' ? 'form-button-group-button-selected' : ''}"
                on:click={() => {$answerStore[key] = "서면";}}>
            서면
        </button>
        <button style="margin-right: 60px;"
                class="form-button-group-button {$answerStore[key] === '구두' ? 'form-button-group-button-selected' : ''}"
                on:click={() => {$answerStore[key] = "구두";}}>
            구두
        </button>
        <button class="form-button-group-button {$answerStore[key] === '하지 않음' ? 'form-button-group-button-selected' : ''}"
                on:click={() => {$answerStore[key] = "하지 않음";}}>
            하지않음
        </button>
    </div>
</div>
