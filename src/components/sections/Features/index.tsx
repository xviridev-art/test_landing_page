import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
                                                                                                          import { DollarSign, TrendingUp, Users, Star, Zap, Shield } from "lucide-react";

const featureCards = [
  {
    title: "Premium Payouts",
    description: "Earn competitive rates for every 1,000 views your Roblox content generates",
    icon: DollarSign,
    badge: "Industry Leading",
    gradientBg: "bg-gradient-to-br from-red-500/10 to-red-600/10",
    iconBg: "bg-red-500",
  },
  {
    title: "Commission Rewards",
    description: "Earn commission on all orders that come through your unique referral code",
    icon: TrendingUp,
    badge: "5% Rate",
    gradientBg: "bg-gradient-to-br from-orange-500/10 to-orange-600/10",
    iconBg: "bg-orange-500",
  },
  {
    title: "Creator Community",
    description: "Join our thriving community of successful creators who've earned real money",
    icon: Users,
    badge: "1000+ Active",
    gradientBg: "bg-gradient-to-br from-blue-500/10 to-blue-600/10",
    iconBg: "bg-blue-500",
  },
  {
    title: "Network Access",
    description: "Collaborate with industry-leading Roblox content creators and grow together",
    icon: Star,
    badge: "Top Tier",
    gradientBg: "bg-gradient-to-br from-green-500/10 to-green-600/10",
    iconBg: "bg-green-500",
  },
  {
    title: "Instant Setup",
    description: "Upload your Roblox content and start earning immediately with zero delays",
    icon: Zap,
    badge: "Quick Start",
    gradientBg: "bg-gradient-to-br from-purple-500/10 to-purple-600/10",
    iconBg: "bg-purple-500",
  },
  {
    title: "Secure Payments",
    description: "Get paid securely and on time with our proven, reliable payout system",
    icon: Shield,
    badge: "100% Secure",
    gradientBg: "bg-gradient-to-br from-yellow-500/10 to-yellow-600/10",
    iconBg: "bg-yellow-500",
  },
];

interface FeaturesSectionProps {
  onJoinClick: () => void;
}

export const FeaturesSection = ({ onJoinClick }: FeaturesSectionProps): JSX.Element => {
  return (
    <section className="relative w-full py-24 px-4 md:px-8 lg:px-20 xl:px-80">
      <div className="relative max-w-screen-xl mx-auto w-full">
        <div className="flex flex-col w-full items-center gap-6">
          <Badge className="inline-flex items-center gap-2 px-[17px] py-[9px] rounded-full border border-solid border-green-400 bg-gradient-to-r from-green-900/50 to-green-800/50 h-auto">
            <Star className="w-4 h-4 text-green-400" />
            <span className="font-semibold text-green-200 text-[16px] tracking-[0] leading-5 whitespace-nowrap font-poppins">
              Why Choose Us
            </span>
          </Badge>

          <div className="flex flex-col max-w-screen-md w-full items-center">
            <h2 className="font-semibold text-white text-[48px] text-center tracking-[0] leading-[56px] font-poppins">
              Why Creators
            </h2>
            <h2 className="font-semibold text-green-400 text-[48px] text-center tracking-[0] leading-[56px] font-poppins">
              Choose Us
            </h2>
          </div>

          <div className="flex flex-col max-w-screen-md w-full items-center">
            <p className="font-semibold text-gray-300 md:text-[23.4px] text-[18px] text-center tracking-[0] leading-[39px] font-poppins">
              We provide the highest payouts, best support, and most reliable
              <br />
              platform for Roblox content creators
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16 mb-12">
          {featureCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div key={index} className="relative">
                <Card className={`${card.gradientBg} border-gray-700/20 border border-solid shadow-xl backdrop-blur-md rounded-3xl h-full`}>
                  <CardContent className="flex flex-col items-start gap-6 p-[33px]">
                    <div className="flex items-center justify-between w-full">
                      <div className={`w-[88px] h-[88px] flex items-center justify-center ${card.iconBg} rounded-2xl`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <Badge className="inline-flex flex-col items-start pt-2.5 pb-2 px-[13px] top-[-17px] right-[-43px] absolute bg-white/10 rounded-full border border-solid border-gray-700/30 backdrop-blur-sm h-auto">
                        <span className="font-semibold text-gray-200 text-[13.7px] tracking-[0] leading-4 whitespace-nowrap font-poppins">
                          {card.badge}
                        </span>
                      </Badge>
                    </div>

                    <div className="flex flex-col items-start gap-[15.12px] w-full">
                      <h3 className="font-bold text-white md:text-[23.4px] text-[18px] tracking-[0] leading-8 font-poppins">
                        {card.title}
                      </h3>

                      <p className="font-normal text-gray-300 text-[18px] text-base tracking-[0] leading-[29.2px] font-poppins">
                        {card.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col w-full items-center">
          <Button onClick={onJoinClick} className="gap-3 px-[33px] py-[17px] rounded-2xl border border-green-500 bg-gradient-to-r from-green-900/80 to-green-800/80 inline-flex items-center border-solid backdrop-blur-sm h-auto hover:opacity-90 transition-opacity">
            <Star className="w-5 h-5 text-green-400" />
            <span className="font-semibold text-white text-[20px] text-center tracking-[0] leading-6 whitespace-nowrap font-poppins">
              Join thousands of successful creators today!
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
