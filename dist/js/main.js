function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
    ibg();


    // $(document).ready(function() {
    //     $('.icon-menu').click(function(event) {
    //         $('.menu__icon,.icon-menu').toggleClass('active');
    //     });
    //     $('body').toggleClass('lock')
    // });


    $('.icon-menu').click(function(event) {
        $(this).toggleClass('active');
        $('.menu__body').toggleClass('active');
        $('body').toggleClass('lock');
    })