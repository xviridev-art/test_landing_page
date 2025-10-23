import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { Star, DollarSign, Users, Zap, Shield } from "lucide-react";

const featureCards = [
  {
    title: "Premium Payouts",
    description:
      "Earn competitive rates for every 1,000\nviews your Roblox content generates",
    icon: DollarSign,
    badge: "Industry Leading",
    gradientBg:
      "bg-gradient-to-br from-red-500/10 to-red-600/10",
    borderColor: "border-gray-700/20",
    badgePosition: "top-[-14px] right-0",
    animationDelay: "400ms",
  },
  {
    title: "Commission Rewards",
    description:
      "Earn commission on all orders that come\nthrough your unique referral code",
    icon: Star,
    badge: "5% Rate",
    gradientBg:
      "bg-gradient-to-br from-orange-500/10 to-orange-600/10",
    borderColor: "border-gray-700/20",
    badgePosition: "top-[-14px] right-0",
    animationDelay: "500ms",
  },
  {
    title: "Creator Community",
    description:
      "Join our thriving community of successful\ncreators who've earned real money",
    icon: Users,
    badge: "1000+ Active",
    gradientBg:
      "bg-gradient-to-br from-blue-500/10 to-blue-600/10",
    borderColor: "border-gray-700/20",
    badgePosition: "top-[-14px] right-0",
    animationDelay: "600ms",
  },
  {
    title: "Network Access",
    description:
      "Collaborate with industry-leading Roblox\ncontent creators and grow together",
    icon: Users,
    badge: "Top Tier",
    gradientBg:
      "bg-gradient-to-br from-green-500/10 to-green-600/10",
    borderColor: "border-gray-700/20",
    badgePosition: "top-[-14px] right-0",
    animationDelay: "700ms",
  },
  {
    title: "Instant Setup",
    description:
      "Upload your Roblox content and start\nearning immediately with zero delays",
    icon: Zap,
    badge: "Quick Start",
    gradientBg:
      "bg-gradient-to-br from-purple-500/10 to-purple-600/10",
    borderColor: "border-green-400/20",
    badgePosition: "top-[-14px] right-0",
    animationDelay: "800ms",
  },
  {
    title: "Secure Payments",
    description:
      "Get paid securely and on time with our\nproven, reliable payout system",
    icon: Shield,
    badge: "100% Secure",
    gradientBg:
      "bg-gradient-to-br from-yellow-500/10 to-yellow-600/10",
    borderColor: "border-gray-700/20",
    badgePosition: "top-[-14px] right-0",
    animationDelay: "900ms",
  },
];

interface CallToActionSectionProps {
  onJoinClick: () => void;
}

export const CallToActionSection = ({ onJoinClick }: CallToActionSectionProps): JSX.Element => {
  return (
    <section className="relative w-full py-24 px-4 md:px-8 lg:px-20 xl:px-80">
      <div className="relative max-w-screen-xl mx-auto w-full">
        <div className="flex flex-col w-full items-center gap-6">
          <Badge className="inline-flex items-center gap-2 px-[17px] py-[9px] rounded-full border border-solid border-green-400 bg-gradient-to-r from-green-900/50 to-green-800/50 h-auto">
            <Star className="w-4 h-4 text-green-400" />
            <span className="font-semibold text-green-200 text-[12.6px] tracking-[0] leading-5 whitespace-nowrap font-poppins">
              Why Choose Us
            </span>
          </Badge>

          <div className="flex flex-col max-w-screen-md w-full items-center">
            <h2 className="font-semibold text-gray-300 text-[21.4px] text-center tracking-[0] leading-[39px] font-poppins">
              We provide the highest payouts, best support, and most reliable
              <br />
              platform for Roblox content creators
            </h2>
          </div>

          <div className="absolute w-[calc(100%_+_640px)] h-[calc(100%_+_963px)] top-0 left-[-344px] pointer-events-none">
            <div className="absolute top-[312px] left-[480px] w-72 h-72 bg-gray-500/10 rounded-full blur-[32px]" />
            <div className="absolute right-[480px] bottom-[312px] w-96 h-96 bg-yellow-500/5 rounded-full blur-[32px]" />
            <div className="absolute top-[calc(50.00%_-_400px)] left-[calc(50.00%_-_400px)] w-[800px] h-[800px] rounded-full blur-[32px] bg-gradient-to-r from-green-400/5 to-green-600/5" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[364px] mb-[88px]">
          {featureCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className={`relative`}
              >
                <Card
                  className={`${card.gradientBg} ${card.borderColor} border border-solid shadow-xl backdrop-blur-md overflow-hidden rounded-3xl h-full`}
                >
                  <CardContent className="flex flex-col items-start gap-6 p-[33px]">
                    <div className="w-[88px] h-[88px] flex items-center justify-center bg-gradient-to-br from-gray-700/20 to-gray-800/20 rounded-2xl">
                      <IconComponent className="w-10 h-10 text-green-400" />
                    </div>

                    <div className="flex flex-col items-start gap-[15.12px] w-full">
                      <h3 className="font-bold text-white text-[21.4px] tracking-[0] leading-8 font-poppins">
                        {card.title}
                      </h3>

                      <p className="font-normal text-gray-300 text-base tracking-[0] leading-[29.2px] whitespace-pre-line font-poppins">
                        {card.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Badge
                  className={`absolute ${card.badgePosition} inline-flex flex-col items-start pt-2.5 pb-2 px-[13px] bg-white/10 rounded-full border border-solid border-gray-700/30 backdrop-blur-sm h-auto`}
                >
                  <span className="font-semibold text-gray-200 text-[10.7px] tracking-[0] leading-4 whitespace-nowrap font-poppins">
                    {card.badge}
                  </span>
                </Badge>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col w-full items-center">
          <Button onClick={onJoinClick} className="gap-3 px-[33px] py-[17px] rounded-2xl border border-green-500 bg-gradient-to-r from-green-900/80 to-green-800/80 inline-flex items-center border-solid backdrop-blur-sm h-auto hover:opacity-90 transition-opacity">
            <Star className="w-5 h-5 text-green-400" />
            <span className="font-semibold text-white text-[13.9px] text-center tracking-[0] leading-6 whitespace-nowrap font-poppins">
              Join thousands of successful creators today!
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
