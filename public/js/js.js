function sendForm(form_name, post, href){
    $(document.forms[form_name]).on('submit', function() {
        var form = $(this);
        $('.error', form).html('');
        $.ajax({
            url: post,
            method: "POST",
            data: form.serialize(),
            complete: function() {
            },
            statusCode: {
                200: function() {
                    window.location.href = href;
                },
                403: function(jqXHR) {
                    var error = JSON.parse(jqXHR.responseText);
                    formErrorDisp(error);
                    //$('.error', form).html(error.message);
                }
            }
        });
        return false;
    });
}

function formErrorDisp(error_text){
    $('#error_disp').show();
    $('#error_disp p').text(error_text);
}


$( document ).ready(function() {
    //login form
    if($('.loginForm').length > 0){
        sendForm('login_form', '/login', '/todo');
    }
    if($('.regForm').length > 0){
        sendForm('regi_form', '/regi', '/');
    }



    $( ".close" ).on( "click", function() {
       $(this).parent().hide();
    });

});