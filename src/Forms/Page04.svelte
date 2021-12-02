<script>
    import FormatInput from "../components/FormatInput.svelte";

    const key = "04"
</script>

<style>
</style>
<div>
    <h1 class="form-title">이메일 주소를 입력하세요.</h1>
    <FormatInput
            pattern={"^[0-9_a-Z]+\@[0-9a-Z]+\.[0-9.a-Z]+"}
            placeHolder="abc1234@gmail.com"
            answerKey={key}
            errorMessage="잘못 입력하신 것 같습니다."
    />
</div>
