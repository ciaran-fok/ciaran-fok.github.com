// $(".fold_reply").click(function() {

//     if ($('.reply').css('display', 'none')) {
//         $(".reply").slideDown("slow");
//     }
//     else {
//         $(".reply").slideUp("fast");
//     }
// });

// $(document).ready(function() {
//     $(".fold_reply").click(function() {
//         var reply = $(this).closest('.comment').find('.reply');

//         if (!reply.hasClass('unfolded')) {
//             // reply.slideRight("slow").addClass('unfolded');
//             reply.show("slide", { direction: "left" }, {width: '50%'}, 1000);
//         } else {
//             reply.slideLeft("slow").removeClass('unfolded');
//         }
//     });
// });

// $(document).ready(function() {
//     $(".fold_reply").click(function() {
//         var reply = $("#reply");

//         if (!reply.hasClass('unfolded')) {
//             reply.animate({width: '50%'}, "slow").addClass('unfolded');
//         } else {
//             reply.animate({width: '0'}, "fast").removeClass('unfolded');
//         }
//     });
// });

$(document).ready(function() {
    $(".fold_reply").click(function() {
        var reply = $(this).closest('.comment').find('.reply');
        reply.animate({left: "+=50px"}, 2000);

        // if (!reply.hasClass('unfolded')) {
        //     $(".content-margin").animate({left: "+=50"}, 2000);
            // reply.toggle("slide",{ direction: "right",distance:100  }, 1000 );
            // reply.animate({TransformStream(0%) '+=150px'}, 800).addClass('unfolded');
            // reply.animate({TransitionEvent()}, "slow").addClass('unfolded');
        // } else {
        //     reply.toggle("slide",{ direction: "left",distance:100  }, 1000 );
            // reply.animate({scrollY: '-=150px'}, 800).removeClass('unfolded');
            // reply.animate({left: '0'}, "fast")
        // }
    });
});
