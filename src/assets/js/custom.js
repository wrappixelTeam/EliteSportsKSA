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

  const owl = $(".banner-slider .owl-carousel");
  $(".banner-slider .owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    margin: 0,
    dots: false,
    nav: false,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    onChanged: syncCustomDots,
  });

  $("#customDots .custom-dot").click(function () {
    const index = $(this).data("slide");
    owl.trigger("to.owl.carousel", [index, 300]);
  });
  function syncCustomDots(event) {
    const currentIndex =
      event.item.index - event.relatedTarget._clones.length / 2;
    const count = event.item.count;

    // Normalize index for looped carousel
    const realIndex = (currentIndex + count) % count;

    $("#customDots .custom-dot").removeClass("active");
    $(`#customDots .custom-dot[data-slide="${realIndex}"]`).addClass("active");
  }

  // Trigger initial sync
  syncCustomDots({
    item: { index: 0, count: 3 },
    relatedTarget: { _clones: [] },
  });


  // Our Blog
  $(".our-blog-slider .owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    navText: [
      `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 12H4m0 0l6-6m-6 6l6 6"/></svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>`,
    ],
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  // Partners & Sponsors
  $(".partners-sponsors-slider .owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    navText: [
      `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 12H4m0 0l6-6m-6 6l6 6"/></svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>`,
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1024: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });

  // Testimonials
  $(".testimonials-slider .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    nav: true,
    dots: false,
    navText: [
      `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 12H4m0 0l6-6m-6 6l6 6"/></svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>`,
    ],
  });

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
  })

});
