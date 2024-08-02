document.addEventListener("DOMContentLoaded", function() {
    const topBar = document.querySelector(".top-bar");
    const navBar = document.querySelector(".navbar")
    window.addEventListener("scroll", function() {
        if (window.innerWidth >= 299) {
            if (window.scrollY > 0) {
                topBar.classList.remove( "d-lg-flex");
                navBar .classList.add("sticky", "bg-white")
                
            } else {
                topBar.classList.add("d-lg-flex");
                navBar .classList.remove("sticky", "bg-white")
            }
        } else {
            topBar.classList.add("d-lg-flex");
            navBar .classList.remove("sticky", "bg-white")
        }
    });
});




// (jQuery);

    // // Fixed Navbar
    // $(window).scroll(function () {
    //     if ($(window).width() < 992) {
    //         if ($(this).scrollTop() > 45) {
    //             $('.fixed-top').addClass('bg-white shadow');
    //         } else {
    //             $('.fixed-top').removeClass('bg-white shadow');
    //         }
    //     } else {
    //         if ($(this).scrollTop() > 45) {
    //             $('.fixed-top').addClass('bg-white shadow').css('top', -45);
    //         } else {
    //             $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
    //         }
    //     }
    // });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<',
            '>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
(jQuery);


// $(document).ready(function() {
//   var owl = $('.owl-carousel');

//   owl.owlCarousel({
//       items: 4, // Adjust based on your carousel settings
//       center: true,
//       loop: true,
//       margin: 10,
//       onInitialized: callback,
//       onChanged: callback
//   });

//   function callback(event) {
//       // Remove previous center class
//       $('.testimonial-item').removeClass('center');

//       // Add center class to the current center item
//       var centerItem = $(event.target).find('.owl-item.center').eq(1); // .eq(1) to get the exact center item
//       centerItem.find('.testimonial-item').addClass('center');
//   }
// });
 // Testimonials carousel
$(document).ready(function() {
 $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText : [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
    ],
    responsive: {
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});


(jQuery);
});

document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.p1');

    elements.forEach(function(element) {
        var waypoint = new Waypoint({
            element: element,
            handler: function(direction) {
                element.classList.add('animate');
            },
            offset: '80%'
        });
    });
});