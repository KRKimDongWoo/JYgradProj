<script>
    import FormatInput from "../components/FormatInput.svelte";

    const key = "14"
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
    <h1 class="form-title" data-tooltip="행정상 회사의 주소와는 무관합니다.">실제 근무했던 장소의 <mark class="tooltip-mark">주소</mark>를 입력하세요.</h1>
    <button class="form-address-button">주소 검색하기</button>
    <FormatInput placeHolder="서울시 관악구 남부순환로230길 11" answerKey={key+"0"}/>
    <FormatInput placeHolder="은평빌딩 5층" answerKey={key+"1"}/>
</div>
