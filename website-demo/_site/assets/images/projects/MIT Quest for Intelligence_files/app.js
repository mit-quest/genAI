$(document).ready(function() {

  $('.scrollto').on('click', function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1000)
    return false
  })

  // setupRecaptcha();
  //
  // grecaptcha.ready(function() {
  //   grecaptcha.execute('6Ld3gsAUAAAAAB5iYBOmiJckGcyOMDApmuM9JwTg', {action: 'homepage'}).then(function(token) {
  //     $.post("https://www.google.com/recaptcha/api/siteverify", {
  //       headers: {
  //         'Access-Control-Allow-Origin':'*',
  //         'Access-Control-Allow-Headers':'Content-Type',
  //         'Access-Control-Allow-Methods':'GET, POST'
  //       },
  //       data: {
  //         secret: "6Ld3gsAUAAAAAB5iYBOmiJckGcyOMDApmuM9JwTg",
  //         response: token
  //       }
  //     })
  //   });
  // });

})

// function showRecaptcha(element) {
//   Recaptcha.create('6Ld3gsAUAAAAAB5iYBOmiJckGcyOMDApmuM9JwTg', element, {
//     theme: 'custom', // you can pick another at https://developers.google.com/recaptcha/docs/customization
//     custom_theme_widget: 'recaptcha_widget'
//   });
// }

function setupRecaptcha() {
  var contactFormHost = 'https://qi-bridge-site.herokuapp.com',
      form = $('#contact-form'),
      notice = form.find('#notice');

  if (form.length) {
    // showRecaptcha('recaptcha_widget');

    form.submit(function(ev){
      ev.preventDefault();
      $.ajax({
        type: 'POST',
        url: contactFormHost + '/send_email',
        data: form.serialize(),
        dataType: 'json',
        success: function(response) {
          switch (response.message) {
            case 'success':
              form.fadeOut(function() {
                form.html('<h4>' + form.data('success') + '</h4>').fadeIn();
              });
              break;

            case 'failure_captcha':
              // showRecaptcha('recaptcha_widget');
              notice.text(notice.data('captcha-failed')).fadeIn();
              break;

            case 'failure_email':
              notice.text(notice.data('error')).fadeIn();
          }
        },
        error: function(xhr, ajaxOptions, thrownError) {
          notice.text(notice.data('error')).fadeIn();
        }
      });
    });
  }
}