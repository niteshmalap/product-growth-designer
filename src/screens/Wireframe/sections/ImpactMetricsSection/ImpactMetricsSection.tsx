import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const impactMetrics = [
  {
    title: "Analyze conversion points",
    description:
      "Find which areas and what reasons users are hesitate to upgrade or purchase.",
  },
  {
    title: "Frictionless purchase flows",
    description: "Make checkout and upgrade steps smooth, clear, and fast.",
  },
  {
    title: "Use contextual prompts",
    description:
      "Show the right upsell or plan at the right time in the user journey.",
  },
  {
    title: "Create value-driven paywalls",
    description: "Ensure the paywall sells benefits, not just lists features.",
  },
  {
    title: "A/B test for impact",
    description: "Continuously refine to improve trial-to-paid, MRR and ARPU",
  },
];

export const ImpactMetricsSection = (): JSX.Element => {
  return (
    <Card className="w-full bg-white border border-solid border-[#0010661a] rounded-lg">
      <CardContent className="flex flex-col items-start gap-4 p-4">
        <Badge className="bg-[#067a57] text-white px-4 py-2 rounded-lg font-heading-4-bold font-[number:var(--heading-4-bold-font-weight)] text-[length:var(--heading-4-bold-font-size)] tracking-[var(--heading-4-bold-letter-spacing)] leading-[var(--heading-4-bold-line-height)] [font-style:var(--heading-4-bold-font-style)] hover:bg-[#067a57]">
          Monetization UX
        </Badge>

        <h2 className="self-stretch font-heading-4-bold font-[number:var(--heading-4-bold-font-weight)] text-[#067a57] text-[length:var(--heading-4-bold-font-size)] tracking-[var(--heading-4-bold-letter-spacing)] leading-[var(--heading-4-bold-line-height)] [font-style:var(--heading-4-bold-font-style)]">
          Design that turns engagement into revenue.
        </h2>

        <p className="self-stretch font-heading-4-regular font-[number:var(--heading-4-regular-font-weight)] text-[#000833a6] text-[length:var(--heading-4-regular-font-size)] tracking-[var(--heading-4-regular-letter-spacing)] leading-[var(--heading-4-regular-line-height)] [font-style:var(--heading-4-regular-font-style)]">
          I optimise your product&apos;s pricing, paywalls, and upgrade flows so
          users are not just engaged, they&apos;re ready to pay.
        </p>

        <div className="flex flex-col items-start gap-6 md:gap-8 self-stretch w-full">
          {impactMetrics.map((metric, index) => (
            <div
              key={index}
              className="flex flex-col items-start self-stretch w-full"
            >
              <h3 className="self-stretch mt-[-1.00px] font-heading-4-bold font-[number:var(--heading-4-bold-font-weight)] text-[#067a57] text-[length:var(--heading-4-bold-font-size)] tracking-[var(--heading-4-bold-letter-spacing)] leading-[var(--heading-4-bold-line-height)] [font-style:var(--heading-4-bold-font-style)]">
                {metric.title}
              </h3>
              <p
                className="self-stretch font-small-regular font-[number:var(--small-regular-font-weight)] text-[#000833a6] text-[length:var(--small-regular-font-size)] tracking-[var(--small-regular-letter-spacing)] leading-[var(--small-regular-line-height)] [font-style:var(--small-regular-font-style)]"
              >
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
