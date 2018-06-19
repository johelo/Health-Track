$(document).ready(function()
{
    $("span").hide();

    // Campo obrigatório
    $("input[id*='_req_']").blur(function(){
        if($(this).val()==""){
            $(this).next().show();
        }
    });

    $("input[id*='_req_']").focus(function(){
        $(this).next().hide();
    });

    // Campo combo
    $("input[id*='_cbo_']").change(function(){
        if($(this).val()==""){
            $(this).next().show();
        }
    });

    $("input[id*='_cbo_']").focus(function(){
        $(this).next().hide();
    });

    // Campo email
    $("input[id*='_mail_']").blur(function(){
        var oEmailMask = new RegExp("^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$")
        if(oEmailMask.test($(this).val()) == false){
            $(this).next().show();
        }
    });

    $("input[id*='_mail_']").focus(function(){
        $(this).next().hide();
    });
    
    // Campo data
    $("input[id*='_dat_']").blur(function(){
        var oDateMask = new RegExp(/^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$/)
        if(oDateMask.test($(this).val()) == false){
            $(this).next().show();
        }
    });

    $("input[id*='_dat_']").focus(function(){
        $(this).next().hide();
    });

    //Campo hora
    $("input[id*='_hor_']").blur(function(){
        if($(this).val != ""){
            var oNumericMask = new RegExp(/^[0-2][0-3]:[0-5][0-9]$/)
            if(oNumericMask.test($(this).val()) == false){
                $(this).next().show();
            }
        }
    });

    $("input[id*='_hor_']").focus(function(){
        $(this).next().hide();
    });
    
    //Campo numérico
    $("input[id*='_num_']").blur(function(){
        if($(this).val != ""){
            var oNumericMask = new RegExp(/^[0-9]$/)
            if(oNumericMask.test($(this).val()) == false){
                $(this).next().show();
            }
        }
    });

    $("input[id*='_num_']").focus(function(){
        $(this).next().hide();
    });

    //Campo decimal
/*    $("input[id*='_dec_']").blur(function(){
        checkregexfield(/^[0-2],[0-9][0-9]$/)
    });
*/
    //Campo decimal
    $("input[id*='_dec_']").blur(function(){
        if($(this).val != ""){
            var oNumericMask = new RegExp(/^[0-2],[0-9][0-9]$/)
            if(oNumericMask.test($(this).val()) == false){
                $(this).next().show();
            }
        }
    });

    $("input[id*='_dec_']").focus(function(){
        $(this).next().hide();
    });
   
    function checkregexfield(expr) {
        field = $(this).val;
        if(field != ""){
            var oFieldMask = new RegExp(expr)
            if(oFieldMask.test(field) == false){
                $(this).next().show();
            }
        }
    }    
    
});