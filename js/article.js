 // Get all elements with class .img-container
 var imgContainers = document.querySelectorAll('.img-container');

 // Loop through each .img-container and add click event listener
 imgContainers.forEach(function(imgContainer) {
     imgContainer.addEventListener('click', function() {
         // Toggle active class for clicked .article-img-mask
         var mask = this.querySelector('.article-img-mask');
         mask.classList.toggle('active-mask');

         // Toggle active class for clicked .img-container
         this.classList.toggle('active-container');
     });
 });