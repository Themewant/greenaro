/*=== Javascript function indexing here ===========

1. headerSticky
2. swiperActivation
3. wowActive
4. jaraLux
5. backToTopInit
7. magnificPopup
8. mobileMenu
9. desktopMenu
10. stickySidebar
11. preloader
12. odoMeter
13. smoothScroll
14. videoActive
15. gsapTextanim

==================================================*/
(function ($) {
  'use strict';

  var rtsJs = {
    m: function (e) {
      rtsJs.d();
      rtsJs.methods();
    },
    d: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $('body')),
        (this._html = $('html'));
    },
    methods: function (e) {
      rtsJs.headerSticky();
      rtsJs.swiperActivation();
      rtsJs.wowActive();
      rtsJs.jaraLux();
      rtsJs.backToTopInit();
      rtsJs.magnificPopup();
      rtsJs.mobileMenu();
      rtsJs.stickySidebar();
      rtsJs.preloader();
      rtsJs.odoMeter();
      rtsJs.smoothScroll();
      rtsJs.videoActive();
      rtsJs.gsapTextanim();
      rtsJs.gsapTitleAnim();
      rtsJs.revalImage();
    },
    // sticky Header
    headerSticky: function () {
      let scrollTimeout;
      $(window).on('scroll', function () {
        if (!scrollTimeout) {
          scrollTimeout = setTimeout(function() {
            var ScrollBarPostion = $(window).scrollTop();
            if (ScrollBarPostion > 100) {
              $('.header__function').addClass('is__sticky');
            } else {
              $('.header__function').removeClass('is__sticky');
            }
            scrollTimeout = null;
          }, 50); // Throttle to 50ms
        }
      });
    },
    swiperActivation: function () {
      $(document).ready(function () {
        // ABOUT SLIDER
        var swiper = new Swiper('.about-slide-image', {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.about-dot-pagination',
            clickable: true,
          },
        })
        // BRAND SLIDER
        var swiper = new Swiper('.brand__slider', {
          slidesPerView: 6,
          spaceBetween: 30,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          breakpoints: {
            1400: {
              slidesPerView: 6,
            },
            1200: {
              slidesPerView: 5,
            },
            991: {
              slidesPerView: 4,
            },
            767: {
              slidesPerView: 4,
            },
            575: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 3,
            },
          },
        });
        // TESTIMONIAL SLIDER
        var swiper = new Swiper('.testi__slider', {
          slidesPerView: 4,
          spaceBetween: 30,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: '.rts-btn-next',
            prevEl: '.rts-btn-prev',
          },
          pagination: {
            el: '.rts-dot-pagination',
            clickable: true,
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          },
        });
        // TESTIMONIAL SLIDER 2
        var swiper2 = new Swiper('.testi__sliders-2', {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: '.rts-btn-next',
            prevEl: '.rts-btn-prev',
          },
        });
        // TESTIMONIAL SLIDER 3
        var swiper3 = new Swiper('.testi__slider__three', {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: '.rts-btn-next',
            prevEl: '.rts-btn-prev',
          },
          pagination: {
            el: '.rts-dot-pagination',
            clickable: true,
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          },
        });
        // TEAM SLIDER 
        var swiper = new Swiper('.team__item__slide', {
          slidesPerView: 4,
          spaceBetween: 30,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: '.rts-btn-next',
            prevEl: '.rts-btn-prev',
          },
          pagination: {
            el: '.rts-dot-pagination',
            clickable: true,
          },
          breakpoints: {
            1400: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }
        });
        // PROJECT SLIDER
        var swiper = new Swiper('.project__sliders', {
          slidesPerView: 2,
          spaceBetween: 30,
          centeredSlides: true,
          loopFillGroupWithBlank: true,
          grabCursor: true,
          loop: true,
          speed: 1500,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 2 },
          },
        });
        // PROJECT SLIDER TWO
        var swiper = new Swiper('.project__sliders-2', {
          slidesPerView: 2,
          spaceBetween: 30,
          centeredSlides: true,
          loopFillGroupWithBlank: true,
          grabCursor: true,
          loop: true,
          speed: 1500,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          breakpoints: {
            0: { slidesPerView: 1 },
            576: { slidesPerView: 1.5 },
            768: { slidesPerView: 1.5 },
            1200: { slidesPerView: 2 },
          },
        });
        // SHOP SLIDER
        var swiper = new Swiper('.shop__sliders', {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          speed: 1000,
          // autoplay: {
          //   delay: 3000,
          //   disableOnInteraction: false,
          // },
          pagination: {
            el: ".shop__pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<span class="' +
                className +
                '">' +
                ("0" + (index + 1)) +
                "</span>"
              );
            },
          },
        });
      });
    },
    wowActive: function () {
      new WOW().init();
    },
    jaraLux: function (e) {
      $(document).ready(function () {
        // Function to detect if the device is mobile
        function isMobileDevice() {
          return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }

        // Initialize jarallax only if it's not a mobile device
        if (!isMobileDevice()) {
          $('.jarallax').jarallax();
        } else {
          console.log('Jarallax skipped on mobile devices');
        }
      });
    },
    backToTopInit: function (e) {
      $(document).ready(function () {
        var backButton = $('#rts-back-to-top');
        $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
            backButton.addClass('show');
          } else {
            backButton.removeClass('show');
          }
        });
        backButton.on('click', function () {
          $('html, body').animate(
            {
              scrollTop: 0,
            },
            1000
          );
        });
      });
    },
    magnificPopup: function (e) {
      // Image Gallery Popup
      $('.gallery').each(function () {
        $(this).magnificPopup({
          delegate: 'a',
          type: 'image',
          gallery: {
            enabled: true,
          },
        });
      });

      // Video Popup
      $('.popup-video').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
      });
    },
    mobileMenu: function () {
      try {
        // ===== Clone desktop menu =====
        var menuClone = $('.mobile__menu__active > ul').clone();

        // Add has-dropdown & chevron
        menuClone.find('li').each(function () {
          if ($(this).children('.sub-menu').length > 0) {
            $(this).addClass('has-dropdown');

            if ($(this).children('a').find('.chevron').length === 0) {
              $(this).children('a').append('<span class="chevron"><i class="fas fa-chevron-right"></i></span>');
            }
          }
        });

        // Inject into offcanvas
        $('.rts__offcanvas__mobile__menu nav').html(menuClone);

        // ===== Hide all submenus initially =====
        $('.rts__offcanvas__mobile__menu .sub-menu').hide();

        // ===== Submenu toggle =====
        $(document).on('click', '.rts__offcanvas__mobile__menu li.has-dropdown > a', function (e) {
          e.preventDefault();
          var parent = $(this).parent();
          var subMenu = parent.children('.sub-menu');

          if (parent.hasClass('active')) {
            // Close current submenu
            subMenu.stop(true, true).slideUp(400);
            parent.removeClass('active');
          } else {
            // Open current submenu
            subMenu.stop(true, true).slideDown(400);
            parent.addClass('active');

            // Close siblings
            parent.siblings('.has-dropdown').removeClass('active').children('.sub-menu').stop(true, true).slideUp(400);
          }
        });

        // ===== Offcanvas open =====
        // Use correct selector from your HTML, e.g., rts__offcanvas__header-toggle
        $(document).on('click', '.offcanvas-toggle', function (e) {
          e.preventDefault();
          $('.rts__offcanvas, .rts__offcanvas__overlay').addClass('active');
        });

        // ===== Offcanvas close (X button or overlay) =====
        $(document).on('click', '.rts__offcanvas__toggle__close, .rts__offcanvas__overlay', function (e) {
          e.preventDefault();
          $('.rts__offcanvas, .rts__offcanvas__overlay').removeClass('active');
        });

        console.log('Mobile menu initialized successfully');
      } catch (error) {
        console.error('Mobile menu initialization failed:', error);
      }
    },
    stickySidebar: function (e) {
      if (typeof $.fn.theiaStickySidebar !== 'undefined') {
        $('.sticky-wrap .sticky-item').theiaStickySidebar({
          additionalMarginTop: 100,
        });
      }
    },
    preloader: function () {
      window.addEventListener("load", function () {
        document.querySelector("body").classList.add("loaded");
      });
    },
    odoMeter: function () {
      $(document).ready(function () {
        window.odometerOptions = {
          format: '(ddd)',
        };

        let scrollTimeout;
        const odometerElements = $('.odometer').toArray();

        function triggerOdometer(element) {
          const $element = $(element);
          if (!$element.hasClass('odometer-triggered')) {
            const countNumber = $element.attr('data-count');
            $element.html(countNumber);
            $element.addClass('odometer-triggered');
          }
        }

        function isInViewport(element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
        }

        function handleOdometer() {
          odometerElements.forEach(function(element) {
            if (isInViewport(element)) {
              triggerOdometer(element);
            }
          });
        }

        // Throttled scroll handler
        function throttledScroll() {
          if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
              handleOdometer();
              scrollTimeout = null;
            }, 100); // Throttle to 100ms
          }
        }

        // Check on page load
        handleOdometer();

        // Use throttled scroll handler
        $(window).on('scroll', throttledScroll);
      });
    },
    smoothScroll: function (e) {
      $(document).on('click', '.onepage a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate(
          {
            scrollTop: $($.attr(this, 'href')).offset().top,
          },
          300
        );
      });
    },
    videoActive: function () {
      $(document).on('click', '#myBtn', function () {
        $("#myVideo").toggleClass("show");

        const $btn = $(this);
        const isFullSize = $btn.data("fullSize"); // Check if it's currently full size

        if (isFullSize) {
          $btn.css({
            opacity: "1",
            width: $btn.data("originalWidth"), // Restore original width
            height: $btn.data("originalHeight") // Restore original height
          }).data("fullSize", false);
        } else {
          // Store the original width and height before changing
          $btn.data("originalWidth", $btn.css("width"));
          $btn.data("originalHeight", $btn.css("height"));

          $btn.css({
            opacity: "0",
            width: "100%", // Set to 100% width
            height: "100%" // Set to 100% height
          }).data("fullSize", true);
        }
      });
      $(document).ready(function () {
        var $video = $("#myVideo");
        var $btn = $("#myBtn");

        if ($video.length && $btn.length) {
          $btn.on("click", function () {
            if ($video[0].paused) {
              $video[0].play();
            } else {
              $video[0].pause();
            }
          });
        }
      });

    },
    gsapTextanim: function () {
      $(document).ready(function () {
        let addAnimation = function () {
          $(".rts-text-anime").each(function (index) {
            const text = new SplitType($(this), {
              types: "lines, words",
              lineClass: "word-line"
            }); let textInstance = $(this);
            let line = textInstance.find(".word-line");
            let word = line.find(".word"); let tl = gsap.timeline({
              scrollTrigger: {
                trigger: textInstance,
                start: "top 85%",
                end: "top 85%",
                onComplete: function () {
                  $(textInstance).removeClass("rts-text-anime");
                }
              }
            }); tl.set(textInstance, { opacity: 1 }).from(word, {
              y: "100%",
              skewX: "-5",
              duration: 2,
              stagger: 0.03,
              ease: "expo.out"
            });
          });
        }; addAnimation(); window.addEventListener("resize", function (event) {
          if ($(window).width() >= 992) { addAnimation(); }
        });
      });
    },
    gsapTitleAnim: function () {
      $(document).ready(function () {
        const animatedElements = document.querySelectorAll('.rts-text-anime');
        if (!animatedElements.length) {
          return;
        }

        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
          gsap.registerPlugin(ScrollTrigger);
        }

        animatedElements.forEach((element) => {
          const hasTranslateX = element.hasAttribute('data-translateX');
          const hasTranslateY = element.hasAttribute('data-translateY');

          const staggerAmount = parseFloat(element.getAttribute('data-stagger')) || 0.05;
          const translateXValue = hasTranslateX ? parseFloat(element.getAttribute('data-translateX')) : 20;
          const translateYValue = hasTranslateY ? parseFloat(element.getAttribute('data-translateY')) : false;
          const onScrollValue = parseInt(element.getAttribute('data-on-scroll') || '1', 10);
          const delayValue = parseFloat(element.getAttribute('data-delay')) || 0.5;
          const easeType = element.getAttribute('data-ease') || 'power2.out';

          const splitText = new SplitType(element, { type: 'chars, words' });
          const config = {
            duration: hasTranslateX && hasTranslateY ? 3 : 1,
            delay: delayValue,
            autoAlpha: 0,
            ease: easeType,
            stagger: staggerAmount,
          };

          if (hasTranslateX) {
            config.x = translateXValue;
          }

          if (hasTranslateY) {
            config.y = translateYValue;
          }

          if (!hasTranslateX && !hasTranslateY) {
            config.x = 50;
          }

          if (onScrollValue === 1) {
            config.scrollTrigger = {
              trigger: element,
              start: 'top 85%',
            };
          }

          gsap.from(splitText.chars, config);
        });
      });
    },
    revalImage: function () {
      if ($('.reveal').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
          let image = container.querySelector("img");
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              toggleActions: "play none none none"
            }
          });
          tl.set(container, {
            autoAlpha: 1
          });
          tl.from(container, 1, {
            xPercent: -100,
            ease: Power2.out
          });
          tl.from(image, 1, {
            xPercent: 100,
            scale: 1,
            delay: -1,
            ease: Power2.out
          });
        });
      }
    }
  };
  rtsJs.m();

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-bg-src]').forEach(function (el) {
      const bg = el.getAttribute('data-bg-src');
      if (bg) {
        el.style.backgroundImage = `url(${bg})`;
        el.style.backgroundSize = 'cover'; // Optional
        el.style.backgroundPosition = 'center'; // Optional
        el.style.backgroundRepeat = 'no-repeat'; // Optional
      }
    });
  });

  // BOOTSTRAP TOOLTIPS
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
})(jQuery, window);
