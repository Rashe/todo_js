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
                    //var error = JSON.parse(jqXHR.responseText);
                    var error = jqXHR.responseText;
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

function createTodo(form_name, post){
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
                200: function(jqXHR) {
                    var resptext = jqXHR.title;
                    appendToList(resptext);
                },
                403: function(jqXHR) {
                    var error = jqXHR.responseText;
                    formErrorDisp(error);
                }
            }
        });
        return false;
    });
}

function appendToList(data){
    $('.todo_listUl').append('<div class="todo_item">' + data +'</div>').hide().fadeIn('slow');
    $('.addput').val('');
}


//DOC READY
$( document ).ready(function() {
    //login form
    if($('.loginForm').length > 0){
        sendForm('login_form', '/login', '/todo');
    }
    if($('.regForm').length > 0){
        sendForm('regi_form', '/regi', '/');
    }
    if($('.todo_list').length > 0){
        createTodo('create_todo', '/todo');
    }

    $( ".close" ).on( "click", function() {
       $(this).parent().hide();
    });

});