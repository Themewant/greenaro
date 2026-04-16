(function ($) {
    'use strict';

    var form = $('.contact__form-wrapper');

    var formMessages = $('#form-messages');

    $(form).submit(function (e) {
        e.preventDefault();

        // Basic client-side validation
        var fname = $('#fname').val().trim();
        var lname = $('#lname').val().trim();
        var email = $('#email').val().trim();
        var message = $('#message').val().trim();
        var terms = $('#terms').is(':checked');

        if (!fname || !lname || !email || !message) {
            formMessages.removeClass('success').addClass('error');
            formMessages.text('Please fill in all required fields.');
            return false;
        }

        if (!terms) {
            formMessages.removeClass('success').addClass('error');
            formMessages.text('Please accept the Terms and Conditions.');
            return false;
        }

        // Basic email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formMessages.removeClass('success').addClass('error');
            formMessages.text('Please enter a valid email address.');
            return false;
        }

        // Clear any previous messages
        formMessages.removeClass('success error').text('');

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