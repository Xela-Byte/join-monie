export const Raise = () => {
  return (
    <>
      <div className="bg-[#000] px-8 pb-10 pt-10 font-Poppins_regular space-y-4 text-white bg-contain bg-no-repeat w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-5xl text-center md:w-[698px] font-Poppins_semibold">
          Raise funds for causes easy
        </h1>
        <p className="text-sm text-neutral-200 md:w-[600px] text-center">
          With Joinmonie, it's very easy to create campaigns to help you pay
          your school fees, medical bill and even generate capital for your
          business
        </p>
        <button class="px-3 py-3 bg-primary-100 rounded-xl text-white">
          <a href="https://join-monie.vercel.app/register">Get Started</a>
        </button>
      </div>
    </>
  );
};
