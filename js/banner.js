$(document).ready(function() {
    var banner = $('#banner-open');
    var button = $('#banner-tiny');
    var buttonOpen = $('#banner-logo');
    var buttonClose = $('#banner-close');
    $('html').click(function(e) {
        // console.log(e.target)
        if (($(e.target).is(button) || $(e.target).is(buttonOpen) )) {
            e.stopPropagation();
            console.log("open");
            banner.slideDown("slow");

            // buttonOpen.animate({rotation: 90}, 500)
            buttonOpen.fadeOut(50).removeClass('antirotated');
            buttonClose.fadeIn(100).toggleClass('rotated');
        }
        if (($(e.target).is(button) || $(e.target).is(buttonClose))) {
            e.stopPropagation();
            banner.slideUp("slow");
            console.log("close");
            buttonOpen.fadeIn(100).toggleClass('antirotated');
            buttonClose.fadeOut(50).removeClass('rotated');
            
        }
    });

});


// $('#banner-tiny').click(function() {
//     $('#banner-logo').toggleClass('antirotated');
//     $('#banner-close').
// });
$(document).ready(function() {
    var buttonOpen = $('#banner-logo');
    var buttonClose = $('#banner-close');
    var banner = $('#banner-open');
    window.onresize = window.onload = function() {
    // width = this.innerWidth;
        var windowW = parseInt($(window).width(), 10);  
        // height = this.innerHeight;
            if ( windowW >= 768) {
                banner.slideUp("slow");
                console.log("close");
                if (!buttonOpen.hasClass("antirotated")) {
                    buttonOpen.fadeIn(100).toggleClass('antirotated');
                    buttonClose.fadeOut(50).removeClass('rotated');
                }
                
            }
        // var unfoldBtn = $('#unfold-button');
        var unfoldBtn = $('#table-of-content');
        var foldBtn = $('#fold-button');    
        var article = $('#article-text');
        var content = $('#content-block');
        var contentWidth = $('#content-block')[0].getBoundingClientRect().width;
        var windowW = parseInt($(window).width(), 10);  
        var windowH = parseInt($(window).height(), 10);
        
        console.log("Window width:", windowW);
        console.log("Content width:", contentWidth);
        
        
        
        if((windowW <= 575) && (windowH > windowW)) {
            content[0].style.transition= 'transform 0s ease-in-out';
            content[0].style.transform = `translateX(90vw)`;
        }
        else {
            content[0].style.transition = 'transform 0s ease-in-out';
            content[0].style.transform = 'translateX(290px)';
        }

        article[0].style.transition = 'transform 0.6s ease-in-out';
        article[0].style.transform = 'translateX(0)';
        unfoldBtn.fadeIn();
        foldBtn.fadeOut();
        content.addClass('folded');
    }

    // window.onload = function() {
    //     console.log("Window loaded");
    //     initTransformations();
    // };

    // $(window).onresize = function() {
    //     console.log("Window resized");
    //     initTransformations();
    // };

    // function initTransformations() {
        
    // }

});
