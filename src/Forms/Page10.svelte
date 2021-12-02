<script>
    import FormatInput from "../components/FormatInput.svelte";

    const key = "10"
</script>

<div>
    <h1 class="form-title" data-tooltip="일반적으로 사장, 사업주 등을 의미합니다. 공사현장의 경우 원청, 직상수급인, 하수급인 등을 의미합니다.">피진정인의 성명을 입력하세요.</h1>
    <FormatInput pattern="^[가-힣]+$" placeHolder="홍길동" answerKey={key} errorMessage="잘못 입력하신 것 같습니다."/>
</div>
