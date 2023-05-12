import { FooterPrivate } from "./Footer.Private";
import { HeaderPrivate } from "./Header.Private";
import { BiLogOut } from "react-icons/bi";

export const SideBarPrivate = ({ children }) => {
  return (
    <>
    <div className="container">
    <div id="wrapper">
        <HeaderPrivate />

        <div className="sidebar" id="sidebar">
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <li className="menu-title">
                  <span>Main Menu</span>
                </li>
                <li className="submenu active">
                  <a href="/">
                    <i className="feather-grid" /> <span> Dashboard</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="index.html" className="active">
                        Admin Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="teacher-dashboard.html">Teacher Dashboard</a>
                    </li>
                    <li>
                      <a href="student-dashboard.html">Student Dashboard</a>
                    </li>
                  </ul>
                </li>



                <li className="submenu">
                  <a href="javascript:void(0);">
                    <BiLogOut/> <span>Logout</span>{" "}
                  </a>
                  <ul>
                    <li className="submenu">
                      <a href="javascript:void(0);">
                        {" "}
                        <span>Level 1</span> <span className="menu-arrow" />
                      </a>
                      <ul>
                        <li>
                          <a href="javascript:void(0);">
                            <span>Level 2</span>
                          </a>
                        </li>
                        <li className="submenu">
                          <a href="javascript:void(0);">
                            {" "}
                            <span> Level 2</span>{" "}
                            <span className="menu-arrow" />
                          </a>
                          <ul>
                            <li>
                              <a href="javascript:void(0);">Level 3</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">Level 3</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            {" "}
                            <span>Level 2</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        {" "}
                        <span>Level 1</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <FooterPrivate />
        </div>

        <main id="main">{children}</main>
      </div>
    </div>
    </>
  );
};
