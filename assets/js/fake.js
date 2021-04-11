

/* Custom script only used by internal styleguide */
jQuery(document).ready(function($) {
    if($(window).width() >= 998){
        var rellax = new Rellax('.rellax');
    }

    applyDaContact({
        formSelector: '.contact-form', // le selecteur CSS permettant d'accéder au formulaire
        onRequest: () => true, // Optionnel, est appelé lors de la demande d'envoi, permet potentiellement de valider des éléments avant l'envoi, retourner une valeur évaluée fausse déclenchera l'annulation de l'envoi.
        onSuccess: () => {
            $('.status_form').show();
            $('.status_form').addClass('send');
            $("#nom-complet").val('');
            $("#email").val('');
            $("#message").val('');
            setTimeout(function() { 
                $('.status_form').hide(); 
            }, 1000); 
        }, // Optionnel, est appelé lorsque l'envoi est réussi
        onError: (err) => {
            $('.status_form').show();
            $('.status_form').addClass('error');
            $('.status_form h5').html('Une erreur est survenue');
            setTimeout(function() { 
                $('.status_form').hide(); 
            }, 1000); 
        }, // Optionnel, est appelé lors d'une erreur (que ce soit annulation volontaire via onRequest, une erreur de recaptcha, le formulaire déjà en cours d'envoi, ou une erreur lors de l'envoi)
        onSettled: () => {

        } // Optionnel, est appelé quel que soit le résultat de l'envoi. (permet de réinitialiser des éléments).
    });

  $(function() {
    //caches a jQuery object containing the header element
    var header = $("nav");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            header.addClass("active");
        } else {
            header.removeClass("active");
        }
    });
});

ScrollReveal().reveal('.animmenu', { delay: 400, distance: '0px' });

ScrollReveal().reveal('.lvl1', { distance: '50px' });
ScrollReveal().reveal('.lvl2', { distance: '50px'  });
ScrollReveal().reveal('.lvl3', { distance: '50px'  });
ScrollReveal().reveal('.lvl4', { distance: '50px'  });
ScrollReveal().reveal('.lvl5', { distance: '50px'  });
ScrollReveal().reveal('.lvl6', { distance: '50px'  });



});
