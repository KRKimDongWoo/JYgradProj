<script>
    import FormatInput from "../components/FormatInput.svelte";
    import {getContext, onMount} from "svelte";
    import ReviewForm from "../components/ReviewForm.svelte";

    const { answerStore, answerValid } = getContext("answers");
    const { scrollUp, nextSection } = getContext("scroll");
    let maskedInput1;
    let maskedInput2;

    onMount(() => {
        const val200 = $answerStore["200"];
        const val201 = $answerStore["201"];
        const val202 = $answerStore["202"];
        const val220 = $answerStore["220"];
        const val221 = $answerStore["221"];
        const val222 = $answerStore["222"];
        const val240 = $answerStore["240"];
        $answerStore["20"] = `${val200}.${val201}.${val202}.`;
        maskedInput1.updateValue();
        $answerStore["22"] = `${val220}.${val221}.${val222}.`;
        maskedInput2.updateValue();
        $answerStore["24"] = `매월 ${val240}일`;
    })
</script>

<style>
</style>
<div>
    <h1 class="form-review-title">다음으로 넘어가기 전, <mark class="form-review-mark">진정 내용</mark>에 대해 지금까지<br>입력하신 내용을 확인해주세요. 틀린 정보가있다면,<br>해당 부분을 마우스로 클릭해주세요.</h1>
    <ReviewForm label="입사일" answerKey="20" iMaskPattern="0000.00.00." bind:this={maskedInput1}/>
    <ReviewForm label="퇴직여부" answerKey="21"/>
    <ReviewForm label="퇴사일" answerKey="22" iMaskPattern="0000.00.00." bind:this={maskedInput2}/>
    <ReviewForm label="체불임금액" answerKey="230"/>
    <ReviewForm label="최불퇴직금액" answerKey="231"/>
    <ReviewForm label="체불기타금액" answerKey="232"/>
    <ReviewForm label="임금지급일" answerKey="24"/>
    <ReviewForm label="업무내용" answerKey="25"/>
    <ReviewForm label="근로계약방법" answerKey="26"/>
    <ReviewForm label="진정서 본문" answerKey="27"/>

    <div class="form-review-button-pair">
        <button style="width: 158px; margin-right: 60px;" class="form-review-button-sub" on:click={() => {scrollUp(true);}}>&#x1449</button>
        <button style="width: 1115px;" class="form-review-button-main" on:click={() => {nextSection();}}>&#x2713  확인했습니다. 다음 단계로 넘어갑니다.</button>
    </div>
</div>
