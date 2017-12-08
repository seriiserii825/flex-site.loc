//= ../../../bower_components/jquery/dist/jquery.min.js

$(function(){

    $('#js-header-arrow').on('click', function(e){
        e.preventDefault();

        let idTarget = $(this).attr('href');
        let idTargetOffsetTop = $(idTarget).offset().top;

        $('html, body').animate({
            scrollTop: idTargetOffsetTop
        }, 1000);
    });

    $('#js-btn-up').on('click', function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $(document).on('scroll', function(){

        let documentScroll = $(this).scrollTop();

        if(documentScroll > 700){
            $('#js-btn-up').css('opacity', '.8');
        }else{
            $('#js-btn-up').css('opacity', '0');
        }

    });

});
