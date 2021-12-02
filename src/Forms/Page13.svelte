<script>
    import {getContext} from "svelte";

    const { answerStore } = getContext("answers");
    const key = "13"
</script>

<style>
</style>
<div>
    <h1 class="form-title">정보 수집 및 보관에 동의하시면, 민원신청 처리상황을<br>문자메시지, 전화를 통해 제공받으실 수 있습니다.</h1>
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
