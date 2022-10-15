import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Howitworks = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease",
      duration: 800,
      once: false,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="pt-5 flex flex-col font-Poppins_regular text-neutral-200 space-y-4 bg-contain bg-no-repeat w-full h-fit lg:h-[80vh] relative pb-10">
        <p className="text-primary-100 text-3xl font-bold text-center">
          How it Works
        </p>
        <div className="mx-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div
              data-aos="slide-right"
              className="flex flex-col space-y-4 text-left"
            >
              <div className="relative -left-10">
                <img src="/images/purple_blur.svg" alt="blur" />
                <img
                  className="absolute top-16 left-16"
                  src="/images/AndroidLogo.svg"
                  alt="icon"
                />
              </div>
              <h1 className="text-2xl font-Poppins_semibold">
                Create an Account
              </h1>
              <p className="text-[18px] font-Poppins_regular">
                Get started with JoinMonie by creating an account to give you
                unlimited access to all features.
              </p>
            </div>
            <div
              data-aos="slide-up"
              className="flex flex-col space-y-4 text-left"
            >
              <div className="relative -left-10">
                <img src="/images/yellow_blur.png" alt="blur" />
                <img
                  className="absolute top-16 left-16"
                  src="/images/AndroidLogo.svg"
                  alt="icon"
                />
              </div>
              <h1 className="text-2xl font-Poppins_semibold">
                Create and View Progress of Campaigns
              </h1>
              <p className="text-[18px] font-Poppins_regular">
                Get to create camapigns and view progress noting how many people
                have donated and amount of funds donated
              </p>
            </div>
            <div
              data-aos="slide-left"
              className="flex flex-col space-y-4 text-left"
            >
              <div className="relative -left-10">
                <img src="/images/blue_blur.png" alt="blur" />
                <img
                  className="absolute top-16 left-16"
                  src="/images/AndroidLogo.svg"
                  alt="icon"
                />
              </div>
              <h1 className="text-2xl font-Poppins_semibold">
                Withdraw Raised Funds
              </h1>
              <p className="text-[18px] font-Poppins_regular">
                Withdraw funds raised with ease and no form of issues in as
                little as an hour
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
