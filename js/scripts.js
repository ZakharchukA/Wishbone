$(document).ready(function(){
    $( function() {
        $( "#dialog" ).dialog({
            autoOpen: false,
            show: {
                effect: "blind",
                duration: 400
            },
            hide: {
                effect: "explode",
                duration: 400
            }
        });

        $( "#opener" ).on( "click", function() {
            $( "#dialog" ).dialog( "open" );
        });
    } );

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],
        smartSpeed: 800,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        center: true,
        dotsSpeed: 200,
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