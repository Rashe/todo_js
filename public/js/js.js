function sendForm(form_name){
    $(document.forms[form_name]).on('submit', function() {
        var form = $(this);
        $('.error', form).html('');
        $.ajax({
            url: "/login",
            method: "POST",
            data: form.serialize(),
            complete: function() {
            },
            statusCode: {
                200: function() {
                    window.location.href = "/todo";
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
    sendForm('login_form');

    $( ".close" ).on( "click", function() {
        this.parent().hide();
    });



});