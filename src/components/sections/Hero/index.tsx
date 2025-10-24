import { ArrowRightIcon, Star, Users, DollarSign, Instagram, Youtube, Music, Twitter, X } from "lucide-react";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";

const features = [
  {
    icon: Star,
    label: "Premium Payouts",
  },
  {
    icon: Users,
    label: "Creator Network",
  },
  {
    icon: ArrowRightIcon,
    label: "Growth Tools",
  },
];

const stats = [
  { value: "2.4M", label: "Views" },
  { value: "156", label: "Orders" },
  { value: "$3.2K", label: "Total Earned" },
];

interface HeroSectionProps {
  onJoinClick: () => void;
}

export const HeroSection = ({ onJoinClick }: HeroSectionProps): JSX.Element => {
  return (
    <section className="relative w-full px-4 md:px-20 lg:px-20 py-24">
      <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
        <div className="absolute top-[calc(50.00%_-_300px)] left-[calc(50.00%_-_300px)] w-[600px] h-[600px] rounded-full blur-[32px] bg-gradient-to-r from-green-400/5 to-green-600/5 opacity-68" />
        <div className="absolute top-[174px] left-[480px] w-96 h-96 bg-green-400/10 rounded-full blur-[32px]" />
        <div className="right-[480px] bottom-[174px] w-80 h-80 bg-green-300/5 absolute rounded-full blur-[32px]" />
        
        <div className="absolute lg:top-[400px] lg:left-[unset] lg:right-[800px] left-[200px] top-[unset] bottom-[-160px] rotate-[70deg] w-[120px] h-[530px] flex items-center justify-center">
          <Instagram className="w-[100px] h-[100px] text-pink-500" />
        </div>
        <div className="absolute top-[175px] left-[1395px] w-[120px] h-[100px] flex items-center justify-center lg:top-[225px] lg:left-[unset] lg:right-[600px] right-[50px] left-[unset] top-[unset] bottom-[340px] rotate-[30deg]">
          <Music className="w-[100px] h-[100px] text-white" />
        </div>
        <div className="absolute lg:top-[160px] lg:left-[unset] lg:right-[900px] left-[100px] top-[unset] bottom-[215px] rotate-[20deg] w-[120px] h-[250px] flex items-center justify-center">
          <Youtube className="w-[100px] h-[100px] text-red-500" />
        </div>
        <div className="absolute lg:top-[400px] lg:left-[unset] lg:right-[450px] left-[200px] top-[unset] bottom-[-160px] w-[120px] h-[530px] flex items-center justify-center">
          <Twitter className="w-[100px] h-[100px] text-blue-500" />
        </div>
      </div>

      <div className="flex flex-col max-w-screen-2xl w-full items-start md:px-6 px-0 lg:px-32 md:py-20 py-0 relative">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-24 w-full">
          <div className="flex flex-col w-full lg:w-[608px] items-start gap-8">
            <Badge
              variant="outline"
              className="inline-flex items-center gap-2 px-[25px] py-[13px] h-auto rounded-full border-green-400/30 backdrop-blur-sm bg-green-400/20"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="font-semibold text-green-200 text-[16px] tracking-[0] leading-5 font-poppins">
                Trusted by 1000+ Roblox Creators
              </span>
            </Badge>

            <div className="flex flex-col gap-2 w-full">
              <h1 className="font-bold text-white md:text-[56px] text-[46px] tracking-[0] leading-[64px] font-poppins">
                Monetize Your
              </h1>
              <h1 className="font-bold text-green-400 md:text-[56px] text-[46px] tracking-[0] leading-[64px] font-poppins">
                Roblox Content
              </h1>
            </div>

            <p className="font-semibold text-gray-300 text-[23.4px] tracking-[0] leading-[39px] font-poppins">
              Transform your Roblox creations into a sustainable
              <br />
              income stream. Join the premier platform for content
              <br />
              creators.
            </p>

            <div className="flex flex-wrap items-start gap-6 w-full">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="inline-flex items-center gap-2">
                    <IconComponent className="w-5 h-5 text-green-400" />
                    <span className="font-semibold text-gray-300 text-[16px] tracking-[0] leading-5 whitespace-nowrap font-poppins">
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <Button onClick={onJoinClick} className="inline-flex h-auto items-center justify-center px-8 py-4 rounded-[14px] overflow-hidden shadow-lg bg-gradient-to-r from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 transition-all">
              <span className="font-semibold text-white text-[16px] text-center tracking-[0] leading-7 whitespace-nowrap font-poppins">
                Start Earning Today
              </span>
              <ArrowRightIcon className="w-4 h-4 ml-2 text-white"/>
            </Button>
          </div>

          <div className="flex flex-col w-full lg:w-[608px] items-start px-0 lg:px-12 py-0">
            <div className="flex flex-col max-w-lg items-start w-full relative">
              <div className="absolute w-full h-full top-0 left-0 rounded-3xl blur-[20px] bg-gradient-to-br from-green-400/5 to-green-600/10 opacity-57" />

              <Card className="w-full rounded-3xl overflow-hidden border-gray-700/20 shadow-xl backdrop-blur-md bg-white/10">
                <CardContent className="flex flex-col items-start gap-4 p-[33px]">
                  <div className="flex items-center justify-between w-full">
                    <div className="inline-flex items-center gap-3">
                      <div className="flex w-[48.04px] h-[28.43px] items-center justify-center rounded">
                        <img className="w-12 h-12 object-cover" alt="RoCart" src="https://c.animaapp.com/mh2vw4qcAtJtav/img/rooc-1.png" />
                      </div>

                      <div className="inline-flex flex-col items-start">
                        <span className="font-semibold text-white text-[14.4px] tracking-[0] leading-6 whitespace-nowrap font-poppins">
                          RoCart Affiliate
                        </span>
                        <span className="font-normal text-gray-400 text-[15.1px] tracking-[0] leading-5 whitespace-nowrap font-poppins">
                          Content Creator!
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex flex-col items-end">
                      <span className="font-bold text-green-400 text-lg text-right tracking-[0] leading-7 whitespace-nowrap font-poppins">
                        $1,247
                      </span>
                      <span className="font-normal text-gray-400 text-[18.5px] text-right tracking-[0] leading-5 whitespace-nowrap font-poppins">
                        This month
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start justify-center gap-4 pt-[17px] w-full border-t border-gray-700/20">
                    {stats.map((stat, index) => (
                      <div
                        key={index}
                        className="flex flex-col w-[138px] items-center"
                      >
                        <span className="font-bold text-white text-[19.5px] text-center tracking-[0] leading-7 font-poppins">
                          {stat.value}
                        </span>
                        <span className="font-normal text-gray-400 text-[16.5px] text-center tracking-[0] leading-4 font-poppins">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Badge className="inline-flex items-center px-4 py-2 absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full overflow-hidden shadow-lg h-auto border-0 hover:from-green-400 hover:to-green-500">
                <span className="font-semibold text-white text-[13.3px] tracking-[0] leading-5 whitespace-nowrap font-poppins">
                  +127% Growth
                </span>
              </Badge>

              <Badge className="inline-flex items-center px-[17px] py-[9px] absolute -left-4 -bottom-4 bg-white/10 rounded-full overflow-hidden border border-gray-700/20 shadow-lg backdrop-blur-sm h-auto hover:bg-white/20">
                <span className="font-semibold text-white text-[17.5px] tracking-[0] leading-5 whitespace-nowrap font-poppins">
                  ⭐ 4.9/5 Rating
                </span>
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
