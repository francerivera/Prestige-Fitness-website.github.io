(function ($) {
        "use strict";

        $(document).ready(function () {
            // Function to show Login Form
            function showLoginForm() {
                $('#authModalLabel').text("Login");
                $('#loginForm').show();
                $('#registerForm').hide();
            }

            // Function to show Register Form
            function showRegisterForm() {
                $('#authModalLabel').text("Register");
                $('#loginForm').hide();
                $('#registerForm').show();
            }

            // Toggle between forms
            $('#toggleToRegister').on('click', function (e) {
                e.preventDefault();
                showRegisterForm();
            });

            $('#toggleToLogin').on('click', function (e) {
                e.preventDefault();
                showLoginForm();
            });

            // Attach click events for opening modal with the correct form
            $('.login-btn').on('click', function () {
                showLoginForm();
            });

            $('.register-btn').on('click', function () {
                showRegisterForm();
            });
            
            // Spinner
            var spinner = function () {
                setTimeout(function () {
                    if ($('#spinner').length > 0) {
                        $('#spinner').removeClass('show');
                    }
                }, 1);
            };
            spinner(0);

            // Initiate the wow.js animation library
            new WOW().init();

            // Header carousel
            $(".header-carousel").owlCarousel({
                animateOut: 'fadeOut',
                items: 1,
                margin: 0,
                stagePadding: 0,
                autoplay: true,
                smartSpeed: 1000,
                dots: false,
                loop: true,
                nav: true,
                navText: [
                    '<i class="bi bi-arrow-right"></i>',
                    '<i class="bi bi-arrow-left"></i>',
                ],
            });

            // Features Section
            $(".feature-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                dots: false,
                loop: true,
                margin: 25,
                nav: true,
                navText: [
                    '<i class="fas fa-chevron-left"></i>',
                    '<i class="fas fa-chevron-right"></i>'
                ],
                responsiveClass: true,
                responsive: {
                    0: { items: 1 },
                    576: { items: 1 },
                    768: { items: 2 },
                    992: { items: 2 },
                    1200: { items: 3 }
                }
            });

            // Blogs Section
            $(".blog-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                dots: true,
                loop: true,
                margin: 25,
                nav: false,
                responsiveClass: true,
                responsive: {
                    0: { items: 1 },
                    576: { items: 1 },
                    768: { items: 2 },
                    992: { items: 2 },
                    1200: { items: 3 }
                }
            });

            // Testimonials Section
            $(".testimonial-carousel").owlCarousel({
                items: 1,
                autoplay: true,
                smartSpeed: 1000,
                dots: false,
                loop: true,
                nav: true,
                navText: [
                    '<i class="fas fa-chevron-left"></i>',
                    '<i class="fas fa-chevron-right"></i>'
                ],
                responsiveClass: true,
                responsive: {
                    0: { items: 1 },
                    576: { items: 1 },
                    768: { items: 1 },
                    992: { items: 1 }
                }
            });

            // Back to top button
            $(window).scroll(function () {
                if ($(this).scrollTop() > 300) {
                    $('.back-to-top').fadeIn('slow');
                } else {
                    $('.back-to-top').fadeOut('slow');
                }
            });

            $('.back-to-top').click(function () {
                $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
                return false;
            });

        });S

})(jQuery);

