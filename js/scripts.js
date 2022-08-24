$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],
        smartSpeed: 800,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        

        

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:3
            }
        }
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
});