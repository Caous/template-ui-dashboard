const Footer = () => {
 return (
    <footer className="footer mt-auto py-3 bg-white text-center">
      <div className="container">
        <span className="text-muted">
          Copyright © <span id="year">{new Date().getFullYear()}</span>
          &nbsp;-  by &nbsp;
          <a href="https://innovasfera.com.br/" target="_blank" rel="noreferrer">
            <span className="fw-medium text-primary text-decoration-underline">InnovaSpefera</span>
          </a>
          &nbsp; All rights reserved
        </span>
      </div>
    </footer>
 )
}

export default Footer;