<script>
    import FormatInput from "../components/FormatInput.svelte";
    import {getContext} from "svelte";
    const { answerStore, answerValid } = getContext("answers");
    const { nextSection } = getContext("scroll");

    function toIndexPage(e) {
        window.location="/index.html";
    }
</script>

<style>
</style>
<div>
    <h1 class="form-title" style="margin-bottom: 419px"><mark class="form-review-mark">홍길동</mark> 귀하의 <mark class="form-review-mark">임금체불진정서</mark> 민원이 귀하의 회사 주소지<br>관할과 같은 <mark class="form-review-mark">서초노동센터</mark>에 접수되었습니다. 처리가 <br>진행되는대로 문자메세지와 전화로 안내드리겠습니다.</h1>
    <button style="width: 1333px;" class="form-button-main" on:click={() => {toIndexPage();}}>&#x2713  알겠습니다. 서식 목록으로 돌아갑니다.</button>
</div>
