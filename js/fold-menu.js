// var windowW;
// var windowH;

// var article = $('#article-text');
// var contentWidth;
// var content = $('#content-block');
// var contentWidth = $('#content-block')[0].getBoundingClientRect().width;
$(document).ready(function() {

    var unfoldBtn = $('#unfold-button');
    var foldBtn = $('#fold-button');
    $("#fold-unfold-button").click(function() {
        // reply.animate({right: "-=230px"}, 2000)
        var article = $('#article-text');
        var content = $('#content-block');

        if (content.hasClass('folded')) {
            console.log("1");

            var contentWidth = $('#content-block')[0].getBoundingClientRect().width;
            // var article = $('#article-text');
            windowW = parseInt($(window).width(), 10);  
            var distance = contentWidth + 15;

            console.log('distance', -distance);
            // content.animate({width: 300}, 1000)
            content[0].style.transition= 'transform 0.6s ease-in-out';
            content[0].style.transform = `translateX(-${distance}px)`;
            console.log(windowW)
            if((windowW >= 992) && (windowW <1200)) {
                console.log("3");
                // article[0].hide();
                article[0].style.transition= 'transform 0.6s ease-in-out';
                article[0].style.transform = `translateX(-${0.5 * distance}px)`;
                }
            content.removeClass('folded');
            unfoldBtn.fadeOut();
            foldBtn.fadeIn();
            


        } 
        else {
            windowW = parseInt($(window).width(), 10);  
            console.log("2");
            // content.animate({width: 0}, 1000).addClass('folded');
            content[0].style.transition= 'transform  0.5s ease-in-out';
            content[0].style.transform = `translateX(0)`;
            if(windowW >= 992 && windowW <1200) {
                article[0].style.transition= 'transform 0.6s ease-in-out';
                article[0].style.transform = `translateX(0)`;
            }
            content.addClass('folded');
            unfoldBtn.fadeIn();
            foldBtn.fadeOut();
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
// // });
// $(document).ready(function() {
//     window.onresize = window.onload = function() {
//         console.log(4);
//         var article = $('#article-text');
//         var content = $('#content-block');
//         contentWidth = $('#content-block')[0].getBoundingClientRect().width;
//         windowW = parseInt($(window).width(), 10);  
//         windowH = parseInt($(window).height(), 10);
//         console.log(windowW);
//         // var content = $('#content-block');
//         content[0].style.transition= 'transform  1s ease-in-out';
//         content[0].style.transform = `translateX(0)`;
//         article[0].style.transition= 'transform 0.6s ease-in-out';
//         article[0].style.transform = `translateX(0)`;
//         content.addClass('folded');
//     }
// });

// $(document).ready(function() {
   
// });

// $(document).ready(function() {
//     windowW = parseInt($(window).width(), 10);  
//     var unfoldBtn = $('#unfold-button');
//     var foldBtn = $('#fold-button');
//     // var search= $("#search-bundle");
//     // var menuWidth=$("#content-block").outerHeight();

//     // window.onresize = window.onload = function() {
//     //     windowW = parseInt($(window).width(), 10);  
//     //     console.log(windowW);
//     // }

//     function checkRightValue() {
//         var eltValue = $("#content-block")[0].getBoundingClientRect();
//         console.log(eltValue.right, eltValue.width, windowW);
//         // var searchRight = parseInt(search.css('right'), 10);

//         if (eltValue.right - windowW > (eltValue.width / 2)) {
//             unfoldBtn.fadeIn();
//             foldBtn.fadeOut();
//         } else {
//             unfoldBtn.fadeOut();
//             foldBtn.fadeIn();
//         }
//     }

//     // Call the function initially
//     checkRightValue();

//     // Check the right value every 500 milliseconds (adjust as needed)
//     setInterval(checkRightValue, 500);
// });


