$(document).ready(function() {

  fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bitgrit')
  .then((res) => res.json())
  .then((data) => {
         // Fillter the array
         const res = data.items //This is an array with the content. No feed, no info about author etc..
         const posts = res.filter(item => item.categories.length > 0) // That's the main trick* !
         
         var recentposts = posts.slice(0, 6);

         setTimeout(function(){

          if (recentposts.length >= 1) {
            $('.carousel--blog').slick({
              lazyLoad: 'ondemand',
              prevArrow: "#blog-previous",
              nextArrow: "#blog-next",
              speed: 300,
              slidesToShow: 4,
              slidesToScroll: 1,
              responsive: [
              {
                breakpoint: 1000,
                settings: {
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1
                }
              }
              ]
            });
          }

          $('.carousel--blog').show(); 

        }, 100);

         let output = '';
         recentposts.forEach((item) => {

          const img = item.thumbnail.slice(0,18);
          if(img == 'https://medium.com') {
           output += `
           <div class="card card--blog">
           <div class="card__header"></div>
           <div class="card__body">
           <h3>${item.title}</h3>
           </div>
           <div class="card__footer">
           <a class="btn" href="${item.link}" target="_blank" rel="noopener" aria-label="blog item">Read More</a>
           </div>
           </div>`
         } else  {
           output += `
           <div class="card card--blog">
           <div class="card__header" style="background: url(${item.thumbnail}) center center/contain no-repeat;"></div>
           <div class="card__body">
           <h3>${item.title}</h3>
           </div>
           <div class="card__footer">
           <a class="btn" href="${item.link}" target="_blank" rel="noopener" aria-label="blog item">Read More</a>
           </div>
           </div>`
         }

       })
         document.querySelector('.carousel--blog').innerHTML = output;
       })
});