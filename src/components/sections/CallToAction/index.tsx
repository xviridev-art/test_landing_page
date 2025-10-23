import { ArrowRightIcon, Users, DollarSign, Zap, CheckCircle } from "lucide-react";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";

const features = [
  {
    icon: Users,
    text: "1000+ Active Creators",
  },
  {
    icon: DollarSign,
    text: "$250K+ Paid Out",
  },
  {
    icon: Zap,
    text: "Instant Setup",
  },
];

interface CallToActionSectionProps {
  onJoinClick: () => void;
}

export const CallToActionSection = ({ onJoinClick }: CallToActionSectionProps): JSX.Element => {
  return (
    <section className="relative w-full px-4 py-24 md:px-8 lg:px-16">
      <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
        <div className="absolute top-[51px] left-1/2 -translate-x-1/2 w-[688px] h-[657px] rounded-full blur-[32px] bg-gradient-to-r from-green-400/5 to-green-600/5" />
      </div>

      <div className="relative max-w-screen-lg mx-auto">
        <Card className="overflow-hidden border-gray-700/20 shadow-xl backdrop-blur-md bg-gradient-to-br from-white/5 to-white/10">
          <CardContent className="relative p-12 md:p-16 flex flex-col items-center gap-8">
            <div className="flex-start w-full flex flex-col gap-5">
              <Badge className="border-green-400 bg-gradient-to-r w-[400px] from-green-900/50 to-green-800/50 text-green-200 hover:bg-gradient-to-r hover:from-green-800/60 hover:to-green-700/60 h-auto px-[15px] py-[15px] rounded-full">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                <span className="font-semibold text-[18.5px] leading-5 font-poppins">
                  Join the Creator Revolution
                </span>
              </Badge>
              <div className="flex flex-col max-w-screen-md w-full">
                <h2 className="font-semibold text-white text-[48px] text-left tracking-[0] leading-[56px] font-poppins">Ready to Monetize Your</h2>
                <h2 className="font-semibold text-green-400 text-[48px] text-left tracking-[0] leading-[56px] font-poppins">Roblox Content?</h2>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 max-w-screen-md w-full">
              <p className="font-semibold text-gray-300 text-[23.4px] leading-[39px] text-center font-poppins">
                Join our creator program and start earning from your Roblox
                content
                <br />
                today. We've already paid over $250,000 to creators like you!
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="inline-flex items-center gap-2">
                    <IconComponent className="w-5 h-5 text-green-400" />
                    <span className="font-semibold text-gray-300 text-[18.5px] leading-5 whitespace-nowrap font-poppins">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col items-center gap-4">
              <Button onClick={onJoinClick} className="text-white h-auto px-8 py-4 shadow-lg bg-gradient-to-r from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 rounded-[14px] transition-transform hover:scale-105">
                <span className="font-semibold text-white text-[16.6px] leading-7 font-poppins">
                  Sign Up Now &amp; Upload Content
                </span>
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Button>

              <p className="font-normal text-gray-400 text-[18.5px] text-center leading-5 font-poppins">
                No setup fees • Instant payouts • 24/7 support
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
