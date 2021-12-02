<script>
    import FormatInput from "../components/FormatInput.svelte";
    import {getContext, onMount} from "svelte";
    import ReviewForm from "../components/ReviewForm.svelte";

    const { answerStore, answerValid } = getContext("answers");
    const { scrollUp, nextSection } = getContext("scroll");

    onMount(() => {
        const val140 = $answerStore["140"];
        const val141 = $answerStore["141"];
        $answerStore["14"] = `${val140 === undefined ? "" : val140} ${val141 === undefined ? "" : val141}`;
    })
</script>

<style>
</style>
<div>
    <h1 class="form-review-title">다음 서식으로 넘어가기 전, <mark class="form-review-mark">진정인 정보</mark>에 대해<br>지금까지 입력하신 내용을 확인해주세요. 틀린 정보가<br>있다면, 해당 부분을 마우스로 클릭해주세요.</h1>
    <ReviewForm label="성명" answerKey="10"/>
    <ReviewForm label="개인 연락처" answerKey="11" iMaskPattern="000-0000-0000"/>
    <ReviewForm label="회사명" answerKey="12"/>
    <ReviewForm label="사업체 구분" answerKey="13"/>
    <ReviewForm label="회사 주소" answerKey="14"/>
    <ReviewForm label="회사 연락처" answerKey="15" iMaskPattern="000-0000-0000"/>
    <ReviewForm label="근로자 수" answerKey="16" type="number"/>
    <div class="form-review-button-pair">
        <button style="width: 158px; margin-right: 60px;" class="form-review-button-sub" on:click={() => {scrollUp(true);}}>&#x1449</button>
        <button style="width: 1115px;" class="form-review-button-main" on:click={() => {nextSection();}}>&#x2713  확인했습니다. 다음 단계로 넘어갑니다.</button>
    </div>
</div>
