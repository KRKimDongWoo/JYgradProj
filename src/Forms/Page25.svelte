<script>
    import FormatInput from "../components/FormatInput.svelte";
    import {getContext} from "svelte";
    const { answerStore } = getContext("answers");
    const { scrollDown } = getContext("scroll");

    const key = "25"
</script>

<style>
</style>
<div>
    <h1 class="form-title">재직 당시 주로 어떤 업무를 담당하셨는지 기재해주십시오.</h1>
    <FormatInput placeHolder="영업, 일반 사무" answerKey={key}/>
</div>
