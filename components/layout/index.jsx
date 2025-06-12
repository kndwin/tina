import Link from "next/link";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [mobileWidth, setMobileWidth] = useState(false);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();
      setMobileWidth(width < 640);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.pageYOffset > 120) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [setScrolledDown]);

  useEffect(() => console.log({ scrolledDown }), [scrolledDown]);

  const [showNav, setShowNav] = useState(false);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen py-2
			transition duration-300 ease
			`}
    >
      <header
        className={`${
          scrolledDown
            ? "fixed top-0 bg-primary text-white z-10 py-4  w-screen"
            : "relative max-w-4xl pt-8"
        } 
					${mobileWidth ? "pt-8 pb-8" : ""}
					flex items-center justify-center w-full 
					transition-all duration-300 ease-in-out
					text-center color-primary"`}
      >
        <Link href="/">
          <h2
            className={`${scrolledDown ? "text-white static mr-20" : "color-primary"} 
					${mobileWidth ? "absolute top-4 left-4" : ""}
					text-4xl left-6 sm:text-5xl font-beauty top-4 sm:top-6 sm:mr-20 cursor-pointer`}
          >
            tina
          </h2>
        </Link>
        {mobileWidth ? (
          <div className="absolute right-4">
            {showNav ? (
              <div className="fixed z-10 flex flex-col items-center justify-start w-40 h-screen pt-40 transition-all duration-300 ease bg-bg -top-0 -right-1 ">
                <Link href="/">
                  <p
                    onClick={() => setShowNav(false)}
                    className={`color-primary mr-4 text-2xl cursor-pointer font-recoleta`}
                  >
                    work
                  </p>
                </Link>
                <Link className="ml-4" href="/about">
                  <p
                    onClick={() => setShowNav(false)}
                    className={`color-primary mr-4 text-2xl cursor-pointer font-recoleta`}
                  >
                    about
                  </p>
                </Link>
                <button
                  onClick={() => setShowNav(false)}
                  className="absolute top-6 right-6"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 2.64275L13.3573 0.5L8 5.85725L2.64275 0.5L0.5 
											2.64275L5.85725 8L0.5 13.3573L2.64275 15.5L8 10.1427L13.3573 
											15.5L15.5 13.3573L10.1427 8L15.5 2.64275Z"
                      fill="#E79696"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <button onClick={() => setShowNav(true)}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 18H3V16H21V18ZM21 13H3V11H21V13ZM21 8H3V6H21V8Z"
                    fill={`${scrolledDown ? "#FFFDF8" : "#e79696"}`}
                  />
                </svg>
              </button>
            )}
          </div>
        ) : (
          <>
            <Link href="/">
              <p
                className={`${scrolledDown ? "text-white" : "color-primary"}
						mr-4 text-xl cursor-pointer font-recoleta`}
              >
                work
              </p>
            </Link>
            <Link className="ml-4" href="/about">
              <p
                className={`${scrolledDown ? "text-white" : "color-primary"}
						mr-4 text-xl cursor-pointer font-recoleta`}
              >
                about
              </p>
            </Link>
          </>
        )}
      </header>
      <main className="container flex flex-col items-center justify-center flex-1 h-full max-w-4xl px-4 mx-auto sm:px-20">
        {children}
      </main>
    </div>
  );
};

export default Layout;
