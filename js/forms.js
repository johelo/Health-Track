$(document).ready(function()
{
    $("span").hide();

    $("input[id*='_req_']").blur(function(){
        if($(this).val()==""){
            $(this).next().show();
        }
    });

    $("input[id*='_req_']").focus(function(){
        $(this).next().hide();
    });

    $("input[id*='_dat_']").blur(function(){
        var oDateMask = new RegExp("^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$")
        if(oDateMask.test($(this).val()) == false){
            $(this).next().show();
        }
    });

    $("input[id*='_dat_']").focus(function(){
        $(this).next().hide();
    });

    $("input[id*='_num_']").blur(function(){
        if($(this).val != ""){
            var oNumericMask = new RegExp("^[0-9]$")
            if(oNumericMask.test($(this).val()) == false){
                $(this).next().show();
            }
        }
    });

    $("input[id*='_num_']").focus(function(){
        $(this).next().hide();
    });
/*
    jQuery(function($) {
        $(document).on('keypress', 'input.somente-numero', function(e) {
            var key = (window.event)?event.keyCode:e.which;
            if((key > 47 && key < 58)) {
                return true;
            } 
            else {
               return (key == 8 || key == 0)?true:false;
            }
        });
    });
    */
    // Data
    /*
    $("#inputData").blur(function(){
        if($(this).val() == ''){
            $(this).addClass("fielderror");
            $("#missingData").show();
        } 
    });
    $("#inputData").focus(function(){
        $("#inputData").addClass("");
        $("span").hide();
    });

    // Hora
    $("#inputTipoatividade").blur(function(){
        if($(this).val() == ''){
            $(this).addClass("fielderror");
            $("#missingAtividade").show();
        } 
    });
    $("#inputTipoatividade").focus(function(){
        $("#inputTipoatividade").addClass("");
        $("span").hide();
    });

    // Tipo de atividade
    $("#inputHora").blur(function(){
        if($(this).val() == ''){
            $(this).addClass("fielderror");
            $("#missingHora").show();
        } 
    });
    $("#inputHora").focus(function(){
        $("#inputHora").addClass("");
        $("span").hide();
    });

    // Calorias
    $("#inputCalorias").blur(function(){
        if($(this).val() == '' || $(this).val()<1){
            $(this).addClass("fielderror");
            $("#missingCalorias").show();
        } 
    });
    $("#inputCalorias").focus(function(){
        $("#inputCalorias").addClass("");
        $("span").hide();
    });
*/
});