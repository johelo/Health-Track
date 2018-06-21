$(document).ready(function()
{
    $("span").hide();

    $("input[id^='input_']").focus(function(){
        $("span").hide();
    });

    $("#buttonEnter").on("click", function(event) {
        event.preventDefault();
        var formok = 1;
        if ($("#input_mail_Email").val().length == 0){
            $("#input_mail_Email").next().next().show();
            formok = 0;
        }

        if ($("#input_Password").val().length == 0){
            $("#input_Password").next().next().show();
            formok = 0;
        }

        if (formok == 1){
            document.login.submit();
        } else {
            return 0;
        }
    });
});