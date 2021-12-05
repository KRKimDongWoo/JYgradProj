<script>
    import NumberInput from "../components/NumberInput.svelte";
    import FormatInput from "../components/FormatInput.svelte";

    const key = "22"
</script>

<div>
    <h1 class="form-title" data-tooltip="일반적으로 산재/고용보험 상실일 하루 전 날을 의미합니다.">해당 회사에서 <mark class="tooltip-mark">언제 퇴사</mark>하였습니까?</h1>
    <div class="form-group-horizontal">
        <FormatInput style="margin-right: 132px;"
                     label="년"
                     answerKey="{key + 0}"
                     placeHolder="2020"
                     iMaskPattern="0000"
                     pattern={"^[0-9]{4}"}
                     errorMessage="잘못 입력하신 것 같습니다."/>
        <FormatInput style="margin-right: 132px;"
                     label="월"
                     answerKey="{key + 1}"
                     placeHolder="06"
                     iMaskPattern="00"
                     pattern={"^[0-9]{2}"}
                     errorMessage="잘못 입력하신 것 같습니다."/>
        <FormatInput label="일"
                     answerKey="{key + 2}"
                     placeHolder="06"
                     iMaskPattern="00"
                     pattern={"^[0-9]{2}"}
                     errorMessage="잘못 입력하신 것 같습니다."/>
    </div>
</div>
