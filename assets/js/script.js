// loader script 
$(document).ready(function(){
  setTimeout(()=> {
      $('.loader').remove();
  } , 800); // after 8 sec it will remove.
});



AOS.init();



// department carousel 
if(document.querySelector('.dep_carousel') !== null){
  $('.dep_carousel').slick({
    margin:10,
    dots: true,
    infinite: true,
    // autoplay:true,
    autoPlayTimeout:2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });
}




// home page doctor carousel 
if(document.querySelector('.doctor_carousel') !== null){
  $('.doctor_carousel').slick({
    
    dots: true,
    infinite: true,
    // autoplay:true,
    autoPlayTimeout:2000,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });
}



// about page testimonial carousel 
if(document.querySelector('.testimonial_carousel') !== null){
  $('.testimonial_carousel').slick({
    dots: true,
    infinite: true,
    // autoplay:true,
    autoPlayTimeout:2000,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });
}





// Check if the user is scrolling up or down
let previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
let isScrollingDown = true;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;


  if(currentScrollPosition > 400){
    console.log(currentScrollPosition)
    if (currentScrollPosition > previousScrollPosition && isScrollingDown) {
      document.querySelector('.navbar').classList.remove('fix')
      isScrollingDown = false;
    } else if (currentScrollPosition < previousScrollPosition && !isScrollingDown) {
      document.querySelector('.navbar').classList.add('fix')
      isScrollingDown = true;
    }
  }else{
    document.querySelector('.navbar').classList.remove('fix')
  }
    
  previousScrollPosition = currentScrollPosition;
});