import { TrendingUpIcon, DollarSign, Users, Star } from "lucide-react";
import { Badge } from "../../ui/badge";
import { Card, CardContent } from "../../ui/card";

const statsCards = [
  {
    icon: DollarSign,
    title: "Per 1,000 Views",
    value: "$3",
    description: "Earn for every 1,000 views your\ncontent generates",
    badge: "+15% this month",
    gradient: "linear-gradient(0deg,rgba(0, 253, 169, 0.84)_0%,rgba(0,188,125,0.07)_100%)",
    animationDelay: "200ms",
  },
  {
    icon: Star,
    title: "Commission Rate",
    value: "5%",
    description: "Earn commission on all orders\nthrough your unique code",
    badge: "Industry leading",
    gradient: "linear-gradient(0deg,rgba(12, 105, 245, 0.88)_0%,rgba(43,127,255,0.1)_100%)",
    animationDelay: "400ms",
  },
  {
    icon: DollarSign,
    title: "Total Paid Out",
    value: "$250K+",
    description: "Total amount paid to creators across\nour platform",
    badge: "Growing daily",
    gradient: "linear-gradient(0deg,rgba(255, 248, 43, 0.95)_0%,rgba(255,248,43,0.1)_100%)",
    animationDelay: "600ms",
  },
  {
    icon: Users,
    title: "Active Creators",
    value: "100+",
    description: "Successful creators earning on our\nplatform",
    badge: "New weekly",
    gradient: "linear-gradient(0deg,rgba(212, 0, 0, 0.9)_0%,rgba(212,0,0,0.07)_100%)",
    animationDelay: "800ms",
  },
];

interface EarningPotentialSectionProps {
  onJoinClick: () => void;
}

export const EarningPotentialSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-4 md:px-20 lg:px-20 py-24">
      <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
        <div className="absolute top-[calc(50.00%_-_400px)] left-[calc(50.00%_-_400px)] w-[800px] h-[800px] rounded-full blur-[32px] bg-gradient-to-r from-green-400/5 to-green-600/5" />
        <div className="top-[248px] left-[480px] w-72 h-72 bg-blue-500/10 absolute rounded-full blur-[32px]" />
        <div className="right-[480px] bottom-[249px] w-96 h-96 bg-blue-600/10 absolute rounded-full blur-[32px]" />
      </div>

      <div className="relative max-w-screen-xl w-full mx-auto">
        <header className="flex flex-col w-full items-center gap-6 mb-24">
          <Badge
            variant="outline"
            className="border-green-800 bg-gradient-to-r from-green-900/50 to-green-800/50 gap-2 px-[17px] py-[9px] rounded-full h-auto"
          >
            <Star className="w-4 h-4 text-green-400" />
            <span className="font-semibold text-green-200 text-[18.5px] leading-5 font-poppins">
              Proven Earning Potential
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
            <h1 className="font-semibold text-gray-300 text-[21px] text-center tracking-[0] leading-[39px] font-poppins">
              See the real numbers behind our creator success stories and
              <br />
              understand your earning potential
            </h1>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {statsCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Card
                key={index}
                className="border-gray-700/20 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl overflow-hidden border shadow-xl backdrop-blur-md transition-transform hover:scale-105"
                style={{
                  background: `${card.gradient}`,
                }}
              >
                <CardContent className="flex flex-col gap-6 p-[33px]">
                  <div className="w-[88px] h-[88px] flex items-center justify-center bg-gradient-to-br from-gray-700/20 to-gray-800/20 rounded-2xl">
                    <IconComponent className="w-10 h-10 text-green-400" />
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="font-bold text-white text-[17.8px] tracking-[0] leading-7 font-poppins">
                      {card.title}
                    </h3>

                    <div className="flex flex-col gap-[6.88px]">
                      <div className="bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent font-bold text-[34px] tracking-[0] leading-10 font-poppins">
                        {card.value}
                      </div>

                      <p className="font-normal text-gray-300 text-[18.5px] tracking-[0] leading-[22.8px] whitespace-pre-line font-poppins">
                        {card.description}
                      </p>
                    </div>

                    <div className="flex items-center pt-[17px] border-t border-gray-700/20">
                      <div className="inline-flex items-center gap-1">
                        <TrendingUpIcon className="w-3 h-3 text-green-400" />
                        <span className="font-semibold text-green-200 text-[18.5px] tracking-[0] leading-5 font-poppins">
                          {card.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute w-[calc(100%_-_2px)] h-[calc(100%_-_2px)] top-px left-px rounded-3xl bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 pointer-events-none" />
                </CardContent>
              </Card>
            );
          })}
        </div>

        <footer className="flex flex-col w-full items-center">
          <Badge
            variant="outline"
            className="gap-2 px-[25px] py-[13px] rounded-full border-green-800 bg-gradient-to-r from-green-900/50 to-green-800/50 backdrop-blur-sm h-auto"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <span className="text-green-200 text-[17.5px] leading-5 font-semibold font-poppins">
              Ready to start earning?
            </span>
          </Badge>
        </footer>
      </div>
    </section>
  );
};
