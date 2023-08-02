import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoginModal from "../modal/LoginModal";
import Link from "next/link";
import axios from "axios";

function Header() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [navActive, setNavActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [item, setItem] = useState('');
  const router = useRouter();
  const { logout } = router.query;


  useEffect(() => {
    if (logout !== undefined) {
      setItem('')
		  }else{
        setItem(localStorage.getItem('auth_token'))
      }
  }, [logout])

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setModalIsOpen(false);
    });
  }, [router.events]);
  function handleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  const _toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  const _toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dashboard = () => {
    window.location.href = "http://localhost:3001/";
  };

  // const logout = () => {
  //   axios.post(`/api/logout`).then(res => {
  //     if(res.data.status === 200){
  //       localStorage.removeItem('auth_token');
  //       localStorage.removeItem('user');
  //       window.location.href = '/';
  //     }
  //   });
  // }


  return (
    <>
      <nav className="navigation">
        <div className="container"></div>
        {/* ================menu nav============= */}
        <div className={`${sticky ? "is-sticky" : ""} menu-nav `}>
          <LoginModal handleModal={handleModal} modalIsOpen={modalIsOpen} />
          <div className="container">
            <div className="menu-nav-inner">
              <div className="menu-nav-inner-left">
                <div className="logo">
                  <Link href={"/"}>
                    <a>
                      <img src="/assets/logo.svg" alt="logo" />
                    </a>
                  </Link>
                </div>
              </div>
              <div
                className={`${
                  sidebarActive ? "active" : ""
                } menu-nav-inner-right`}
              >
                <div className="menu-nav-inner-right-inner">
                  <div className="close-nav" onClick={_toggleSidebar}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 2.01429L17.9857 0L10 7.98571L2.01429 0L0 2.01429L7.98571 10L0 17.9857L2.01429 20L10 12.0143L17.9857 20L20 17.9857L12.0143 10L20 2.01429Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <ul className="nav-menu">
                    <li className="nav-list" onClick={_toggleSidebar}>
                      <Link href={"/"}>
                        <a className="nav-link">Home</a>
                      </Link>
                    </li>
                    <li className="nav-list" onClick={_toggleDropdown}>
                      <a href="#" className="nav-link nav-link-service">
                        Services
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.00002 10.667C7.84425 10.6673 7.6933 10.6131 7.57335 10.5137L3.57335 7.18035C3.43721 7.06719 3.35159 6.90458 3.33534 6.7283C3.31909 6.55201 3.37353 6.37649 3.48669 6.24035C3.59985 6.1042 3.76245 6.01859 3.93874 6.00233C4.11502 5.98608 4.29054 6.04052 4.42669 6.15368L8.00002 9.14035L11.5734 6.26035C11.6415 6.20497 11.72 6.16361 11.8042 6.13866C11.8885 6.11371 11.9768 6.10564 12.0641 6.11494C12.1515 6.12423 12.2362 6.15069 12.3132 6.19281C12.3903 6.23493 12.4583 6.29186 12.5134 6.36035C12.5744 6.42889 12.6206 6.50931 12.6492 6.59656C12.6777 6.68381 12.6879 6.77601 12.6791 6.86739C12.6704 6.95876 12.6428 7.04734 12.5983 7.12758C12.5537 7.20782 12.493 7.27798 12.42 7.33368L8.42002 10.5537C8.29663 10.6374 8.14876 10.6773 8.00002 10.667Z"
                            fill="black"
                          />
                        </svg>
                      </a>
                      <div
                        className={
                          dropdownActive ? "dp-menu active" : "dp-menu"
                        }
                      >
                        <div className="container">
                          <ul className="dp-menu-ul">
                            <li onClick={_toggleSidebar}>
                              <Link href={"/spotify-promotion"}>
                                <a className="dp-link">
                                  <div className="icon-add">
                                    <svg
                                      width="30"
                                      height="30"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6.99708 0C3.13892 0 0 3.1395 0 6.99767C0 10.8593 3.13892 14 6.99708 14C10.8587 14 14 10.8587 14 6.99767C14 3.1395 10.8587 0 6.99708 0ZM3.44633 9.569C4.2475 9.32358 5.08059 9.19816 5.9185 9.19683C7.32667 9.19683 8.71675 9.55383 9.93883 10.2293C10.0117 10.269 10.0777 10.3997 10.108 10.563C10.1372 10.7263 10.1255 10.8937 10.0777 10.9807C10.0551 11.022 10.0246 11.0585 9.98787 11.0879C9.95113 11.1174 9.90891 11.1393 9.86366 11.1523C9.81841 11.1653 9.77102 11.1692 9.72424 11.1638C9.67747 11.1584 9.63223 11.1437 9.59117 11.1207C8.69353 10.6282 7.70614 10.3211 6.68757 10.2175C5.66899 10.1139 4.63999 10.2159 3.66158 10.5175C3.61667 10.532 3.56931 10.5375 3.52227 10.5335C3.47523 10.5295 3.42945 10.5163 3.38759 10.4944C3.34574 10.4726 3.30864 10.4427 3.27847 10.4064C3.24829 10.3701 3.22564 10.3281 3.21183 10.283C3.14942 10.0788 3.27833 9.62383 3.44633 9.569ZM3.14125 6.99067C4.04632 6.74478 4.98004 6.62022 5.91792 6.62025C7.60608 6.62025 9.282 7.02858 10.7654 7.80208C10.8698 7.85458 10.9462 7.94442 10.9812 8.05408C10.9989 8.10946 11.0054 8.16783 11.0002 8.22573C10.995 8.28364 10.9782 8.33992 10.9509 8.39125C10.8185 8.65025 10.6633 8.82467 10.5659 8.82467C10.4948 8.82435 10.4249 8.80716 10.3617 8.7745C8.99045 8.05857 7.46543 7.68737 5.9185 7.693C5.05804 7.69127 4.20132 7.80607 3.37167 8.03425C3.31632 8.04938 3.25853 8.05346 3.20161 8.04626C3.14469 8.03905 3.08974 8.02071 3.03991 7.99227C2.99007 7.96384 2.94633 7.92586 2.91117 7.88052C2.87601 7.83517 2.85013 7.78335 2.835 7.728C2.76967 7.48183 2.91958 7.05133 3.14125 6.99067ZM3.0625 5.30717C2.99684 5.32402 2.9285 5.3277 2.86141 5.31799C2.79432 5.30829 2.72982 5.2854 2.67163 5.25063C2.61343 5.21587 2.5627 5.16993 2.52236 5.11545C2.48202 5.06098 2.45287 4.99905 2.43658 4.93325C2.36483 4.64275 2.54625 4.30558 2.80992 4.23908C3.82696 3.98858 4.87048 3.86147 5.91792 3.8605C7.93042 3.8605 9.85892 4.31317 11.6486 5.20625C11.7715 5.26739 11.8652 5.37486 11.909 5.50503C11.9527 5.6352 11.943 5.77741 11.8819 5.90042C11.7985 6.06842 11.6177 6.24925 11.4182 6.24925C11.3399 6.24896 11.2627 6.23164 11.1918 6.1985C9.55534 5.37754 7.74878 4.95272 5.91792 4.95833C4.96417 4.95833 4.00342 5.07558 3.0625 5.30717Z"
                                        fill="#343434"
                                      />
                                    </svg>
                                  </div>
                                  <div className="multi-text">
                                    <p className="nav-title">
                                      Spotify Promotion
                                    </p>
                                    <p>Learn More </p>
                                  </div>
                                </a>
                              </Link>
                            </li>
                            <li onClick={_toggleSidebar}>
                              <Link href={"/soundcloud-promotion"}>
                                <a className="dp-link">
                                  <div className="icon-add">
                                    <svg
                                      width="30"
                                      height="25"
                                      viewBox="0 0 18 10"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M15.1875 10H9V0.850694C9.64453 0.283565 10.3945 0 11.25 0C12.1875 0 12.9844 0.324074 13.6406 0.972222C14.2969 1.62037 14.625 2.40741 14.625 3.33333C14.625 3.76157 14.543 4.17245 14.3789 4.56597C14.6719 4.48495 14.9414 4.44444 15.1875 4.44444C15.9609 4.44444 16.623 4.71644 17.1738 5.26042C17.7246 5.8044 18 6.45833 18 7.22222C18 7.98611 17.7246 8.64005 17.1738 9.18403C16.623 9.72801 15.9609 10 15.1875 10ZM7.875 10H6.75V2.29167C7.16016 2.37269 7.53516 2.54051 7.875 2.79514V10ZM4.5 2.79514C4.82812 2.54051 5.20312 2.37269 5.625 2.29167V10H4.5V2.79514ZM2.25 9.94792V4.49653C2.4375 4.46181 2.625 4.44444 2.8125 4.44444C2.98828 4.44444 3.17578 4.46759 3.375 4.51389V10H2.8125C2.625 10 2.4375 9.98264 2.25 9.94792ZM1.125 5.01736V9.42708C0.773438 9.17245 0.498047 8.85127 0.298828 8.46354C0.0996094 8.07581 0 7.66204 0 7.22222C0 6.78241 0.0996094 6.36863 0.298828 5.9809C0.498047 5.59317 0.773438 5.27199 1.125 5.01736Z"
                                        fill="#343434"
                                      />
                                    </svg>
                                  </div>
                                  <div className="multi-text">
                                    <p className="nav-title">
                                      Soundcloud Promotion
                                    </p>
                                    <p>Learn More </p>
                                  </div>
                                </a>
                              </Link>
                            </li>
                            <li onClick={_toggleSidebar}>
                              <Link href={"/instagram-promotion"}>
                                <a className="dp-link">
                                  <div className="icon-add">
                                    <svg
                                      width="30"
                                      height="30"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6.99812 4.66567C5.71277 4.66567 4.66383 5.71463 4.66383 7C4.66383 8.28537 5.71277 9.33433 6.99812 9.33433C8.28346 9.33433 9.3324 8.28537 9.3324 7C9.3324 5.71463 8.28346 4.66567 6.99812 4.66567ZM13.9992 7C13.9992 6.03335 14.008 5.07545 13.9537 4.11055C13.8994 2.98979 13.6437 1.99512 12.8242 1.17556C12.0029 0.35426 11.01 0.100338 9.88927 0.0460516C8.92263 -0.00823506 7.96475 0.000520879 6.99987 0.000520879C6.03323 0.000520879 5.07536 -0.00823506 4.11047 0.0460516C2.98973 0.100338 1.99508 0.356011 1.17554 1.17556C0.354253 1.99687 0.100336 2.98979 0.0460508 4.11055C-0.00823491 5.0772 0.00052087 6.0351 0.00052087 7C0.00052087 7.9649 -0.00823491 8.92455 0.0460508 9.88945C0.100336 11.0102 0.356004 12.0049 1.17554 12.8244C1.99683 13.6457 2.98973 13.8997 4.11047 13.9539C5.07711 14.0082 6.03499 13.9995 6.99987 13.9995C7.9665 13.9995 8.92438 14.0082 9.88927 13.9539C11.01 13.8997 12.0047 13.644 12.8242 12.8244C13.6455 12.0031 13.8994 11.0102 13.9537 9.88945C14.0097 8.92455 13.9992 7.96665 13.9992 7ZM6.99812 10.5917C5.01056 10.5917 3.40651 8.98759 3.40651 7C3.40651 5.01241 5.01056 3.40832 6.99812 3.40832C8.98567 3.40832 10.5897 5.01241 10.5897 7C10.5897 8.98759 8.98567 10.5917 6.99812 10.5917ZM10.7368 4.10004C10.2728 4.10004 9.89802 3.72529 9.89802 3.26122C9.89802 2.79716 10.2728 2.42241 10.7368 2.42241C11.2009 2.42241 11.5756 2.79716 11.5756 3.26122C11.5758 3.37142 11.5542 3.48056 11.5121 3.58239C11.47 3.68422 11.4082 3.77675 11.3303 3.85467C11.2523 3.93258 11.1598 3.99437 11.058 4.03647C10.9562 4.07858 10.847 4.10018 10.7368 4.10004Z"
                                        fill="#343434"
                                      />
                                    </svg>
                                  </div>
                                  <div className="multi-text">
                                    <p className="nav-title">
                                      Instagram Promotion
                                    </p>
                                    <p>Learn More </p>
                                  </div>
                                </a>
                              </Link>
                            </li>
                            <li onClick={_toggleSidebar}>
                              <Link href={"/youtube-promotion"}>
                                <a className="dp-link">
                                  <div className="icon-add">
                                    <svg
                                      width="30"
                                      height="25"
                                      viewBox="0 0 18 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M17.6131 1.89101C17.5114 1.52796 17.3131 1.19927 17.0395 0.939887C16.7581 0.672527 16.4132 0.481278 16.0374 0.384192C14.631 0.0134793 8.99613 0.0134794 8.99613 0.0134794C6.64703 -0.0132474 4.29851 0.104304 1.96382 0.365469C1.58801 0.469728 1.24379 0.66525 0.961772 0.934644C0.684673 1.20126 0.483964 1.53003 0.379116 1.89026C0.127251 3.2471 0.00487753 4.6248 0.0136458 6.0048C0.00465884 7.38355 0.126732 8.7608 0.379116 10.1193C0.481717 10.4781 0.681678 10.8053 0.959525 11.0697C1.23737 11.3341 1.58337 11.525 1.96382 11.6262C3.389 11.9961 8.99613 11.9961 8.99613 11.9961C11.3482 12.0229 13.6997 11.9053 16.0374 11.6441C16.4132 11.547 16.7581 11.3558 17.0395 11.0884C17.3166 10.8241 17.5135 10.4953 17.6124 10.1373C17.8708 8.78099 17.9965 7.40271 17.9876 6.02202C18.007 4.63548 17.8815 3.25071 17.6131 1.89026V1.89101ZM7.20472 8.56908V3.44126L11.8929 6.00555L7.20472 8.56908Z"
                                        fill="#343434"
                                      />
                                    </svg>
                                  </div>
                                  <div className="multi-text">
                                    <p className="nav-title">
                                      Youtube Promotion
                                    </p>
                                    <p>Learn More </p>
                                  </div>
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="nav-list" onClick={_toggleSidebar}>
                      <Link href={"/about-us"}>
                        <a className="nav-link">About Us</a>
                      </Link>
                    </li>

                    <li className="nav-list" onClick={_toggleSidebar}>
                      <Link href={"/blog"}>
                        <a className="nav-link">Blog</a>
                      </Link>
                    </li>

                    <li className="nav-list" onClick={_toggleSidebar}>
                      <Link href={"/contact"}>
                        <a className="nav-link">Contact</a>
                      </Link>
                    </li>
                    {item ? 
                    <ul className="nav-menu">
                      <li className="nav-list" onClick={dashboard}>
                          <a href="#" className="nav-link">Dashboard</a>
                      </li> 
                      {/* <li className="nav-list" onClick={logout}>
                          <a href="#" className="nav-link">Logout</a>
                      </li>  */}
                    </ul>
                    : 
                    <li className="nav-list" onClick={_toggleSidebar}>
                      <Link href={"/login"}>
                        <a href="#" className="nav-link">Login</a>
                      </Link>
                    </li>
                    }
                    {/* ========= sign up btn =============== */}
                    {/* <Link href={"/login"}>
                      <button href={"/login"} className="profile-btn">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 22H4V20C4 18.6739 4.52678 17.4021 5.46447 16.4645C6.40215 15.5268 7.67392 15 9 15H15C16.3261 15 17.5979 15.5268 18.5355 16.4645C19.4732 17.4021 20 18.6739 20 20V22ZM12 13C11.2121 13 10.4319 12.8448 9.7039 12.5433C8.97595 12.2417 8.31451 11.7998 7.75736 11.2426C7.20021 10.6855 6.75825 10.0241 6.45672 9.2961C6.15519 8.56815 6 7.78793 6 7C6 6.21207 6.15519 5.43185 6.45672 4.7039C6.75825 3.97595 7.20021 3.31451 7.75736 2.75736C8.31451 2.20021 8.97595 1.75825 9.7039 1.45672C10.4319 1.15519 11.2121 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7C18 8.5913 17.3679 10.1174 16.2426 11.2426C15.1174 12.3679 13.5913 13 12 13Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </Link> */}
                  </ul>
                </div>
              </div>

              <div className="open-mobile-menu" onClick={_toggleSidebar}>
                <svg
                  width="25"
                  height="20"
                  viewBox="0 0 25 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 20H25V16.6667H0V20ZM0 11.6667H25V8.33333H0V11.6667ZM0 0V3.33333H25V0H0Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* ================menu nav end============= */}
      </nav>
    </>
  );
}
export default Header;
