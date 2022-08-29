$(document).ready(function(){
    $( function() {
        $( "#dialog" ).dialog({
            autoOpen: false,
            show: {
                effect: "fade",
                duration: 600
            },
            hide: {
                effect: "fade",
                duration: 600
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
$(document).on('ready', function(){
    $('.box_how_what').removeAttribute('.hidden');
})