(function ($) {
    'use strict';

    var form = $('.contact__form-wrapper');

    var formMessages = $('#form-messages');

    $(form).submit(function (e) {
        e.preventDefault();

        var formData = $(form).serialize();

        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function (response) {

            formMessages.removeClass('error').addClass('success');
            formMessages.text(response);

            $('#fname, #lname, #email, #message').val('');
            $('#terms').prop('checked', false);
        })
        .fail(function (data) {

            formMessages.removeClass('success').addClass('error');

            if (data.responseText !== '') {
                formMessages.text(data.responseText);
            } else {
                formMessages.text('Oops! An error occured and your message could not be sent.');
            }
        });
    });

})(jQuery);