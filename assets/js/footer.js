class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">

            <div class="col-lg-3 col-md-6 footer-links">
              <a href="home" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i class="bx bx-chevron-right"></i> <a href="home">Home</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="home#about">About us</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="home#services">Services</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="professionals">Professionals</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="resources1.html">Resources</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="home#contact">Contact Us</a></li>
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
                <a href="https://www.linkedin.com/in/cubittax" class="linkedin" target="_blank"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="copyright">
          &copy; Copyright 2023. All Rights Reserved by <strong><span>CubitTax</span></strong>
        </div>
      </div>
    </footer>
    `
  }
}

customElements.define('my-footer', MyFooter)