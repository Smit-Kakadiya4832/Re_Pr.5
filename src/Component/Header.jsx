
const Header = () => {
    return(
        <>
        <div className="topbar">
          <div className="container">
            <address className="topbar-item">
              <div className="icon">
                <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
              </div>
        
              <span className="span">
                Restaurant St, Delicious City, London 9578, UK
              </span>
            </address>
        
            <div className="separator"></div>
        
            <div className="topbar-item item-2">
              <div className="icon">
                <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
              </div>
        
              <span className="span">Daily : 8.00 am to 10.00 pm</span>
            </div>
        
            <a href="tel:+11234567890" className="topbar-item link">
              <div className="icon">
                <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
              </div>
        
              <span className="span">+1 123 456 7890</span>
            </a>
        
            <div className="separator"></div>
        
            <a href="mailto:booking@restaurant.com" className="topbar-item link">
              <div className="icon">
                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
              </div>
        
              <span className="span">booking@restaurant.com</span>
            </a>
        
          </div>
        </div>
        
        <header className="header" data-header>
          <div className="container">
        
            <a href="#" Name="logo">
              <img src="./assets/images/logo.svg" width="160" height="50" alt="Grilli - Home" />
            </a>
        
            <nav className="navbar" data-navbar>
        
              <button className="close-btn" aria-label="close menu" data-nav-toggler>
                <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
              </button>
        
              <a href="#" className="logo">
                <img src="../assets/images/logo.svg" width="160" height="50" alt="Grilli - Home" />
              </a>
        
              <ul className="navbar-list">
        
                <li className="navbar-item">
                  <a href="#home" className="navbar-link hover-underline active">
                    <div className="separator"></div>
        
                    <span className="span">Home</span>
                  </a>
                </li>
        
                <li className="navbar-item">
                  <a href="#menu" className="navbar-link hover-underline">
                    <div className="separator"></div>
        
                    <span className="span">Menus</span>
                  </a>
                </li>
        
                <li className="navbar-item">
                  <a href="#about" className="navbar-link hover-underline">
                    <div className="separator"></div>
        
                    <span className="span">About Us</span>
                  </a>
                </li>
        
                <li className="navbar-item">
                  <a href="#" className="navbar-link hover-underline">
                    <div className="separator"></div>
        
                    <span className="span">Our Chefs</span>
                  </a>
                </li>
        
                <li className="navbar-item">
                  <a href="#" className="navbar-link hover-underline">
                    <div className="separator"></div>
        
                    <span className="span">Contact</span>
                  </a>
                </li>
        
              </ul>
        
              <div className="text-center">
                <p className="headline-1 navbar-title">Visit Us</p>
        
                <address className="body-4">
                  Restaurant St, Delicious City, <br/>
                  London 9578, UK
                </address>
        
                <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>
        
                <a href="mailto:booking@grilli.com" className="body-4 sidebar-link">booking@grilli.com</a>
        
                <div className="separator"></div>
        
                <p className="contact-label">Booking Request</p>
        
                <a href="tel:+88123123456" className="body-1 contact-number hover-underline">
                  +88-123-123456
                </a>
              </div>
        
            </nav>
        
            <a href="#" className="btn btn-secondary">
              <span className="text text-1">Find A Table</span>
        
              <span className="text text-2" aria-hidden="true">Find A Table</span>
            </a>
        
            <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
            </button>
        
            <div className="overlay" data-nav-toggler data-overlay></div>
        
          </div>
        </header>
        </>
    )
}

export default Header;