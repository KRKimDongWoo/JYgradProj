<script>
    import FormatInput from "../components/FormatInput.svelte";

    const key = "15"
</script>

<style>
</style>
<div>
    <h1 class="form-title">회사 연락처 혹은 피진정인의 연락처를 입력하세요.</h1>
    <FormatInput
            pattern={"^[0-9]{3}-[0-9]{4}-[0-9]{4}"}
            placeHolder="010-1234-5678"
            answerKey={key}
            errorMessage="잘못 입력하신 것 같습니다."
            iMaskPattern={"000-0000-0000"}
    />
</div>
