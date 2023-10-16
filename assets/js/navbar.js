class MyNavbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <ul>
        <li><a class="nav-link scrollto" href="home">Home</a></li>
        <li><a class="nav-link scrollto" href="home#about">About</a></li>
        <li class="dropdown"><a href="home#services"><span>Services</span> <i class="bi bi-chevron-down"></i></a>
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
        <li><a class="nav-link scrollto" href="professionals">Professionals</a></li>
        <li><a class="nav-link scrollto" href="resources1.html">Resources</a></li>
        <li><a class="nav-link scrollto" href="home#contact">Contact</a></li>
      </ul>
      `
    }
  }
  
  customElements.define('my-navbar', MyNavbar)