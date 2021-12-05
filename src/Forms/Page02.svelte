<script>
    import FormatInput from "../components/FormatInput.svelte";
    const key = "02"
</script>

<style>
    .form-address-button {
        width: 311px;
        height: 94px;

        margin: 52px 0;
        text-align: center;
        font: normal normal 500 36px/36px noto-sans-cjk-kr;
        letter-spacing: 0;
        color: #FFFFFF;

        display: block;

        background: #3C3C3C 0 0 no-repeat padding-box;
        border-radius: 5px;
        opacity: 1;
    }
</style>
<div>
<!--    <h1 class="form-title">실제 거주하시는 곳의 <mark class="tooltip-mark" data-tooltip="주민등록상의 거주지가 아닙니다.">주소</mark>를 입력하세요.</h1>-->
    <h1 class="form-title" data-tooltip="주민등록상의 거주지가 아닙니다.">실제 거주하시는 곳의 <mark class="tooltip-mark">주소</mark>를 입력하세요.</h1>
    <button class="form-address-button">주소 검색하기</button>
    <FormatInput placeHolder="서울시 관악구 은천로 93" answerKey={key+"0"}/>
    <FormatInput placeHolder="벽산블루밍아파트 11층 1106호" answerKey={key+"1"}/>
</div>
