$(document).ready(function() {
    var reply = $('#search-bundle');
    $("#search-fold-button").click(function() {
        // reply.animate({right: "-=230px"}, 2000)

        if (reply.hasClass('folded')) {
            // console.log("statementTrue");
        //     reply.animate({right: "-=230px"}, 2000).addClass('unfolded');
        // }
        // else {

        //animate first easing
        // reply.animate({ right : "+=30px" }, 500, 'easeOutCirc').removeClass('folded');
        // .then(animate({ right  : "+=170px" }, 500, 'linear'))
        // .animate({ right  : "+=30px" }, 500, 'easeInCirc');
            // });

        reply.animate({right: "+=230px"}, 1000).removeClass('folded');
    }
    });
});

$(document).ready(function() {
    $('html').click(function(e) {  
        console.log('active')  
        var reply = $('#search-bundle');
        var windowW = parseInt($(window).width(), 10);  
        var button = $('#search-fold-button');
        var button2 = $('#unfold-button');
    
        if((windowW < 768 && windowW>=576) || (windowW <576 && (window.innerWidth > window.innerHeight))) {
            if (!$(e.target).is(button2) && !$(e.target).is(button) &&  !$(e.target).is(reply) && !reply.hasClass('folded')) 
            {  
                // console.log('active2')
                // console.log($(e.target).is(button),$(e.target).is(reply));
    
                // console.log($(e).not("#unfold-button"));
                // $('.menu').remove();     
                reply.animate({right: "-=230px"}, 1000).addClass('folded');    
                return;       
            }
        }         
    }); 
});

$(document).ready(function() {
    var width,height;
    var reply = $('#search-bundle');
    window.onresize = window.onload = function() {
    // width = this.innerWidth;
        var windowW = parseInt($(window).width(), 10);  
        // height = this.innerHeight;
            if ( windowW >= 768 && reply.hasClass('folded')) {
                console.log("yes")
                reply.animate({right: "+=230px"}, 1000).removeClass('folded');
            }
    // document.body.innerHTML = width + 'x' + height; // For demo purposes
    }

    // $('html').click(function(e) {  
    //     console.log('active')  
    //     var reply = $('#search-bundle');
    //     var windowW = parseInt($(window).width(), 10);  
    //     var button = $('#search-fold-button');
    //     var button2 = $('#unfold-button');
    
    //     if((windowW < 768 && windowW>=576) || (windowW <576 && (window.innerWidth > window.innerHeight))) {
    //         if (!$(e.target).is(button2) && !$(e.target).is(button) &&  !$(e.target).is(reply) && !reply.hasClass('folded')) 
    //         {  
    //             console.log('active2')
    //             console.log($(e.target).is(button),$(e.target).is(reply));
    
    //             // console.log($(e).not("#unfold-button"));
    //             // $('.menu').remove();     
    //             reply.animate({right: "-=230px"}, 1000).addClass('folded');    
    //             return;       
    //         }
    //     }         
    // }
    // ); 
});


$(document).ready(function() {
    var unfoldBtn = $('#unfold-button');
    var foldBtn = $('#fold-button');
    var search= $("#search-bundle");

    function checkRightValue() {
        var searchRight = parseInt(search.css('right'), 10);

        if (searchRight < -115) {
            unfoldBtn.show();
            foldBtn.hide();
        } else {
            unfoldBtn.hide();
            foldBtn.show();
        }
    }

    // Call the function initially
    checkRightValue();

    // Check the right value every 500 milliseconds (adjust as needed)
    setInterval(checkRightValue, 200);
});


