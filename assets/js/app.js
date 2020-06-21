$(document).ready(function () {

  $(".loader").fadeOut(300);


  $('.footer-load').load('_footer.html');


  $('#nav .dropdown').on('hover', function () {
    $(this).on('find', '.dropdown-menu').first().stop(true, true).slideDown(100);
  }, function () {
    $(this).on('find', '.dropdown-menu').first().stop(true, true).slideUp(50)
  });

  var stickyTop = $('#navbar').offset().top + 87;

  $(window).scroll(function () {
    var windowTop = $(window).scrollTop();

    if (stickyTop < windowTop) {
      $('#navbar').addClass('sticky');
      $('#navbar').removeClass('normal');
    } else {
      $('#navbar').addClass('normal');
      $('#navbar').removeClass('sticky');
    }
  });

  $('.hero-slider').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    mouseDrag: false,
    dots: false,
    navText: [
      "<i class='fas fa-angle-double-left'></i>",
      "<i class='fas fa-angle-double-right'></i>"
    ]
  });

  $('.num').counterUp({
    delay: 10,
    time: 2000
  });


  $('.doctor-carousel').owlCarousel({
    loop: true,
    margin: 30,
    navText: [
      "<i class='fas fa-arrow-left'></i>",
      "<i class='fas fa-arrow-right'></i>"
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: true
      },
      1000: {
        items: 3,
        nav: true
      }
    }
  });


  $.ajax({
    type: "GET",
    url: "http://kamranaeff1994-002-site3.ctempurl.com/api/Doctors",

    // data: "data",
    // dataType: "dataType",
    success: function (response) {
      $.each(response, function (index, doctor) {
        let item = $('<div></div>', {
          class: 'item'
        });

        let doctorInner = `<div class="card">
           <div class="img-card">
               <img src="http://kamranaeff1994-002-site3.ctempurl.com/images/${doctor.image}" alt="">
               <div class="hover-social">
                   <ul>
                       <li><a href=""><i class="fab fa-facebook-f"></i></a></li>
                       <li><a href=""><i class="fab fa-twitter"></i></a></li>
                       <li><a href=""><i class="fab fa-linkedin-in"></i></a></li>
                   </ul>
               </div>
           </div>
           <div class="caption-text text-center">
               <h3>${doctor.name}</h3>
               <span class="designation mb-10">${doctor.profession}</span>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                   ut labore</p>
           </div>
       </div>`;

        $(item).html(doctorInner);
        $('#owl').find('.owl-item').append(item);

      });
    },
    error: function (response) {
      console.log('ERROR >> ', response);
    }



  });


  $('.datepicker').datepicker();



  $('.feedback-carousel').owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    mouseDrag: false,
    margin: 30,
    center: true,
    dots: false,
    navText: [
      "<i class='fas fa-angle-double-left'></i>",
      "<i class='fas fa-angle-double-right'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

  $('#contactForm').submit(function(e) {
    e.preventDefault();
    let name = $('#name').val();
    let number = $('#number').val();
    let email = $('#email').val();
    let message = $('#message').val();
  
  let regNumber = /^[0-9]*$/;
  let regEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  
  let numberTest = regNumber.test(number);
  let emailTest = regEmail.test(email);
  $(".error").remove();
  
    if (name.length < 1) {
      $('#name').after('<span class="error">Please enter your name</span>');
    }
  
    if (number.length < 1) {
      $('#number').after('<span class="error">Please enter your number</span>');
    }
    else if(!numberTest){
      $('#number').after('<span class="error">Please enter only numbers</span>');
    }
  
    if (email.length < 1) {
      $('#email').after('<span class="error">Please enter your email</span>');
    }
  else if(!emailTest){
    $('#email').after('<span class="error">Please enter valid email</span>');
  }
  
    if (message.length < 1) {
      $('#message').after('<span class="error">Please enter your message</span>');
    }
  });


  $('.news-carousel').owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    mouseDrag: false,
    margin: 30,
    dots: false,
    navText: [
      "<i class='fas fa-angle-double-left'></i>",
      "<i class='fas fa-angle-double-right'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      820: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });


  $('body').append('<div class="top-btn" id="top"><i class="fas fa-arrow-up"></i></div>');
  $(window).on('scroll',  () => {
    if ($(window).scrollTop() != 0) {
      $('#top').fadeIn();
    } else {
      $('#top').fadeOut();
    }
  });
  $('#top').on('click', () => {
    $("html, body").animate({ scrollTop: 0 }, 600);
   
  });



}); 
 let map;
  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }
 