<script>
    import FormatInput from "../components/FormatInput.svelte";

    const key = "01"
</script>

<style>
</style>
<div>
    <h1 class="form-title">주민등록번호 13자리를 입력하세요.</h1>
    <FormatInput
            pattern={"^[0-9]{6}-[0-9]{7}"}
            placeHolder="580311 - 1231231"
            answerKey={key}
            errorMessage="잘못 입력하신 것 같습니다."
            iMaskPattern={"000000-0000000"}
    />
</div>
