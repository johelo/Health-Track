$(document).ready(function()
{
    $("span").hide();

    $("#inputEmail").focus(function(){
        $("span").hide();
    });

    function validadelogin(){
        if ($("#inputEmail").val().length == 0){
            $("#inputEmail").next().show();
            $("#inputEmail").focus();
            return 0;
        }

        if ($("#inputPassword").val().length == 0){
            $("#inputPassword").next().show();
            $("#inputPassword").focus();
            return 0;
        }

        submit();
    }

});

//      <button class="btn btn-lg btn-primary btn-block" id="buttonEnter" type="submit">Entrar</button>
