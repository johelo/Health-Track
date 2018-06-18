$(document).ready(function()
{
    $("span").hide();

    $("#inputEmail").blur(function(){
        if ($(this).val().length == 0){
            $(this).addClass("fielderror");
            $("#missingEmail").show();
        } 
        else{
            var oEmailMask = new RegExp("^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$")
            if(oEmailMask.test($(this).val()) == false){
                $(this).addClass("fielderror");
                $("#invalidEmail").show();
            }
        }
    });
    
    $("#inputEmail").focus(function(){
        $("#inputEmail").addClass("");
        $("span").hide();
    });

});