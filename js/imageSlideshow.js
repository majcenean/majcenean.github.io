// Code from w3schools
// https://www.w3schools.com/howto/howto_js_slideshow.asp

 // var slideIndex = 1;
 //      showSlides(slideIndex);
 //      function plusSlides(n) {
 //        showSlides(slideIndex += n);
 //      }
 //      function currentSlide(n) {
 //        showSlides(slideIndex = n);
 //      }
 //      function showSlides(n) {
 //        var i;
 //        var slides = document.getElementsByClassName("mySlides");
 //        var dots = document.getElementsByClassName("dot");
 //        if(n > slides.length) {
 //          slideIndex = 1
 //        }
 //        if(n < 1) {
 //          slideIndex = slides.length
 //        }
 //        for(i = 0; i < slides.length; i++) {
 //          slides[i].style.display = "none";
 //        }
 //        for(i = 0; i < dots.length; i++) {
 //          dots[i].className = dots[i].className.replace(" active", "");
 //        }
 //        slides[slideIndex - 1].style.display = "block";
 //        dots[slideIndex - 1].className += " active";
 //      }

// Adapted code by Karthikeyan posted on StackOverflow, March 9, 2021
// https://stackoverflow.com/questions/66540756/how-do-i-make-an-automatic-image-slideshow-that-i-can-pause-and-press-next-and-b

  var doAnimation = true;
  var slideIndex = 1;
  showSlides(slideIndex);

  function toggleSlides(n) {
    showSlides(slideIndex + n, true);
  }

  // Array.from(document.getElementsByClassName("mySlides")).forEach((mySlide)=> {
  //   mySlide.addEventListener("mouseover",function() {
  //     doAnimation = false;
  //   })
  //   mySlide.addEventListener("mouseout",function() {
  //     doAnimation = true;
  //   });
  // });

  var timer;

  var setSeconds = 4000;

  function showSlides(n, force) {
    // console.log(doAnimation)
    if (doAnimation || force) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (n) {
        slideIndex = n;
      }
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      if (force) {
        clearInterval(timer);
        timer = setInterval(showSlides, setSeconds); // 5000 = 5 seconds
      }
    }
  }

  timer = setInterval(showSlides, setSeconds);

// Arrow click functions
  function plusSlides(n) {
    showSlides(slideIndex += n);
    clearInterval(timer);
    timer = setInterval(showSlides, setSeconds); // 5000 = 5 seconds
  }

// Dot click function
  function currentSlide(n) {
    showSlides(slideIndex = n);
    clearInterval(timer);
    timer = setInterval(showSlides, setSeconds); // 5000 = 5 seconds
  }