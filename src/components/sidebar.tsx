const Sidebar = () => {
  return (
    <aside className="app-sidebar sticky" id="sidebar">
      <div className="main-sidebar-header">
        <a href="index.html" className="header-logo">
          <img
            src="/images/brand-logos/LOGO-2000X2000_preto_aparado.png"
            alt="logos"
            className="desktop-logo"
          />
          <img
            src="/images/brand-logos/toggle-dark.png"
            alt="logo"
            className="toggle-dark"
          />
          <img
            src="/images/brand-logos/LOGO-1920X1080 (1).png"
            alt="logo"
            className="desktop-dark"
          />
          <img
            src="/images/brand-logos/toggle-logo.png"
            alt="logo"
            className="toggle-logo"
          />
        </a>
      </div>
      <div
        className="main-sidebar simplebar-scrollable-y"
        id="sidebar-scroll"
        data-simplebar="init"
      >
        <div className="simplebar-wrapper" style={{ margin: "-8px 0px -80px" }}>
          <div className="simplebar-height-auto-observer-wrapper">
            <div className="simplebar-height-auto-observer"></div>
          </div>
          <div className="simplebar-mask">
            <div
              className="simplebar-offset"
              style={{ right: "0px; bottom: 0px" }}
            >
              <div
                className="simplebar-content-wrapper"
                tabIndex={0}
                role="region"
                aria-label="scrollable content"
                style={{ height: "100%", overflow: "hidden scroll" }}
              >
                <div
                  className="simplebar-content"
                  style={{ padding: "8px 0px 80px" }}
                >
                  <nav className="main-menu-container nav nav-pills flex-column sub-open open active">
                    <div className="slide-left active d-none" id="slide-left">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#7b8191"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                      </svg>
                    </div>
                    <ul
                      className="main-menu"
                      style={{
                        display: "block",
                        marginLeft: "0px",
                        marginRight: "0px",
                      }}
                    >
                      <li className="slide has-sub active open">
                        <a
                          href="#"
                          className="side-menu__item active"
                        >
                          <i className="bi bi-house side-menu__icon"></i>
                          <span className="side-menu__label">Dashboards</span>
                          <i className="bi bi-chevron-right side-menu__angle"></i>
                        </a>
                        <ul
                          className="slide-menu child1 active"
                          style={{
                            position: "relative",
                            left: "0px",
                            top: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                            display: "block",
                            transform: "translate(12px, 582px)",
                          }}
                          data-popper-placement="bottom"
                        >
                          <li className="slide side-menu__label1">
                            <a href="javascript:void(0)">Dashboards</a>
                          </li>
                          <li className="slide active">
                            <a
                              href="index.html"
                              className="side-menu__item active"
                            >
                              Sales
                            </a>
                          </li>
                          <li className="slide">
                            <a href="index-1.html" className="side-menu__item">
                              Analytics
                            </a>
                          </li>
                          <li className="slide">
                            <a href="index-2.html" className="side-menu__item">
                              Ecommerce
                            </a>
                          </li>
                          <li className="slide">
                            <a href="index-3.html" className="side-menu__item">
                              Crm
                            </a>
                          </li>
                          <li className="slide">
                            <a href="index-4.html" className="side-menu__item">
                              HRM
                            </a>
                          </li>
                          <li className="slide">
                            <a href="index-5.html" className="side-menu__item">
                              NFT
                            </a>
                          </li>
                          <li className="slide">
                            <a href="index-6.html" className="side-menu__item">
                              Crypto
                            </a>
                          </li>
                          <li className="slide">
                            <a href="index-7.html" className="side-menu__item">
                              Jobs
                            </a>
                          </li>
                          <li className="slide">
                            <a href="index-8.html" className="side-menu__item">
                              Projects
                            </a>
                          </li>
                          <li className="slide">
                            <a href="index-9.html" className="side-menu__item">
                              Courses
                            </a>
                          </li>
                          <li className="slide">
                            <a href="index-10.html" className="side-menu__item">
                              Stocks
                            </a>
                          </li>
                          <li className="slide">
                            <a href="index-11.html" className="side-menu__item">
                              Personal
                            </a>
                          </li>
                          <li className="slide">
                            <a href="index-12.html" className="side-menu__item">
                              Customer
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="slide has-sub">
                        <a
                          href="#"
                          className="side-menu__item"
                        >
                          <i className="bi bi-layout-text-window side-menu__icon"></i>
                          <i className="bi bi-table"></i>
                          <span className="side-menu__label">Tables</span>
                          <i className="bi bi-chevron-right side-menu__angle"></i>
                        </a>
                        <ul
                          className="slide-menu child1"
                          style={{
                            position: "relative",
                            left: "0px",
                            top: "0px",
                            margin: "0px",
                            transform: "translate(128px, 1092px)",
                          }}
                          data-popper-placement="top"
                          data-popper-reference-hidden=""
                          data-popper-escaped=""
                        >
                          <li className="slide side-menu__label1">
                            <a href="javascript:void(0)">Tables</a>
                          </li>
                          <li className="slide">
                            <a href="tables.html" className="side-menu__item">
                              Tables
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              href="grid-tables.html"
                              className="side-menu__item"
                            >
                              Grid JS Tables
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              href="data-tables.html"
                              className="side-menu__item"
                            >
                              Data Tables
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="slide has-sub">
                        <a
                          href="#"
                          className="side-menu__item"
                        >
                          <i className="bi bi-geo-alt side-menu__icon"></i>
                          <span className="side-menu__label">Maps</span>
                          <i className="bi bi-chevron-right side-menu__angle"></i>
                        </a>
                        <ul
                          className="slide-menu child1"
                          style={{
                            position: "relative",
                            left: "0px",
                            top: "0px",
                            margin: "0px",
                            transform: "translate(128px, 1240px)",
                          }}
                          data-popper-placement="top"
                          data-popper-reference-hidden=""
                          data-popper-escaped=""
                        >
                          <li className="slide side-menu__label1">
                            <a href="javascript:void(0)">Maps</a>
                          </li>
                          <li className="slide">
                            <a
                              href="google-maps.html"
                              className="side-menu__item"
                            >
                              Google Maps
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              href="leaflet-maps.html"
                              className="side-menu__item"
                            >
                              Leaflet Maps
                            </a>
                          </li>
                          <li className="slide">
                            <a
                              href="vector-maps.html"
                              className="side-menu__item"
                            >
                              Vector Maps
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="slide">
                        <a href="icons.html" className="side-menu__item">
                          <i className="bi bi-shop side-menu__icon"></i>
                          <span className="side-menu__label">Icons</span>
                        </a>
                      </li>
                    </ul>
                    <div className="slide-right d-none" id="slide-right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#7b8191"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                      </svg>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div
            className="simplebar-placeholder"
            style={{
                width: "255px",
                height: "1366px",
            }}
          ></div>
        </div>
        <div
          className="simplebar-track simplebar-horizontal"
          style={{
                visibility: "hidden",
          }}
        >
          <div
            className="simplebar-scrollbar"
            style={{
                width: "0px",
                display: "none",
            }}
          ></div>
        </div>
        <div
          className="simplebar-track simplebar-vertical"
          style={{
                visibility: "visible",
          }}
        >
          <div
            className="simplebar-scrollbar"
            style={{
                height: "619px",
                display: "block",
                transform: 'translate3d(0px, 0px, 0px)'
            }}
          ></div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
