$(document).ready(function()
{
    $("span").hide();

    // Campo obrigatório
    $("input[id*='_req_']").blur(function(){
        if($(this).val().length == 0){
            $(this).next().show();
        }
    });

    // Campo email
    $("input[id*='_mail_']").blur(function(){
        checkregexfield($(this).attr("id"), /^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$/)
    });

    // Campo data
    $("input[id*='_dat_']").blur(function(){
        checkregexfield($(this).attr("id"), /^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$/)
    });

    //Campo hora
    $("input[id*='_hor_']").blur(function(){
        checkregexfield($(this).attr("id"), /^[0-2][0-3]:[0-5][0-9]$/)
    });

    //Campo numérico
    $("input[id*='_num_']").blur(function(){
        checkregexfield($(this).attr("id"), /^[0-9]$/)
    });

    //Campo decimal
    $("input[id*='_dec_']").blur(function(){
        checkregexfield($(this).attr("id"), /^[0-2],[0-9][0-9]$/)
    });

    //Limpa mensagem
    $("input[id^='input_']").focus(function(){
        $(this).next().hide();
    });
   
    //Valida conteúdo
    function checkregexfield(fieldid, regexpr) {
        fieldvalue = $("#"+fieldid).val().length();
        if(fieldvalue > 0){
            var oFieldMask = new RegExp(regexpr)
            if(oFieldMask.test(fieldvalue) == false){
                $("#"+fieldid).next().show();
                return 0;
            }
        }
        return 1;
    }    
    
});