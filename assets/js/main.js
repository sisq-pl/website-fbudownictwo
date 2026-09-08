(function () {
  "use strict";

  // Sticky header background on scroll
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 12) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Mobile menu toggle
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".mobile-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Lightbox gallery
  var lightbox = document.getElementById("lightbox");
  var triggers = Array.prototype.slice.call(document.querySelectorAll("[data-lightbox-trigger]"));
  if (lightbox && triggers.length) {
    var lightboxImage = lightbox.querySelector(".lightbox-image");
    var lightboxCaption = lightbox.querySelector(".lightbox-caption");
    var lastFocused = null;
    var currentIndex = 0;

    var showSlide = function (index) {
      currentIndex = (index + triggers.length) % triggers.length;
      var trigger = triggers[currentIndex];
      lightboxImage.src = trigger.getAttribute("data-full");
      lightboxImage.alt = trigger.getAttribute("data-caption") || "";
      lightboxCaption.textContent = trigger.getAttribute("data-caption") || "";
    };

    var openLightbox = function (index) {
      lastFocused = document.activeElement;
      showSlide(index);
      lightbox.hidden = false;
      requestAnimationFrame(function () {
        lightbox.classList.add("is-open");
      });
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      lightbox.querySelector(".lightbox-close").focus();
    };

    var closeLightbox = function () {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      window.setTimeout(function () {
        lightbox.hidden = true;
        lightboxImage.src = "";
      }, 250);
      if (lastFocused) {
        lastFocused.focus();
      }
    };

    triggers.forEach(function (trigger, index) {
      trigger.addEventListener("click", function () {
        openLightbox(index);
      });
    });

    lightbox.querySelector("[data-lightbox-close]").addEventListener("click", closeLightbox);
    lightbox.querySelector("[data-lightbox-prev]").addEventListener("click", function () {
      showSlide(currentIndex - 1);
    });
    lightbox.querySelector("[data-lightbox-next]").addEventListener("click", function () {
      showSlide(currentIndex + 1);
    });

    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (lightbox.hidden) {
        return;
      }
      if (event.key === "Escape") {
        closeLightbox();
      } else if (event.key === "ArrowLeft") {
        showSlide(currentIndex - 1);
      } else if (event.key === "ArrowRight") {
        showSlide(currentIndex + 1);
      }
    });
  }

  // Scroll-reveal animations
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
