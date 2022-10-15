import { useRef } from "react";

// useEffect

export const Navbar = () => {
  const bar = useRef();
  const openBar = () => (bar.current.style = "transform: translate(0px, 0%);");
  const closeBar = () =>
    (bar.current.style = "transform: translate(0px, -100%);");
  return (
    <>
      <div className="neon px-4 md:px-20 py-2 w-full h-16 flex flex-row justify-between items-center">
        <img className="h-32 w-32" src="/images/logo.svg" />
        <div className="flex flex-row justify-between items-center gap-10">
          <div className="block md:hidden">
            <button className="px-3 py-3 rounded-xl" onClick={openBar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <ul className="flex flex-col md:flex-row justify-between items-center gap-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="https://join-monie.vercel.app/how-it-works">
                  How it Works
                </a>
              </li>
              <li>
                <a href="https://join-monie.vercel.app/trust-and-safety">
                  Trust and Safety
                </a>
              </li>
              <li>
                <a href="https://join-monie.vercel.app/faq">Faqs</a>
              </li>
              <li>
                <a href="https://join-monie.vercel.app/about-us">About Us</a>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <button class="px-3 py-3 bg-primary-100 rounded-xl text-white">
              <a href="https://join-monie.vercel.app/register">Get Started</a>
            </button>
          </div>
        </div>
      </div>
      <div
        ref={bar}
        style={{ transform: "translate(0px, -100%)" }}
        className="flex flex-col !text-white justify-center transition-all
        duration-500 items-center h-screen
        overflow-hidden w-screen fixed top-0 z-[999999] bg-black/90"
      >
        <button
          onClick={closeBar}
          className="px-3 py-3 fixed right-5 top-10 text-3xl rounded-xl"
        >
          <span>&times;</span>
        </button>
        <div className="block md:hidden">
          <ul className="flex flex-col md:flex-row justify-between items-center gap-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="https://join-monie.vercel.app/how-it-works">
                How it Works
              </a>
            </li>
            <li>
              <a href="https://join-monie.vercel.app/trust-and-safety">
                Trust and Safety
              </a>
            </li>
            <li>
              <a href="https://join-monie.vercel.app/faq">Faqs</a>
            </li>
            <li>
              <a href="https://join-monie.vercel.app/about-us">About Us</a>
            </li>
          </ul>
        </div>
        <div className="md:hidden justify-center flex ">
          <button class="px-3 py-3 bg-primary-100 rounded-xl text-white">
            <a href="https://join-monie.vercel.app/register">Get Started</a>
          </button>
        </div>
      </div>
    </>
  );
};
