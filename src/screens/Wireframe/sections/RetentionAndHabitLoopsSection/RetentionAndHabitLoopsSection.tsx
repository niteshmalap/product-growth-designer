import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const RetentionAndHabitLoopsSection = (): JSX.Element => {
  const onboardingSteps = [
    {
      title: "Research & Diagnose",
      description:
        "Analyze user behavior, funnels, and drop-off points to find friction in onboarding.",
    },
    {
      title: "Clarify Value Early",
      description:
        "Ensure the product's core benefit is clear within the first few interactions.",
    },
    {
      title: "Personalise the Experience",
      description:
        "Adapt onboarding steps based on user type, needs, or goals.",
    },
    {
      title: "Test & Iterate",
      description:
        "Run A/B tests on messaging, flow, and UI to optimize for conversion and engagement.",
    },
    {
      title: "Measure & Scale",
      description:
        "Track activation, retention, and time-to-value to continuously improve.",
    },
  ];

  return (
    <Card className="w-full bg-white rounded-lg border border-solid border-[#0010661a]">
      <CardContent className="flex flex-col items-start gap-4 p-4">
        <Badge className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#4b63d8] rounded-lg hover:bg-[#4b63d8]">
          <span className="font-small-bold font-[number:var(--small-bold-font-weight)] text-white text-[length:var(--small-bold-font-size)] tracking-[var(--small-bold-letter-spacing)] leading-[var(--small-bold-line-height)] whitespace-nowrap [font-style:var(--small-bold-font-style)]">
            Onboarding Optimisation
          </span>
        </Badge>

        <h2 className="self-stretch font-heading-4-bold font-[number:var(--heading-4-bold-font-weight)] text-[#4b63d8] text-[length:var(--heading-4-bold-font-size)] tracking-[var(--heading-4-bold-letter-spacing)] leading-[var(--heading-4-bold-line-height)] [font-style:var(--heading-4-bold-font-style)]">
          Product experiences that drive real growth.
        </h2>

        <p className="self-stretch font-heading-4-regular font-[number:var(--heading-4-regular-font-weight)] text-[#000833a6] text-[length:var(--heading-4-regular-font-size)] tracking-[var(--heading-4-regular-letter-spacing)] leading-[var(--heading-4-regular-line-height)] [font-style:var(--heading-4-regular-font-style)]">
          Designing onboarding flows that not only convert new signups into
          active users but also keep them engaged long-term.
        </p>

        <div className="flex flex-col items-start gap-6 md:gap-8 w-full">
          {onboardingSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-start self-stretch w-full"
            >
              <h3 className="self-stretch mt-[-1.00px] font-heading-4-bold font-[number:var(--heading-4-bold-font-weight)] text-[#4b63d8] text-[length:var(--heading-4-bold-font-size)] tracking-[var(--heading-4-bold-letter-spacing)] leading-[var(--heading-4-bold-line-height)] [font-style:var(--heading-4-bold-font-style)]">
                {step.title}
              </h3>

              <p className="self-stretch font-small-regular font-[number:var(--small-regular-font-weight)] text-[#000833a6] text-[length:var(--small-regular-font-size)] tracking-[var(--small-regular-letter-spacing)] leading-[var(--small-regular-line-height)] [font-style:var(--small-regular-font-style)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
