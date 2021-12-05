<script>
    import FormatInput from "../components/FormatInput.svelte";
    import {getContext, onMount} from "svelte";
    import ReviewForm from "../components/ReviewForm.svelte";

    const { answerStore, answerValid } = getContext("answers");
    const { scrollUp, nextSection } = getContext("scroll");

    let focused = null;

    onMount(() => {
        const val020 = $answerStore["020"];
        const val021 = $answerStore["021"];
        $answerStore["02"] = `${val020 === undefined ? "" : val020} ${val021 === undefined ? "" : val021}`;
    })
</script>

<style>
</style>
<div>
    <h1 class="form-review-title">다음 서식으로 넘어가기 전, <mark class="form-review-mark">진정인 정보</mark>에 대해<br>지금까지 입력하신 내용을 확인해주세요. 틀린 정보가<br>있다면, 해당 부분을 마우스로 클릭해주세요.</h1>
    <ReviewForm label="성명" answerKey="00" bind:focused={focused}/>
    <ReviewForm label="주민등록번호" answerKey="01" iMaskPattern="000000-0000000" bind:focused={focused}/>
    <ReviewForm label="주소" answerKey="02" bind:focused={focused}/>
    <ReviewForm label="전화번호" answerKey="03" iMaskPattern="000-0000-0000" bind:focused={focused}/>
    <ReviewForm label="이메일" answerKey="04" bind:focused={focused}/>
    <ReviewForm label="수신여부동의" answerKey="05" bind:focused={focused}/>
    <div class="form-review-button-pair">
        <button style="width: 158px; margin-right: 60px;" class="form-review-button-sub" on:click={() => {scrollUp(true);}}>&#x1449</button>
        <button style="width: 1115px;" class="form-review-button-main" on:click={() => {nextSection();}}>&#x2713    확인했습니다. 다음 단계로 넘어갑니다.</button>
    </div>
</div>
