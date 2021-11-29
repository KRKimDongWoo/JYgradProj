<script>
    import CheckerInput from "../components/FormatInput.svelte";

    const key = "03"
</script>

<style>
</style>
<div>
    <h1 class="form-title">휴대전화번호 혹은 연락처를 입력하세요.</h1>
    <CheckerInput
            pattern={"^[0-9]{3}-[0-9]{4}-[0-9]{4}"}
            placeHolder="010-1234-5678"
            answerKey={key}
            errorMessage="잘못 입력하신 것 같습니다."
            iMaskPattern={"000-0000-0000"}
    />
</div>
