import { useState } from "react";
import { SignUpModal } from "../components/SignUpModal";
import { Button } from "../components/ui/button";
import { CallToActionSection } from "../components/sections/CallToAction";
import { EarningPotentialSection } from "../components/sections/EarningPotential";
import { FeaturesSection } from "../components/sections/Features";
import { FooterSection } from "../components/sections/Footer";
import { HeroSection } from "../components/sections/Hero";
import { HowItWorksSection } from "../components/sections/HowItWorks";

export const LandingPage = (): JSX.Element => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <SignUpModal
        open={isSignUpModalOpen}
        onOpenChange={setIsSignUpModalOpen}
      />
      <header className="w-full h-[103px] flex items-center justify-between bg-slate-900/90 backdrop-blur-sm shadow-lg px-6 md:px-12 lg:px-[49px]">
        <div className="flex items-center gap-4">
          <div className="w-[43px] h-[43px] bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <h1 className="font-bold text-white text-xl md:text-[25px] tracking-[-0.50px] leading-7 font-poppins">
            RoCart Affiliates
          </h1>
        </div>

        <nav className="flex items-center gap-2">
          <Button
            variant="ghost"
            onClick={() => setIsSignUpModalOpen(true)}
            className="h-10 px-4 rounded-[14px] font-semibold text-white text-[12.9px] hover:bg-white/10 font-poppins"
          >
            Sign In
          </Button>
          <Button
            onClick={() => setIsSignUpModalOpen(true)}
            className="h-10 px-4 rounded-[14px] bg-gradient-to-r from-green-400 to-green-600 shadow-lg font-semibold text-white text-[12.9px] hover:opacity-90 transition-opacity font-poppins"
          >
            Join Now
          </Button>
        </nav>
      </header>

      <main className="w-full overflow-x-hidden">
        <EarningPotentialSection onJoinClick={() => setIsSignUpModalOpen(true)} />
        <CallToActionSection onJoinClick={() => setIsSignUpModalOpen(true)} />
        <FeaturesSection onJoinClick={() => setIsSignUpModalOpen(true)} />
        <HeroSection />
        <HowItWorksSection onJoinClick={() => setIsSignUpModalOpen(true)} />
        <FooterSection />
      </main>
    </div>
  );
};
