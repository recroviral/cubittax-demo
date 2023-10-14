(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('fixed-top')) {
      offset += 70
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Header fixed top on scroll
   */
  let selectHeader = select('#header')
  let selectTopbar = select('#topbar')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled')
        }
      } else {
        selectHeader.classList.remove('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled')
        }
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)
  
  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate glightbox 
   */
  const gLightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

class MyNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <ul>
      <li><a class="nav-link scrollto" href="index.html">Home</a></li>
      <li><a class="nav-link scrollto" href="index.html#about">About</a></li>
      <li class="dropdown"><a href="index.html#services"><span>Services</span> <i class="bi bi-chevron-down"></i></a>
        <ul>
          <li><i class="bx"></i><a href="service-personal-tax.html"> Personal Tax </a></li>
          <li><i class="bx"></i><a href="service-corporate-tax.html"> Corporate Tax </a></li>
          <li><i class="bx"></i><a href="service-startup.html"> Incorporation Services </a></li>
          <li><i class="bx"></i><a href="service-accounting-bookkeeping.html"> Accounting and Bookkeeping </a></li>
          <li><i class="bx"></i><a href="service-gst-hst.html"> GST/HST Filing </a></li>
          <li><i class="bx"></i><a href="service-payroll.html"> Payroll Services </a></li>
          <li><i class="bx"></i><a href="personal-tax-form.html" target="_blank"> Download Checklist Form </a></li>
        </ul>
      </li>
      <li><a class="nav-link scrollto" href="professionals.html">Professionals</a></li>
      <li><a class="nav-link scrollto" href="resources1.html">Resources</a></li>
      <li><a class="nav-link scrollto" href="index.html#contact">Contact</a></li>
    </ul>
    `
  }
}

customElements.define('my-navbar', MyNavbar)

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">

            <div class="col-lg-3 col-md-6 footer-links">
              <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i class="bx bx-chevron-right"></i> <a href="index">Home</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="index.html#about">About us</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="index.html#services">Services</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="professionals.html">Professionals</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="resources1.html">Resources</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="index.html#contact">Contact Us</a></li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                <a href="https://www.google.com/maps?q=1580+Sandhurst+Cir,+Toronto,+ON+M1V+2L3,+Canada" target="_blank" style="color: white;">1580 Sandhurst Cir <br>
                Toronto, ON M1V 2L3<br>
                Canada</a> <br><br>
                <strong>Email:</strong> <a href="mailto:info@cubittax.com" style="color: white;">info@cubittax.com</a><br>
              </p>
            </div>

            <div class="col-lg-3 col-md-6 footer-info">
              <h3>About CubitTax</h3>
              <p>CubitTax is your trusted partner in financial success. We specialize in providing expert solutions in areas such as Management Advisory, Taxation, Accounting, and more.</p>
              <div class="social-links mt-3">
              <div>
                <h3>Follow Us</h3>
                </div>
                <a href="https://www.facebook.com/profile.php?id=61551560356682" class="facebook" target="_blank"><i class="bx bxl-facebook"></i></a>
                <a href="https://www.instagram.com/cubittax" class="instagram" target="_blank"><i class="bx bxl-instagram"></i></a>
                <a href="https://www.linkedin.com/in/cubit-tax" class="linkedin" target="_blank"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="copyright">
          &copy; Copyright 2023 <strong><span>CubitTax</span></strong>. All Rights Reserved
        </div>
      </div>
    </footer>
    `
  }
}

customElements.define('my-footer', MyFooter)