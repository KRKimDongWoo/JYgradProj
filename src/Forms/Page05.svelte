<script>
    import FormatInput from "../components/FormatInput.svelte";
    import {getContext} from "svelte";
    const { answerStore, answerValid } = getContext("answers");
    const { scrollDown } = getContext("scroll");
    const key = "05"
</script>

<style>
</style>
<div>
    <h1 class="form-title">정보 수집 및 보관에 동의하시면, 민원신청 처리상황을<br>문자메시지, 전화를 통해 제공받으실 수 있습니다.</h1>
    <div class="form-button-pair">
        <button style="width: 1115px;" class="form-button-main" on:click={() => {$answerStore[key] = "동의"; scrollDown(false); }}>&#x25EF    정보 수집에 동의합니다.</button>
        <button style="width: 158px;" class="form-button-sub" on:click={() => {$answerStore[key] = "거부";}}>&#x2573</button>
    </div>
</div>
