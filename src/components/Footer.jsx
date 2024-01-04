export default function Footer() {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="widget">
              <h4 className="text-capitalize mb-1">Company</h4>
              <h5 className="text-capitalize mb-1 text-color">XYZ</h5>

              <ul className="list-unstyled footer-menu lh-35">
                <li>
                  <a href="#">Email: abcdefght</a>
                </li>
                <li>
                  <a href="#">Tel: abcdefght</a>
                </li>
                <li>
                  <a href="#">Address: abcdefght</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="widget">
              <h4 className="text-capitalize mb-4">Quick Links</h4>

              <ul className="list-unstyled footer-menu lh-35">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/over-mij">Over Mij</a>
                </li>
                <li>
                  <a href="/dienstverlening">Dienstverlening</a>
                </li>
                <li>
                  <a href="/opdrachten">Opdrachten</a>
                </li>
                <li>
                  <a href="/referenties">Referenties</a>
                </li>
                <li>
                  <a href="/blogs">Blog</a>
                </li>
                <li>
                  <a href="/blogadmin">Blog Login</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mx-auto">
            <div className="widget">
              <h4 className="text-capitalize mb-4">Subscribe Us</h4>
              <p>Subscribe to get latest news article and resources </p>

              <form action="#" className="sub-form">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Subscribe Now ..."
                />
                <a href="#" className="btn btn-main btn-small">
                  subscribe
                </a>
              </form>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="widget">
              <div className="logo mb-4">
                <h3>
                  <img
                    src="https://tmrwstudio.me/atlas/default/wp-content/uploads/sites/2/2023/10/atlas.png"
                    alt=""
                  />
                </h3>
              </div>
              <h6>
                <a href="mailto:support@gmail.com">Support@email.com</a>
              </h6>
              <a href="tel:+23-345-67890">
                <span className="text-color h4">+23-456-6588</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-btm pt-4">
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright">
                Copyright © 2020, Designed &amp; Developed by{" "}
                <a href="#">Themefisher</a>
              </div>
            </div>
            <div className="col-lg-6 text-left text-lg-right">
              <ul className="list-inline footer-socials">
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/login">
                    <i className="ti-linkedin mr-2 "></i>LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
