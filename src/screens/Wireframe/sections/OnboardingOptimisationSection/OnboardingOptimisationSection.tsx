import React from "react";

export const OnboardingOptimisationSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start relative">
      <header className="inline-flex flex-col items-start pt-0 pb-4 px-0 relative flex-[0_0_auto] text-left">
        <h1 className="relative w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-[#000626e6] text-[24px] md:text-[40px] tracking-[-0.48px] md:tracking-[-0.80px] leading-[28.8px] md:leading-[48.0px]">
          Hello, I am Nitesh
        </h1>

        <h2 className="relative w-fit [font-family:'Inter_Tight',Helvetica] font-medium text-[#cf0f12] text-[28px] md:text-5xl tracking-[-0.56px] md:tracking-[-0.96px] leading-[33.6px] md:leading-[57.6px]">
          Product Growth Designer
        </h2>

        <p className="relative w-fit [font-family:'Inter_Tight',Helvetica] font-normal text-[#000626e6] text-[20px] md:text-[32px] tracking-[-0.40px] md:tracking-[-0.64px] leading-[24px] md:leading-[38.4px]">
          I make users stay, pay, and love your product.
        </p>
      </header>

      <div className="relative self-stretch w-full h-px mb-[-1.00px]" />
    </section>
  );
};
