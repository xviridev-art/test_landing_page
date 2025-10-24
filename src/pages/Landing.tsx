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
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#0A100D] bg-[radial-gradient(circle_at_center,_rgba(0,188,125,0.03)_0%,_transparent_50%)] bg-[linear-gradient(rgba(0,188,125,0.1)_1px,_transparent_1px),_linear-gradient(90deg,rgba(0,188,125,0.1)_1px,_transparent_1px)]">
      <SignUpModal
        open={isSignUpModalOpen}
        onOpenChange={setIsSignUpModalOpen}
      />
      <header className="w-full h-[103px] flex items-center justify-between bg-[#0A100D] border-t border-purple-500/20 border-b border-purple-500/20 px-6 md:px-12 lg:px-[49px]">
        <div className="flex items-center gap-4">
          <div className="w-[43px] h-[43px] rounded-lg flex items-center justify-center">
            <img className="w-12 h-12 object-cover" alt="RoCart" src="https://c.animaapp.com/mh2vw4qcAtJtav/img/rooc-1.png" />
          </div>
          <h1 className="font-bold text-white text-xl md:text-[25px] text-[16px]   tracking-[-0.50px] leading-7 font-poppins">
            RoCart Affiliates
          </h1>
        </div>

        <nav className="flex items-center gap-2">
          <Button
            variant="ghost"
            onClick={() => setIsSignUpModalOpen(true)}
            className="h-10 px-4 rounded-[14px] font-semibold text-white md:text-[20px] text-[16px] hover:bg-white/10 font-poppins"
          >
            Sign In
          </Button>
          <Button
            onClick={() => setIsSignUpModalOpen(true)}
            className="h-10 px-4 rounded-[14px] bg-gradient-to-r from-green-400 to-green-600 shadow-lg font-semibold text-white md:text-[20px] text-[16px] hover:opacity-90 transition-opacity font-poppins"
          >
            Join Now
          </Button>
        </nav>
      </header>

      <main className="w-full overflow-x-hidden">
        <HeroSection onJoinClick={() => setIsSignUpModalOpen(true)} />
        <FeaturesSection onJoinClick={() => setIsSignUpModalOpen(true)} />
        <HowItWorksSection onJoinClick={() => setIsSignUpModalOpen(true)} />
        <EarningPotentialSection onJoinClick={() => setIsSignUpModalOpen(true)} />
        <CallToActionSection onJoinClick={() => setIsSignUpModalOpen(true)} />
        <FooterSection />
      </main>
    </div>
  );
};
