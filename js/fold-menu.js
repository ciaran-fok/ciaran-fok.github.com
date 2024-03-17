var windowW;

$(document).ready(function() {
    var article = $('#article-text');
    var content = $('#content-block');
    var contentValue = content[0].getBoundingClientRect();
    var contentWidth = contentValue.width;
    // var contentRight = this.getElementById("content-block").style;
    // console.log(contentRight);
    


    // function disableWindowResize() {
        
    //   }

    // content.addEventListener('animationstart', () => {
    //     disableWindowResize();
    // });

    // content.addEventListener('animationend', () => {
    //     window.removeEventListener('resize', () => {
    //       window.resizeTo(window.innerWidth, window.innerHeight);
    //     });
    // });

    $("#search-fold-button").click(function() {
        // reply.animate({right: "-=230px"}, 2000)
        var distance =  contentWidth + 20;

        if (windowW >= 576 && content.hasClass('folded')) {
            // console.log("statementTrue");
        //     reply.animate({right: "-=230px"}, 2000).addClass('unfolded');
        // }
        // else {

        //animate first easing
        // reply.animate({ right : "+=30px" }, 500, 'easeOutCirc').removeClass('folded');
        // .then(animate({ right  : "+=170px" }, 500, 'linear'))
        // .animate({ right  : "+=30px" }, 500, 'easeInCirc');
            // });

            // content.animate({width: 300}, 1000)
            content[0].style.transition= 'transform 0.6s ease-in-out';
            content[0].style.transform = `translateX(${0}px)`;
            article[0].style.transition= 'transform 0.6s ease-in-out';
            article[0].style.transform = `translateX(0%)`;
            content.removeClass('folded');
            // article.removeClass('toCentral');



        } 
        else {
            // content.animate({width: 0}, 1000).addClass('folded');
            content[0].style.transition= 'transform  0.5s ease-in-out';
            content[0].style.transform = `translateX(${distance}px)`;
            article[0].style.transition= 'transform 0.6s ease-in-out';
            article[0].style.transform = `translateX(16%)`;
            content.addClass('folded');
            // article.addClass("toCentral");
        }
    });
});

// $(document).ready(function() {
//     $('html').click(function(e) {  
//         console.log('active')  
//         var reply = $('#search-bundle');
//         var windowW = parseInt($(window).width(), 10);  
//         var button = $('#search-fold-button');
//         var button2 = $('#unfold-button');
    
//         if((windowW < 768 && windowW>=576) || (windowW <576 && (window.innerWidth > window.innerHeight))) {
//             if (!$(e.target).is(button2) && !$(e.target).is(button) &&  !$(e.target).is(reply) && !reply.hasClass('folded')) 
//             {  
//                 // console.log('active2')
//                 // console.log($(e.target).is(button),$(e.target).is(reply));
    
//                 // console.log($(e).not("#unfold-button"));
//                 // $('.menu').remove();     
//                 reply.animate({right: "-=230px"}, 1000).addClass('folded');    
//                 return;       
//             }
//         }         
//     }); 
// });

// $(document).ready(function() {
//     var width,height;
//     var reply = $('#search-bundle');
//     window.onresize = window.onload = function() {
//     // width = this.innerWidth;
//         var windowW = parseInt($(window).width(), 10);  
//         // height = this.innerHeight;
//             if ( windowW >= 768 && reply.hasClass('folded')) {
//                 console.log("yes")
//                 reply.animate({right: "+=230px"}, 1000).removeClass('folded');
//             }
//     // document.body.innerHTML = width + 'x' + height; // For demo purposes
//     }

//     // $('html').click(function(e) {  
//     //     console.log('active')  
//     //     var reply = $('#search-bundle');
//     //     var windowW = parseInt($(window).width(), 10);  
//     //     var button = $('#search-fold-button');
//     //     var button2 = $('#unfold-button');
    
//     //     if((windowW < 768 && windowW>=576) || (windowW <576 && (window.innerWidth > window.innerHeight))) {
//     //         if (!$(e.target).is(button2) && !$(e.target).is(button) &&  !$(e.target).is(reply) && !reply.hasClass('folded')) 
//     //         {  
//     //             console.log('active2')
//     //             console.log($(e.target).is(button),$(e.target).is(reply));
    
//     //             // console.log($(e).not("#unfold-button"));
//     //             // $('.menu').remove();     
//     //             reply.animate({right: "-=230px"}, 1000).addClass('folded');    
//     //             return;       
//     //         }
//     //     }         
//     // }
//     // ); 
// });
window.onresize = window.onload = function() {
        windowW = parseInt($(window).width(), 10);  
        console.log(windowW);
}

$(document).ready(function() {
    windowW = parseInt($(window).width(), 10);  
    var unfoldBtn = $('#unfold-button');
    var foldBtn = $('#fold-button');
    // var search= $("#search-bundle");
    // var menuWidth=$("#content-block").outerHeight();

    // window.onresize = window.onload = function() {
    //     windowW = parseInt($(window).width(), 10);  
    //     console.log(windowW);
    // }

    function checkRightValue() {
        var eltValue = $("#content-block")[0].getBoundingClientRect();
        console.log(eltValue.right, eltValue.width, windowW);
        // var searchRight = parseInt(search.css('right'), 10);

        if (windowW >= 576 && ( eltValue.right - windowW > (eltValue.width / 2))) {
            unfoldBtn.fadeIn();
            foldBtn.fadeOut();
        } else {
            unfoldBtn.fadeOut();
            foldBtn.fadeIn();
        }
    }

    // Call the function initially
    checkRightValue();

    // Check the right value every 500 milliseconds (adjust as needed)
    setInterval(checkRightValue, 500);
});


