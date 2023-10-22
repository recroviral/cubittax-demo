class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer id="footer" aria-label="Website Footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
    
            <div class="col-lg-3 col-md-6 footer-links">
              <a href="home" class="logo" aria-label="Go to Home"><img src="assets/img/logo.webp" alt="" class="img-fluid"></a>
            </div>
    
            <div class="col-lg-3 col-md-6 footer-links">
              <h4 aria-label="Useful Links">Useful Links</h4>
              <ul>
                <li><i class="bx bx-chevron-right"></i> <a href="home" aria-label="Go to Home">Home</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="home#about" aria-label="Learn About Us">About us</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="home#services" aria-label="Explore Practice Areas">Practice Areas</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="professionals" aria-label="Meet Our Professionals">Professionals</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="resources1.html" aria-label="Explore Resources">Resources</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="home#contact" aria-label="Contact Us">Contact Us</a></li>
              </ul>
            </div>
    
            <div class="col-lg-3 col-md-6 footer-contact">
              <h4 aria-label="Contact Us">Contact Us</h4>
              <p>
                <a href="https://www.google.com/maps?q=1580+Sandhurst+Cir,+Toronto,+ON+M1V+2L3,+Canada" target="_blank" style="color: white;" aria-label="Visit Our Location">
                  1580 Sandhurst Cir <br>
                  Toronto, ON M1V 2L3<br>
                  Canada
                </a> <br><br>
                <strong>Email:</strong> <a href="mailto:info@cubittax.com" style="color: white;" aria-label="Send an Email">info@cubittax.com</a><br>
              </p>
            </div>
    
            <div class="col-lg-3 col-md-6 footer-info">
              <h3 aria-label="About CubitTax">About CubitTax</h3>
              <p aria-label="Learn About Our Services">CubitTax is your trusted partner in financial success. We specialize in providing expert solutions in areas such as Management Advisory, Taxation, Accounting, and more.</p>
              <div class="social-links mt-3">
                <h3 aria-label="Follow Us">Follow Us</h3>
                <a href="https://www.facebook.com/profile.php?id=61551560356682" class="facebook" target="_blank" aria-label="Visit Our Facebook Page"><i class="bx bxl-facebook"></i></a>
                <a href="https://www.instagram.com/cubittax" class="instagram" target="_blank" aria-label="Visit Our Instagram Profile"><i class="bx bxl-instagram"></i></a>
                <a href="https://www.linkedin.com/in/cubittax" class="linkedin" target="_blank" aria-label="Connect on LinkedIn"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="copyright" aria-label="Copyright Notice">
          &copy; Copyright 2023. All Rights Reserved by <strong><span>CubitTax</span></strong>
        </div>
      </div>
    </footer>  
    `
  }
}

customElements.define('my-footer', MyFooter)