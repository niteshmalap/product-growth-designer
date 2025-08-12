import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { ImpactMetricsSection } from "./sections/ImpactMetricsSection/ImpactMetricsSection";
import { MonetizationUXSection } from "./sections/MonetizationUXSection/MonetizationUXSection";
import { OnboardingOptimisationSection } from "./sections/OnboardingOptimisationSection/OnboardingOptimisationSection";
import { RetentionAndHabitLoopsSection } from "./sections/RetentionAndHabitLoopsSection/RetentionAndHabitLoopsSection";
import { WorkExperienceSection } from "./sections/WorkExperienceSection/WorkExperienceSection";

export const Wireframe = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-[#f5f5fa] flex flex-col">
      <main className="flex-1 pt-6 md:pt-10 pb-12 md:pb-24 px-4 md:px-[120px]">
        <div className="flex flex-col gap-6 md:gap-[26px]">
          <OnboardingOptimisationSection />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-[31px]">
            <RetentionAndHabitLoopsSection />
            <WorkExperienceSection />
            <ImpactMetricsSection />
          </div>

          <MonetizationUXSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};
