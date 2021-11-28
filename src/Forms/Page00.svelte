<script>
    import {getContext} from "svelte";
    import CheckerInput from "../components/CheckerInput.svelte";

    const key = "00"
</script>

<div>
    <h1 class="form-title">성명을 입력하세요.</h1>
    <CheckerInput pattern="^[가-힣]+$" placeHolder="홍길동" answerKey={key} errorMessage="잘못 입력하신 것 같습니다."/>
</div>
