const Header = () => {
  return (
    <header className="app-header">
      <div className="main-header-container container-fluid">
        <div className="header-content-left">
          <div className="header-element">
            <div className="horizontal-logo">
              <a href="index.html" className="header-logo">
                <img
                  src="/images/brand-logos/desktop-logo.png"
                  alt="logos"
                  className="desktop-logo"
                />
                <img
                  src="/images/brand-logos/toggle-logo.png"
                  alt="logo"
                  className="toggle-logo"
                />
                <img
                  src="/images/brand-logos/desktop-dark.png"
                  alt="logo"
                  className="desktop-dark"
                />
                <img
                  src="/images/brand-logos/toggle-dark.png"
                  alt="logo"
                  className="toggle-dark"
                />
              </a>
            </div>
          </div>
          <div className="header-element mx-lg-0 mx-2">
            <a
              aria-label="Hide Sidebar"
              className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
              data-bs-toggle="sidebar"
              href="#"
            >
              <span></span>
            </a>
          </div>
        </div>
        <ul className="header-content-right">
          <li className="header-element d-md-none d-block">
            <a
              aria-label="anchor"
              href="#"
              className="header-link"
              data-bs-toggle="modal"
              data-bs-target="#header-responsive-search"
            >
              <i className="bi bi-search header-link-icon"></i>
            </a>
          </li>
          <li className="header-element header-theme-mode">
            <a
              aria-label="anchor"
              href="#"
              className="header-link layout-setting"
            >
              <span className="light-layout">
                <i className="bi bi-moon header-link-icon"></i>
              </span>
              <span className="dark-layout">
                <i className="bi bi-brightness-high header-link-icon"></i>
              </span>
            </a>
          </li>
          <li className="header-element notifications-dropdown d-xl-block d-none">
            <a
              href="#"
              className="header-link dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              id="messageDropdown"
              aria-expanded="false"
            >
              <i className="bi bi-bell header-link-icon"></i>
              <span className="header-icon-pulse bg-secondary rounded pulse pulse-secondary"></span>
            </a>
            <div
              className="main-header-dropdown dropdown-menu dropdown-menu-end"
              data-popper-placement="none"
            >
              <div className="p-3">
                <div className="d-flex align-items-center justify-content-between">
                  <p className="mb-0 fs-16">Notifications</p>
                  <span
                    className="badge bg-secondary-transparent"
                    id="notifiation-data"
                  >
                    5 Unread
                  </span>
                </div>
              </div>
              <div className="dropdown-divider"></div>
              <ul
                className="list-unstyled mb-0"
                id="header-notification-scroll"
                data-simplebar="init"
              >
                <div className="simplebar-wrapper" style={{margin: '0px'}}>
                  <div className="simplebar-height-auto-observer-wrapper">
                    <div className="simplebar-height-auto-observer"></div>
                  </div>
                  <div className="simplebar-mask">
                    <div
                      className="simplebar-offset"
                      style={{right: '0px', bottom: '0px'}}
                    >
                      <div
                        className="simplebar-content-wrapper"
                        tabIndex={0}
                        role="region"
                        aria-label="scrollable content"
                        style={{height: 'auto', overflow: 'hidden'}}
                      >
                        <div className="simplebar-content" style={{padding: '0px'}}>
                          <li className="dropdown-item">
                            <div className="d-flex align-items-center">
                              <div className="pe-2 lh-1">
                                <span className="avatar avatar-rounded">
                                  <img
                                    src="/images/faces/11.jpg"
                                    alt=""
                                  />
                                </span>
                              </div>
                              <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                <div>
                                  <p className="mb-0 fw-medium">
                                    <a href="notifications.html">John Doe</a>
                                  </p>
                                  <span className="text-muted fw-normal fs-12 header-notification-text">
                                    Hey there! What's up?
                                  </span>
                                </div>
                                <div>
                                  <a
                                    aria-label="anchor"
                                    href="#"
                                    className="min-w-fit-content text-muted me-1 dropdown-item-close1"
                                  >
                                    <i className="ti ti-x fs-16"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="dropdown-item">
                            <div className="d-flex align-items-center">
                              <div className="pe-2 lh-1">
                                <span className="avatar bg-secondary-transparent avatar-rounded">
                                  <img
                                    src="/images/faces/21.jpg"
                                    alt=""
                                  />
                                </span>
                              </div>
                              <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                <div>
                                  <p className="mb-0 fw-medium">
                                    <a href="notifications.html">
                                      Customer Support
                                    </a>
                                  </p>
                                  <span className="text-muted fw-normal fs-12 header-notification-text">
                                    Great job on resolving the issue! Thank you!
                                  </span>
                                </div>
                                <div>
                                  <a
                                    aria-label="anchor"
                                    href="#"
                                    className="min-w-fit-content text-muted me-1 dropdown-item-close1"
                                  >
                                    <i className="ti ti-x"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="dropdown-item">
                            <div className="d-flex align-items-center">
                              <div className="pe-2 lh-1">
                                <span className="avatar bg-pink-transparent avatar-rounded">
                                  <img
                                    src="/images/faces/20.jpg"
                                    alt=""
                                  />
                                </span>
                              </div>
                              <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                <div>
                                  <p className="mb-0 fw-medium">
                                    <a href="notifications.html">
                                      Digital Marketing Trends
                                    </a>
                                  </p>
                                  <span className="text-muted fw-normal fs-12 header-notification-text">
                                    Next Thursday at 2:30 PM
                                  </span>
                                </div>
                                <div>
                                  <a
                                    aria-label="anchor"
                                    href="#"
                                    className="min-w-fit-content text-muted me-1 dropdown-item-close1"
                                  >
                                    <i className="ti ti-x"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="dropdown-item">
                            <div className="d-flex align-items-center">
                              <div className="pe-2 lh-1">
                                <span className="avatar bg-danger-transparent avatar-rounded">
                                  <i className="ti ti-circle-check fs-18"></i>
                                </span>
                              </div>
                              <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                <div>
                                  <p className="mb-0 fw-medium">
                                    <a href="notifications.html">
                                      Amount: $50.00 paid for the order
                                    </a>
                                  </p>
                                  <span className="text-muted fw-normal fs-12 header-notification-text">
                                    Transaction ID: 123456789
                                  </span>
                                </div>
                                <div>
                                  <a
                                    aria-label="anchor"
                                    href="#"
                                    className="min-w-fit-content text-muted me-1 dropdown-item-close1"
                                  >
                                    <i className="ti ti-x"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="dropdown-item">
                            <div className="d-flex align-items-center">
                              <div className="pe-2 lh-1">
                                <span className="avatar bg-success-transparent avatar-rounded">
                                  <img
                                    src="/images/faces/6.jpg"
                                    alt=""
                                  />
                                </span>
                              </div>
                              <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                <div>
                                  <p className="mb-0 fw-medium">
                                    <a href="notifications.html">Samantha</a>
                                  </p>
                                  <span className="text-muted fw-normal fs-12 header-notification-text">
                                    Would you like to connect?
                                  </span>
                                </div>
                                <div>
                                  <a
                                    aria-label="anchor"
                                    href="#"
                                    className="min-w-fit-content text-muted me-1 dropdown-item-close1"
                                  >
                                    <i className="ti ti-x"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="simplebar-placeholder"
                    style={{ width: "0px", height: "0px" }}
                  ></div>
                </div>
                <div
                  className="simplebar-track simplebar-horizontal"
                  style={{visibility: 'hidden'}}
                >
                  <div
                    className="simplebar-scrollbar"
                    style={{width: '0px', display: 'none'}}
                  ></div>
                </div>
                <div
                  className="simplebar-track simplebar-vertical"
                  style={{visibility: 'hidden'}}
                >
                  <div
                    className="simplebar-scrollbar"
                    style={{height: '0px', display: 'none'}}
                  ></div>
                </div>
              </ul>
              <div className="p-3 empty-header-item1 border-top">
                <div className="text-center">
                  <a
                    href="notifications.html"
                    className="link-primary text-decoration-underline"
                  >
                    View All
                  </a>
                </div>
              </div>
              <div className="p-5 empty-item1 d-none">
                <div className="text-center">
                  <span className="avatar avatar-xl avatar-rounded bg-secondary-transparent">
                    <i className="ri-notification-off-line fs-2"></i>
                  </span>
                  <h6 className="fw-medium mt-3">No New Notifications</h6>
                </div>
              </div>
            </div>
          </li>
          <li className="header-element">
            <a
              href="#"
              className="header-link dropdown-toggle"
              id="mainHeaderProfile"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              <div className="d-flex align-items-center">
                <div className="me-sm-2 me-0">
                  <img
                    src="/images/brand-logos/LOGO-INNOVA.png"
                    alt="img"
                    className="avatar avatar-sm avatar-rounded"
                  />
                </div>
                <div className="d-xl-block d-none lh-1">
                  <span className="fw-medium lh-1">InnovaSfera</span>
                </div>
              </div>
            </a>
            <ul
              className="main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end"
              aria-labelledby="mainHeaderProfile"
            >
              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="profile.html"
                >
                  <i className="bi bi-person fs-18 me-2 op-7"></i>Profile
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="mail.html"
                >
                  <i className="bi bi-envelope fs-16 me-2 op-7"></i>Inbox
                  <span className="ms-auto badge bg-light border text-default">
                    19
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="to-do-list.html"
                >
                  <i className="bi bi-check-square fs-16 me-2 op-7"></i>Task
                  Manager
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="mail-settings.html"
                >
                  <i className="bi bi-gear fs-16 me-2 op-7"></i>Settings
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="chat.html"
                >
                  <i className="bi bi-headset fs-18 me-2 op-7"></i>Support
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="sign-in-cover.html"
                >
                  <i className="bi bi-box-arrow-right fs-18 me-2 op-7"></i>Log
                  Out
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
