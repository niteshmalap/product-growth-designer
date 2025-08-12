import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const WorkExperienceSection = (): JSX.Element => {
  const retentionItems = [
    {
      title: "Uncover retention triggers",
      description:
        "Analyze user behavior to identify what keeps them coming back.",
    },
    {
      title: "Build habit loops",
      description:
        "Create a cycle of trigger → action → reward that feels natural and rewarding.",
    },
    {
      title: "Deliver ongoing value",
      description:
        "Continuously surface relevant features, content, or benefits at the right moment.",
    },
    {
      title: "Reduce drop-off risk",
      description:
        "Spot early signs of churn and re-engage users with timely prompts.",
    },
    {
      title: "Optimise for engagement –",
      description:
        "Test and refine loops to keep retention rates high over time.",
    },
  ];

  return (
    <Card className="w-full bg-white rounded-lg border border-solid border-[#0010661a]">
      <CardContent className="flex flex-col items-start gap-4 p-4">
        <Badge className="bg-[#8e6b19] text-white px-4 py-2 rounded-lg font-small-bold font-[number:var(--small-bold-font-weight)] text-[length:var(--small-bold-font-size)] tracking-[var(--small-bold-letter-spacing)] leading-[var(--small-bold-line-height)] [font-style:var(--small-bold-font-style)] hover:bg-[#8e6b19]">
          Retention &amp; Habit Loops
        </Badge>

        <h2 className="font-heading-4-bold font-[number:var(--heading-4-bold-font-weight)] text-[#8e6b19] text-[length:var(--heading-4-bold-font-size)] tracking-[var(--heading-4-bold-letter-spacing)] leading-[var(--heading-4-bold-line-height)] [font-style:var(--heading-4-bold-font-style)]">
          Turn casual users into loyal customers with habit-forming.
        </h2>

        <p className="font-heading-4-regular font-[number:var(--heading-4-regular-font-weight)] text-[#000833a6] text-[length:var(--heading-4-regular-font-size)] tracking-[var(--heading-4-regular-letter-spacing)] leading-[var(--heading-4-regular-line-height)] [font-style:var(--heading-4-regular-font-style)]">
          I design product experiences that turn occasional users into loyal,
          repeat customers by building habit-forming patterns into your UX.
        </p>

        <div className="flex flex-col items-start gap-6 md:gap-8 w-full">
          {retentionItems.map((item, index) => (
            <div key={index} className="flex flex-col items-start w-full">
              <h3 className="mt-[-1.00px] font-heading-4-bold font-[number:var(--heading-4-bold-font-weight)] text-[#8e6b19] text-[length:var(--heading-4-bold-font-size)] tracking-[var(--heading-4-bold-letter-spacing)] leading-[var(--heading-4-bold-line-height)] [font-style:var(--heading-4-bold-font-style)]">
                {item.title}
              </h3>
              <p className="font-small-regular font-[number:var(--small-regular-font-weight)] text-[#000833a6] text-[length:var(--small-regular-font-size)] tracking-[var(--small-regular-letter-spacing)] leading-[var(--small-regular-line-height)] [font-style:var(--small-regular-font-style)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
