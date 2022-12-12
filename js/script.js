
$(document).ready(function(){

    // Start Back To top
    // $('.btn-backtotops').hide();
    // $(window).scroll(function(){
    //     let getscrolltop = $(this).scrollTop();

    //     if(getscrolltop >= 370){
    //         $('.btn-backtotops').fadeIn(1000);
    //     }else{
    //         $('.btn-backtotops').fadeOut(1000);
    //     }
    // })



    //Start nav
        $('.nav-buttons').click(function(){
            console.log('hi');
            $('.nav-buttons').toggleClass('crossxs');
        })
    //End nav

    // for nav
        $(window).scroll(function(){

            let getscrolltop = $(this).scrollTop();

            if(getscrolltop >= 200){
                $('.navbar').addClass('navmenus');
            }else{
                $('.navbar').removeClass('navmenus');
            }
        })
    
    // Start property
        $('.propertylists').click(function(){
            $(this).addClass('activeitems').siblings().removeClass('activeitems');

            //for filter
            let getattvalue = $(this).attr('data-filter');

            if(getattvalue === "all"){
                $('.filters').show("slide",500);
            }else{
                $('.filters').hide();
                $('.filters').not('.'+getattvalue).hide("slide",500);
                $('.filters').filter('.'+getattvalue).show('slide',500);
                // console.log();
            }
        })

        // for image overlay or lightbox
        lightbox.option({
            showImageNumberLabel : false
        });

        // Start Adv section
        $(window).scroll(function(){
            let getscrolltop = $(this).scrollTop();

            if(getscrolltop >= 900){
                $(".advimages").addClass('fromlefts');
                $(".advtexts").addClass('fromrights');
            }else{
                $(".advimages").removeClass('fromlefts');
                $(".advtexts").removeClass('fromrights');
            }
        })

        // Start Footer Section
        const getyear = $('#getyear');
        const getfullyear = new Date().getUTCFullYear();

        getyear.text(getfullyear) ;

})

