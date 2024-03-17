//  // Get all elements with class .img-container
//  var imgContainers = document.querySelectorAll('.img-container');

//  // Loop through each .img-container and add click event listener
//  imgContainers.forEach(function(imgContainer) {
//      imgContainer.addEventListener('click', function() {
//          // Toggle active class for clicked .article-img-mask
//          var mask = this.querySelector('.article-img-mask');
//          mask.classList.toggle('active-mask');

//          // Toggle active class for clicked .img-container
//          this.classList.toggle('active-container');
//      });
//  });

$(document).ready(function() {
    $('.img-container').click(function() {
        // Toggle class for .img-container
        $(this).toggleClass('active-container');

        // Toggle class for .article-img-mask
        $(this).find('.article-img-mask').toggleClass('active-mask');

        // Toggle class for .caption
        $(this).parent().find('.caption').toggleClass('active-caption');
    });
});