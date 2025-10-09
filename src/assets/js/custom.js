$(function () {
  // Header Scroll
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 60) {
      $("header").addClass("fixed-header");
    } else {
      $("header").removeClass("fixed-header");
    }
  });

  // Count
  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 1000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });

  // Banner Slider
  const owl = $(".banner-slider .owl-carousel");

  // Initialize banner carousel
  function initBannerCarousel() {
    const isRTL = $("html").attr("dir") === "rtl";

    owl.owlCarousel({
      loop: true,
      items: 1,
      margin: 0,
      dots: false,
      nav: false,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      rtl: isRTL,
      onChanged: syncCustomDots,
    });
  }

  // Custom dots click
  $("#customDots .custom-dot").click(function () {
    const index = $(this).data("slide");
    owl.trigger("to.owl.carousel", [index, 300]);
  });

  // Sync function for custom dots
  function syncCustomDots(event) {
    const count = event.item.count;
    const clones = event.relatedTarget._clones.length / 2;
    const currentIndex = event.item.index - clones;
    const realIndex = (currentIndex + count) % count;

    $("#customDots .custom-dot").removeClass("active");
    $(`#customDots .custom-dot[data-slide="${realIndex}"]`).addClass("active");
  }

  // Trigger initial sync
  syncCustomDots({ item: { index: 0, count: 3 }, relatedTarget: { _clones: [] } });

  // Initialize on page load
  initBannerCarousel();


  // Our Blog
  // Initialize Our Blog Carousel
  function initBlogCarousel() {
    const isRTL = $("html").attr("dir") === "rtl";
    $(".our-blog-slider .owl-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      rtl: isRTL,
      navText: [
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 12H4m0 0l6-6m-6 6l6 6"/></svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>`,
      ],
      responsive: {
        0: { items: 1 },
        992: { items: 2 },
        1200: { items: 3 },
      },
    });
  }

  // Initialize on page load
  initBlogCarousel();

  // Partners & Sponsors
  // Function to initialize the partners/sponsors carousel
  function initPartnersCarousel() {
    const isRTL = $("html").attr("dir") === "rtl"; // check current page direction
    $(".partners-sponsors-slider .owl-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      rtl: isRTL,
      navText: [
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 12H4m0 0l6-6m-6 6l6 6"/></svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>`,
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        992: { items: 3 },
        1024: { items: 4 },
        1200: { items: 5 },
      },
    });
  }

  // Initialize on page load
  initPartnersCarousel();

  // Testimonials
  // RTL toggle button
  const directionRtl = document.querySelector("#direction-rtl");

  // Function to initialize the testimonials carousel
  function initTestimonialsCarousel() {
    const isRTL = $("html").attr("dir") === "rtl"; // check current page direction
    $(".testimonials-slider .owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      items: 1,
      nav: true,
      rtl: isRTL,
      dots: false,
      navText: [
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 12H4m0 0l6-6m-6 6l6 6"/></svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>`,
      ],
    });
  }

  // Initialize on page load
  initTestimonialsCarousel();

  // Aos
  AOS.init({
    once: true,
  });

  // Read More
  const toggleBtn = document.getElementById("toggle-btn");
  const shortText = document.getElementById("short-text");
  const fullText = document.getElementById("full-text");

  toggleBtn?.addEventListener("click", function () {
    const isHidden = fullText.style.display === "none";

    fullText.style.display = isHidden ? "inline" : "none";
    shortText.style.display = isHidden ? "inline" : "inline";
    toggleBtn.textContent = isHidden ? "Read Less" : "Read More";
  });

  // dropdown close
  const dropdownContent = document.getElementById("dropdown-content");
  const closeBtn = document.getElementById("dropdown-inner-close");
  const outerBtn = document.getElementById("dropdown-outer-close");

  closeBtn.addEventListener("click", () => {
    dropdownContent.classList.remove("show");
    outerBtn.classList.remove("show");
  });

  // RTL
  directionRtl.addEventListener("click", () => {
    const currentDir = document.documentElement.getAttribute("dir");
    const newDir = currentDir === "ltr" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", newDir);

    // Destroy and reinitialize the carousel
    const $carousel = $(".testimonials-slider .owl-carousel");
    $carousel.trigger('destroy.owl.carousel'); // destroy current instance
    $carousel.find('.owl-stage-outer').children().unwrap(); // remove extra DOM wrappers
    initTestimonialsCarousel(); // reinitialize

    // Destroy and reinitialize partners/sponsors carousel
    const $partners = $(".partners-sponsors-slider .owl-carousel");
    $partners.trigger('destroy.owl.carousel').find('.owl-stage-outer').children().unwrap();
    initPartnersCarousel();

    // Destroy and reinitialize our-blog-slider carousel
    const $Blog = $(".our-blog-slider .owl-carousel");
    $Blog.trigger('destroy.owl.carousel').find('.owl-stage-outer').children().unwrap();
    initBlogCarousel();

    // Destroy and reinitialize banner carousel
    owl.trigger('destroy.owl.carousel').find('.owl-stage-outer').children().unwrap();
    initBannerCarousel();

    // Reset custom dots to first slide
    syncCustomDots({ item: { index: 0, count: 3 }, relatedTarget: { _clones: [] } });

  });

});