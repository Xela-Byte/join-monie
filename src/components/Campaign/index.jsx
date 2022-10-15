import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Campaign = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease",
      duration: 800,
      once: false,
    });
    AOS.refresh();
  }, []);

  const animations = [
    "slide-left",
    "slide-up",
    "slide-right",
    "slide-left",
    "slide-down",
    "slide-right",
  ];

  const campaigns = [
    {
      id: 1,
      title: "Education",
      campaignImage: "/images/education.jpg",
    },
    {
      id: 2,
      title: "Art",
      campaignImage: "/images/art.jpg",
    },
    {
      id: 3,
      title: "Medical",
      campaignImage: "/images/medical.jpg",
    },
    {
      id: 4,
      title: "Business",
      campaignImage: "/images/business.jpg",
    },
    {
      id: 5,
      title: "Science",
      campaignImage: "/images/science.jpg",
    },
  ];
  return (
    <>
      <div className="w-full flex flex-col space-y-6 lg:h-screen pb-10">
        <p className="text-primary-100 text-3xl font-bold text-center">
          Make someone smile today
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mx-10">
          {campaigns.map((data, i) => (
            <>
              <div
                data-aos={animations[i]}
                className="rounded-2xl pb-6 slide overflow-hidden"
                key={i}
              >
                <img src={data.campaignImage} alt="" />
                <div className="px-3 pt-3 flex flex-col space-y-3">
                  <p className="text-primary-100 uppercase font-bold text-xl">
                    {data.title}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
