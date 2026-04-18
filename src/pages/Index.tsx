import {
  HeroSection,
  BenefitsSection,
  SocialProofSection,
  HowItWorksSection,
  ObjectionsSection,
  FinalCTASection,
} from "@/components/LandingSections";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <BenefitsSection />
      <SocialProofSection />
      <HowItWorksSection />
      <ObjectionsSection />
      <FinalCTASection />
    </main>
  );
};

export default Index;
