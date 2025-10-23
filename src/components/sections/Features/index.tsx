import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { UserPlus, Link, DollarSign, CheckCircle } from "lucide-react";

const featureCards = [
  {
    title: "Create Account",
    description:
      "Sign up in seconds and get instant access to your creator dashboard with full analytics and tracking tools",
    icon: UserPlus,
    bgGradient:
      "bg-gradient-to-br from-blue-500/10 to-blue-600/10",
  },
  {
    title: "Connect Platforms",
    description:
      "Link your social media accounts to start tracking your reach and engagement metrics",
    icon: Link,
    bgGradient:
      "bg-gradient-to-br from-gray-500/10 to-gray-600/10",
  },
  {
    title: "Start Earning",
    description:
      "Begin earning from your content with competitive rates and reliable payment processing",
    icon: DollarSign,
    bgGradient:
      "bg-gradient-to-br from-green-500/10 to-green-600/10",
  },
];

interface FeaturesSectionProps {
  onJoinClick: () => void;
}

export const FeaturesSection = ({ onJoinClick }: FeaturesSectionProps): JSX.Element => {
  return (
    <section className="px-4 md:px-20 lg:px-80 py-24 flex flex-col w-full items-start relative">
      <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
        <div className="absolute top-[calc(50.00%_-_400px)] left-[calc(50.00%_-_400px)] w-[800px] h-[800px] rounded-full blur-[32px] bg-gradient-to-r from-green-400/5 to-green-600/5" />
        <div className="top-[246px] left-[480px] w-72 h-72 bg-blue-500/10 absolute rounded-full blur-[32px]" />
        <div className="right-[480px] bottom-[246px] w-96 h-96 bg-blue-600/10 absolute rounded-full blur-[32px]" />
      </div>

      <div className="flex flex-col max-w-screen-xl items-center gap-20 relative w-full mx-auto">
        <header className="flex flex-col items-center gap-6 relative w-full">
          <Badge className="border-green-800 bg-gradient-to-r from-green-900/50 to-green-800/50 inline-flex items-center gap-2 px-[17px] py-[9px] rounded-full border border-solid h-auto">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="font-semibold text-green-200 text-[12.1px] text-center tracking-[0] leading-5 whitespace-nowrap font-poppins">
              Simple 3-Step Process
            </span>
          </Badge>

          <div className="flex flex-col items-center w-full" />

          <div className="flex flex-col max-w-screen-md w-full items-center">
            <h2 className="font-semibold text-gray-300 text-[21.6px] text-center tracking-[0] leading-[39px] font-poppins">
              Start earning from your Roblox content in just three simple steps. Our
              <br />
              streamlined process gets you up and running in minutes.
            </h2>
          </div>
        </header>

        <div className="flex flex-col max-w-6xl w-full items-start gap-20">
          <div className="flex flex-col lg:flex-row items-start justify-center gap-12 w-full">
            {featureCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <Card
                  key={index}
                  className={`flex-1 min-w-[280px] lg:w-[352px] border-gray-700/20 ${card.bgGradient} flex flex-col items-start gap-6 p-[33px] rounded-3xl overflow-hidden border border-solid shadow-xl backdrop-blur-md relative`}
                >
                  <CardContent className="p-0 flex flex-col items-start gap-6 w-full">
                    <div className="w-[88px] h-[88px] flex items-center justify-center bg-gradient-to-br from-gray-700/20 to-gray-800/20 rounded-2xl">
                      <IconComponent className="w-10 h-10 text-green-400" />
                    </div>

                    <div className="flex flex-col items-start gap-[15.25px] w-full">
                      <h3 className="font-bold text-white text-[21.2px] tracking-[0] leading-8 font-poppins">
                        {card.title}
                      </h3>

                      <p className="font-normal text-gray-300 text-[15.8px] tracking-[0] leading-[29.2px] font-poppins">
                        {card.description}
                      </p>
                    </div>
                  </CardContent>

                  <div className="absolute w-[calc(100%_-_2px)] h-[calc(100%_-_2px)] top-px left-px rounded-3xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0" />
                </Card>
              );
            })}
          </div>

          <div className="flex flex-col items-center w-full">
            <Button onClick={onJoinClick} className="gap-3 px-[33px] py-[17px] rounded-2xl border border-green-500 bg-gradient-to-r from-green-900/80 to-green-800/80 inline-flex items-center border-solid backdrop-blur-sm h-auto hover:bg-gradient-to-r hover:from-green-800/90 hover:to-green-700/90 transition-colors">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-green-200 text-[14.1px] leading-6 font-semibold text-center tracking-[0] whitespace-nowrap font-poppins">
                Ready to start earning? Join thousands of creators!
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
