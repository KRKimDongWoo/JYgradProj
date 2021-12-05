<script>
    import {getContext} from "svelte";

    const { answerStore } = getContext("answers");
    const key = "13"
</script>

<style>
</style>
<div>
    <h1 class="form-title">해당 사업체는 어떤 유형입니까?</h1>
    <div class="form-button-group">
        <button style="margin-right: 60px;"
                class="form-button-group-button {$answerStore[key] === '사업장' ? 'form-button-group-button-selected' : ''}"
                on:click={() => {$answerStore[key] = "사업장";}}>
            사업장
        </button>
        <button style="margin-right: 60px;"
                class="form-button-group-button {$answerStore[key] === '공사현장' ? 'form-button-group-button-selected' : ''}"
                on:click={() => {$answerStore[key] = "공사현장";}}>
            공사현장
        </button>
        <button
                class="form-button-group-button {$answerStore[key] === '그 밖 기타' ? 'form-button-group-button-selected' : ''}"
                on:click={() => {$answerStore[key] = "그 밖 기타";}}>
            그 밖 기타
        </button>
    </div>
</div>
