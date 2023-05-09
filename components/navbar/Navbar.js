import useScrollPosition from "@hook/useScroll";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import { useEffect, useRef, useState } from "react";
import Sidebar from "@components/sidebar/Sidebar";
import LoginModal from "@components/modal/LoginModal";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const dropdownRef = useRef(null);
  // const dropdownRef2 = useRef(null);
  const containerRef = useRef(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [moveX, setMoveX] = useState(0);
  const [moveX2, setMoveX2] = useState(0);
  const [navActive, setNavActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const { scrollPosition } = useScrollPosition();
  const router = useRouter();
  const [service, setService]=useState(false);
  let toggleClass=service?'active':'';

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setModalIsOpen(false);
    });
  }, [router.events]);

  useEffect(() => {
    if (dropdownRef && containerRef) {
      const val1 = dropdownRef.current.getBoundingClientRect().right;
      const val2 = containerRef.current.getBoundingClientRect().right;
      // const val3 = dropdownRef2.current.getBoundingClientRect().right;
      // setMoveX(val2 - val1);
      // setMoveX2(val2 - val3);
    }
  }, []);

  useEffect(() => {
    if (scrollPosition >= 80) {
      setNavActive(true);
    } else {
      setNavActive(false);
    }
  }, [scrollPosition]);

  const handleSidebar = () => setSidebarActive(!sidebarActive);

  function handleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <nav id="navbar" className={`${navActive ? "active" : ""}`}>
      <LoginModal handleModal={handleModal} modalIsOpen={modalIsOpen} />
      <div ref={containerRef} className="container">

          <div className="logo-wrapper">
          <Link href="/">
            <Image src={logo} alt="Music logo" />
            </Link>
          </div>

        <ul className="nav-items">
          <li className="nav-item" >
            <Link href="/">Home</Link>
          </li>
          <li className="nav-item">
          <Link href="/about-us">about us</Link>
          </li>

          <li className="nav-item">
            <div ref={dropdownRef} className="dropdown">
              <button className="link">
                Services
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99953 10.667C7.84377 10.6673 7.69281 10.6131 7.57287 10.5137L3.57287 7.18035C3.43672 7.06719 3.35111 6.90458 3.33485 6.7283C3.3186 6.55201 3.37304 6.37649 3.4862 6.24035C3.59936 6.1042 3.76197 6.01859 3.93825 6.00233C4.11453 5.98608 4.29005 6.04052 4.4262 6.15368L7.99953 9.14035L11.5729 6.26035C11.6411 6.20497 11.7195 6.16361 11.8037 6.13866C11.888 6.11371 11.9763 6.10564 12.0637 6.11494C12.151 6.12423 12.2357 6.15069 12.3128 6.19281C12.3898 6.23493 12.4579 6.29186 12.5129 6.36035C12.5739 6.42889 12.6202 6.50931 12.6487 6.59656C12.6772 6.68381 12.6874 6.77601 12.6787 6.86739C12.6699 6.95876 12.6424 7.04734 12.5978 7.12758C12.5532 7.20782 12.4925 7.27798 12.4195 7.33368L8.41953 10.5537C8.29614 10.6374 8.14827 10.6773 7.99953 10.667Z"
                    fill="black"
                  />
                </svg>
              </button>
              <div
                className="dropdown-menu"
                style={{ transform: `translateX(${moveX}px)` }}
              >
                {dropdownItems.map((item) => (
                  <div key={item.title} className="dropdown-menu-item">
                    <h1 className="heading">{item.title}</h1>
                    <ul className="ul-items">
                      {item.items.map((navitem) => (
                        <Link key={navitem.title} href={`/${navitem.slug}`}>
                          <li className="item">{navitem.title}</li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </li>
          {/* <li className="nav-item">
            <div ref={dropdownRef2} className="dropdown">
              <button className="link">
                partners
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99953 10.667C7.84377 10.6673 7.69281 10.6131 7.57287 10.5137L3.57287 7.18035C3.43672 7.06719 3.35111 6.90458 3.33485 6.7283C3.3186 6.55201 3.37304 6.37649 3.4862 6.24035C3.59936 6.1042 3.76197 6.01859 3.93825 6.00233C4.11453 5.98608 4.29005 6.04052 4.4262 6.15368L7.99953 9.14035L11.5729 6.26035C11.6411 6.20497 11.7195 6.16361 11.8037 6.13866C11.888 6.11371 11.9763 6.10564 12.0637 6.11494C12.151 6.12423 12.2357 6.15069 12.3128 6.19281C12.3898 6.23493 12.4579 6.29186 12.5129 6.36035C12.5739 6.42889 12.6202 6.50931 12.6487 6.59656C12.6772 6.68381 12.6874 6.77601 12.6787 6.86739C12.6699 6.95876 12.6424 7.04734 12.5978 7.12758C12.5532 7.20782 12.4925 7.27798 12.4195 7.33368L8.41953 10.5537C8.29614 10.6374 8.14827 10.6773 7.99953 10.667Z"
                    fill="black"
                  />
                </svg>
              </button>

            </div>
          </li> */}
          <Link href="/faq">
            <li className="nav-item">FAQ</li>
          </Link>
          <Link href="/contact">
            <li className="nav-item">Contact Us</li>
          </Link>
          {/* ========= sign up btn =============== */}
          {/* <button className="profile-btn" onClick={handleModal}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 22H4V20C4 18.6739 4.52678 17.4021 5.46447 16.4645C6.40215 15.5268 7.67392 15 9 15H15C16.3261 15 17.5979 15.5268 18.5355 16.4645C19.4732 17.4021 20 18.6739 20 20V22ZM12 13C11.2121 13 10.4319 12.8448 9.7039 12.5433C8.97595 12.2417 8.31451 11.7998 7.75736 11.2426C7.20021 10.6855 6.75825 10.0241 6.45672 9.2961C6.15519 8.56815 6 7.78793 6 7C6 6.21207 6.15519 5.43185 6.45672 4.7039C6.75825 3.97595 7.20021 3.31451 7.75736 2.75736C8.31451 2.20021 8.97595 1.75825 9.7039 1.45672C10.4319 1.15519 11.2121 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7C18 8.5913 17.3679 10.1174 16.2426 11.2426C15.1174 12.3679 13.5913 13 12 13Z"
                fill="white"
              />
            </svg>
          </button> */}
        </ul>
        <div className="menu-btn" onClick={handleSidebar}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.4167 18.333H6.58333C5.70888 18.333 5 19.0419 5 19.9163V20.083C5 20.9575 5.70888 21.6663 6.58333 21.6663H33.4167C34.2911 21.6663 35 20.9575 35 20.083V19.9163C35 19.0419 34.2911 18.333 33.4167 18.333Z"
              fill="#1DB954"
            />
            <path
              d="M33.4167 26.667H6.58333C5.70888 26.667 5 27.3759 5 28.2503V28.417C5 29.2914 5.70888 30.0003 6.58333 30.0003H33.4167C34.2911 30.0003 35 29.2914 35 28.417V28.2503C35 27.3759 34.2911 26.667 33.4167 26.667Z"
              fill="#1DB954"
            />
            <path
              d="M33.4167 10H6.58333C5.70888 10 5 10.7089 5 11.5833V11.75C5 12.6245 5.70888 13.3333 6.58333 13.3333H33.4167C34.2911 13.3333 35 12.6245 35 11.75V11.5833C35 10.7089 34.2911 10 33.4167 10Z"
              fill="#1DB954"
            />
          </svg>
        </div>

        <Sidebar open={sidebarActive} handleSidebar={handleSidebar}>
          <ul className="sidenav-items">
            <li className="nav-item" onClick={handleSidebar}>
            <Link href="/">Home</Link>
            </li>
            <li className="nav-item" onClick={handleSidebar}>
            <Link href="/about-us">about us</Link>
            </li>
            <li className="nav-item" onClick={()=>setService(!service)}>
            <div className='services'>service
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
              </div>
              <div className={`service-list-item${toggleClass}`}>
              {dropdownItems.map((item) => (
                  <div key={item.title} className="dropdown-menu-item service-list">
                    <h1 className="heading">{item.title}</h1>
                    <ul className="ul-items">
                      {item.items.map((navitem) => (
                        // <Link key={navitem.title} href={`/${navitem.slug}`}>
                        //   <li className="item" onClick={handleSidebar}>{navitem.title}</li>
                        // </Link>
                        <Link key={navitem.title} >
                          <li className="item" onClick={handleSidebar}>
                            <a href={`/${navitem.slug}`}>{navitem.title}</a>
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
            </li>
           
            {/* <li className="nav-item" style={{display:"block"}}>
              partners
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
            </li> */}
            
            <li className="nav-item"  onClick={handleSidebar}>
            <Link href="/faq">FAQ</Link>
            </li>
            <li className="nav-item"  onClick={handleSidebar}>
            <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </Sidebar>
      </div>
    </nav>
  );
};

const dropdownItems = [
  {
    title: "Music promotion",
    items: [
      { title: "spotify promotion", slug: "spotify-promotion" },
      { title: "soundcloud promotion", slug: "soundcloud-promotion" },
      { title: "instagram promotion", slug: "instagram-promotion" },
      { title: "youtube promotion", slug: "youtube-promotion" },
    ],
  },
  {
    title: "Video editing",
    items: [
      { title: "lyric video promotion", slug: "lyric-video-promotion" },
      { title: "promo video promotion", slug: "promo-video" },
    ],
  },
  {
    title: "design services",
    items: [
      { title: "logo design", slug: "logo-design" },
      // { title: "banner design", slug: "banner-design" },
      // { title: "social media management", slug: "social-media-management" },
      // { title: "video thumbnail design", slug: "video-thumbnail-design" },
      { title: "cover art design", slug: "cover-art-design" },
      { title: "website design", slug: "website-design" },
    ],
  },
  {
    title: "additional service",
    items: [
      // { title: "Social media proficiency", slug: "social-media-proficiency" },
      // { title: "major artist branding", slug: "major-artist-branding" },
      // "music video submission",
      // "playlist submission",
      // { title: "pre-release countdown", slug: "pre-release-countdown" },
      { title: "artist biography", slug: "artist-biography" },
      { title: "artist branding", slug: "artist-branding" },
    ],
  },
];

const navItems = ["home", "about us", "services", "partners", "blog"];
export default Navbar;
