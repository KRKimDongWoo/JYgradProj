<script>
    import {getContext} from "svelte";

    const { answerStore } = getContext("answers");
    const key = "27"
</script>

<style>
</style>
<div>
    <h1 class="form-title">진정서를 제출하는 경위에 대해 자세히 적어주세요.</h1>
    <textarea
            class="form-textarea"
            placeholder="진정인은 2015.3.15. 한국회사(주)에 입사하여 7개월동안 근무하였으나, 회사사정이 어렵다는 이유로 2015.9월부터 2개월간 3,000,000원의 임금을 지급받지 못함."
            bind:value={$answerStore[key]}
    ></textarea>
</div>
