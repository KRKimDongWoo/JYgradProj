<script>
    import FormatInput from "../components/FormatInput.svelte";
    import NumberInput from "../components/NumberInput.svelte";

    const key = "23"
</script>

<div>
    <h1 class="form-title" data-tooltip="모든 기간에 걸쳐 체불된 임금 전부를 의미하는 것이 아닙니다.">현 시점으로부터 90일 전 시점까지 사업주로부터<br>지급받지 못한 액수를 입력하세요.</h1>
    <div class="form-group-vertical">
        <NumberInput style="margin-bottom: 32px" title="임금총액" label="원" answerKey="{key + 0}" placeHolder="3000000"/>
        <NumberInput style="margin-bottom: 32px" title="퇴직금액" label="원" answerKey="{key + 1}" placeHolder="3000000"/>
        <NumberInput title="기타금액" label="원" answerKey="{key + 2}" placeHolder="3000000"/>
    </div>
</div>
