<script>
    import FormatInput from "../components/FormatInput.svelte";
    import NumberInput from "../components/NumberInput.svelte";

    const key = "16"
</script>

<style>
</style>
<div>
    <h1 class="form-title" data-tooltip="'사유 발생일 전 1개월 내에 사용한 근로자의 연인원 수'를 '사유 발생일 전 1개월 내의 사업장 가동 일수'로 나누어 계산합니다.<br>(근로기준법 시행령 제7조의 2)">임금 체불이 발생한 날로부터 1개월 전,<br>상시로 사내에 근무하는 사람은 몇 명인가요?<br>이때 파견 근로자는 제외합니다.</h1>
    <NumberInput
            placeHolder={30}
            answerKey={key}
            errorMessage="잘못 입력하신 것 같습니다."
            label="명"
    />
</div>
