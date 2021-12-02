<script>
    import NumberInput from "../components/NumberInput.svelte";
    import FormatInput from "../components/FormatInput.svelte";

    const key = "20"
</script>

<div>
    <h1 class="form-title" data-tooltip="일반적으로 산재/고용보험 취득 당일을 의미합니다.">해당 회사에 언제 입사하였습니까?</h1>
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
                     placeHolder="6"
                     iMaskPattern="00"
                     pattern={"^[0-9]{2}"}
                     errorMessage="잘못 입력하신 것 같습니다."/>
        <FormatInput label="일"
                     answerKey="{key + 2}"
                     placeHolder="6"
                     iMaskPattern="00"
                     pattern={"^[0-9]{2}"}
                     errorMessage="잘못 입력하신 것 같습니다."/>
    </div>
</div>
