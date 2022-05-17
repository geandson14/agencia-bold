$(function(){
    $('.mobile').click(function(){
        var listaMenu = $('.mobile nav');
        listaMenu.slideToggle();
    });

    $('header a').add('footer div a').add('.btn').click(function(e){
        e.preventDefault();
        var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeignt = 0
        $('html, body').animate({
            scrollTop: targetOffset - menuHeignt
        }, 500);
    });
})