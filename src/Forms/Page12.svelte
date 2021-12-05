<script>
    import FormatInput from "../components/FormatInput.svelte";

    const key = "12"
</script>

<div>
    <h1 class="form-title" data-tooltip="간판이나 실제로 불려지는 이름이 아닌, 서류상 명칭을 입력하세요.">'사업자 등록증'상의 <mark class="tooltip-mark">회사 상호</mark>를 입력하세요.</h1>
    <FormatInput pattern="^[가-힣a-zA-Z\(\)]+$" placeHolder="한국회사(주)" answerKey={key} errorMessage="잘못 입력하신 것 같습니다."/>
</div>
