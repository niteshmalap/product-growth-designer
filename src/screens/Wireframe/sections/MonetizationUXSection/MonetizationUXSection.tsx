import React from "react";

const impactMetrics = [
  {
    value: "+35% activation rate",
    description:
      "With new and improved onboarding, more new users completed key first steps and showed value faster.",
    color: "text-[#4b63d8]",
  },
  {
    value: "+28% user return rate",
    description:
      "More users kept coming back week after week after adding habit loops and timely reminders.",
    color: "text-[#8e6b19]",
  },
  {
    value: "2.5x trial-to-paid conversions",
    description:
      "After optimizing paywalls and upgrade prompts, free users became paying customers, with effect on MRR and ARPU",
    color: "text-[#067a57]",
  },
  {
    value: "70% faster time-to-value",
    description:
      "Users reached their first success milestone in half the time after streamlining onboarding steps.",
    color: "text-[#1a74a8]",
  },
  {
    value: "+40% feature adoption rate",
    description:
      "More users engaged with key features after adding in-app guidance and contextual prompts.",
    color: "text-[#000626e6]",
  },
];

const workExperience = [
  {
    title: "Freelancer",
    period: "Jun 2025 - Present",
    description:
      "Working with startups for user onboarding, adding AI - features, notifications flow, marketing & sales funnels and more",
    isMain: true,
  },
  {
    title: "BrainBite.ai",
    period: "Dec 2024 - July 2025",
    description:
      "Worked on user on boarding, engagement and subscription paywall, email and in-app notifications flow",
    isMain: false,
  },
  {
    title: "SISAR",
    period: "May 2024 - Dec 2024",
    description: "Worked on UX/UI Design for their websites and AI based tool",
    isMain: false,
  },
  {
    title: "Skillnet Inc",
    period: "Feb 2019 - Feb 2024",
    description:
      "Worked on UX/UI Design for Ecommerce B2B & B2C products in Retail industry",
    isMain: false,
  },
  {
    title: "Rage Communications",
    period: "Jul 2014 - Jan 2019",
    description:
      "Designed products for startups in Fintech, Ecommerce, Automobile, Recruitment and Healthcare",
    isMain: false,
  },
  {
    title: "IRIS Business Services",
    period: "Jun 2012 - Jun 2014",
    description:
      "Designed data visualisations and dashboards for 7 financial products and other websites",
    isMain: false,
  },
  {
    title: "Arrk",
    period: "May 2011 - Jun 2012",
    description:
      "Worked as UI Designer and Developer for multiple projects in Fintech and Security soltions",
    isMain: false,
  },
  {
    title: "Powerweave",
    period: "Nov 2008 - Apr 2011",
    description:
      "Worked as UI Designer and Developer for multiple projects in Ecommerce with Promotional products industry",
    isMain: false,
  },
  {
    title: "Synergy Tech Solutions",
    period: "Aug 2007 - Oct 2009",
    description: "Web Designer for multiple projects Photoshop, HTML, CSS & JS",
    isMain: false,
  },
  {
    title: "Angel Broking",
    period: "Sep 2006 - July 2007",
    description: "Web Designer for internal web apps and their websites",
    isMain: false,
  },
];

export const MonetizationUXSection = (): JSX.Element => {
  return (
    <section className="flex flex-col lg:flex-row items-start gap-8 w-full">
      <div className="flex flex-col flex-1 items-start gap-6 md:gap-8">
        <h2 className="font-heading-2-bold font-[number:var(--heading-2-bold-font-weight)] text-[#cf0f12] text-[length:var(--heading-2-bold-font-size)] tracking-[var(--heading-2-bold-letter-spacing)] leading-[var(--heading-2-bold-line-height)] [font-style:var(--heading-2-bold-font-style)]">
          Impact in Numbers
        </h2>

        <div className="flex flex-col items-start gap-6 md:gap-8 w-full max-w-[528px]">
          {impactMetrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-start w-full">
              <div
                className={`[font-family:'Inter_Tight',Helvetica] font-semibold ${metric.color} text-[28px] md:text-[40px] tracking-[-0.56px] md:tracking-[-0.80px] leading-[36.4px] md:leading-[52px] mb-2`}
              >
                {metric.value}
              </div>
              <p className="font-small-regular font-[number:var(--small-regular-font-weight)] text-[#000833a6] text-[length:var(--small-regular-font-size)] tracking-[var(--small-regular-letter-spacing)] leading-[var(--small-regular-line-height)] [font-style:var(--small-regular-font-style)]">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col flex-1 items-start gap-6 md:gap-8 max-w-[488px]">
        <h2 className="font-heading-2-bold font-[number:var(--heading-2-bold-font-weight)] text-[#cf0f12] text-[length:var(--heading-2-bold-font-size)] tracking-[var(--heading-2-bold-letter-spacing)] leading-[var(--heading-2-bold-line-height)] [font-style:var(--heading-2-bold-font-style)]">
          Work Experience
        </h2>

        <div className="flex flex-col items-start gap-6 md:gap-8 w-full">
          {workExperience.map((job, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-center w-full"
            >
              <div className="flex items-center gap-4 mb-2">
                <h3
                  className={`${job.isMain ? "font-heading-4-bold font-[number:var(--heading-4-bold-font-weight)] text-[#000626e6] text-[length:var(--heading-4-bold-font-size)] tracking-[var(--heading-4-bold-letter-spacing)] leading-[var(--heading-4-bold-line-height)] [font-style:var(--heading-4-bold-font-style)]" : "font-small-bold font-[number:var(--small-bold-font-weight)] text-[#000833a6] text-[length:var(--small-bold-font-size)] tracking-[var(--small-bold-letter-spacing)] leading-[var(--small-bold-line-height)] [font-style:var(--small-bold-font-style)]"}`}
                >
                  {job.title}
                </h3>
                <span
                  className={`${job.isMain ? "font-tiny-bold font-[number:var(--tiny-bold-font-weight)] text-[#000833a6] text-[length:var(--tiny-bold-font-size)] tracking-[var(--tiny-bold-letter-spacing)] leading-[var(--tiny-bold-line-height)] [font-style:var(--tiny-bold-font-style)]" : "font-tiny-regular font-[number:var(--tiny-regular-font-weight)] text-[#000833a6] text-[length:var(--tiny-regular-font-size)] tracking-[var(--tiny-regular-letter-spacing)] leading-[var(--tiny-regular-line-height)] [font-style:var(--tiny-regular-font-style)]"} text-sm md:text-base`}
                >
                  {job.period}
                </span>
              </div>
              <p
                className={`font-small-regular font-[number:var(--small-regular-font-weight)] ${job.isMain ? "text-[#000626e6]" : "text-[#000833a6]"} text-[length:var(--small-regular-font-size)] tracking-[var(--small-regular-letter-spacing)] leading-[var(--small-regular-line-height)] [font-style:var(--small-regular-font-style)] w-full`}
              >
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
