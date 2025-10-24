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
                <h2 className="font-semibold text-white md:text-[48px] text-[36px] text-left tracking-[0] leading-[56px] font-poppins">Ready to Monetize Your</h2>
                <h2 className="font-semibold text-green-400 md:text-[48px] text-[36px] text-left tracking-[0] leading-[56px] font-poppins">Roblox Content?</h2>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 max-w-screen-md w-full">
              <p className="font-semibold text-gray-300 md:text-[23.4px] text-[18px] leading-[39px] text-center font-poppins">
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
                    {
                      index === 0 ? (
                        <div className="text-[19px] rounded-2xl flex items-center justify-center px-[20px]">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3332 17.5V15.8333C13.3332 14.9493 12.982 14.1014 12.3569 13.4763C11.7317 12.8512 10.8839 12.5 9.99984 12.5H4.99984C4.11578 12.5 3.26794 12.8512 2.64281 13.4763C2.01769 14.1014 1.6665 14.9493 1.6665 15.8333V17.5" stroke="#51A2FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.49984 9.16667C9.34079 9.16667 10.8332 7.67428 10.8332 5.83333C10.8332 3.99238 9.34079 2.5 7.49984 2.5C5.65889 2.5 4.1665 3.99238 4.1665 5.83333C4.1665 7.67428 5.65889 9.16667 7.49984 9.16667Z" stroke="#51A2FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.3335 17.4999V15.8333C18.3329 15.0947 18.0871 14.3773 17.6346 13.7935C17.1821 13.2098 16.5486 12.7929 15.8335 12.6083" stroke="#51A2FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.3335 2.60828C14.0505 2.79186 14.686 3.20886 15.1399 3.79353C15.5937 4.37821 15.84 5.0973 15.84 5.83744C15.84 6.57758 15.5937 7.29668 15.1399 7.88135C14.686 8.46603 14.0505 8.88303 13.3335 9.06661" stroke="#51A2FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>

                        </div>
                      ) : index === 1 ? (
                        <div className="text-[19px] rounded-2xl flex items-center justify-center px-[20px]">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 1.66663V18.3333" stroke="#05DF72" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.1667 4.16663H7.91667C7.14312 4.16663 6.40125 4.47392 5.85427 5.0209C5.30729 5.56788 5 6.30974 5 7.08329C5 7.85684 5.30729 8.59871 5.85427 9.14569C6.40125 9.69267 7.14312 9.99996 7.91667 9.99996H12.0833C12.8569 9.99996 13.5987 10.3073 14.1457 10.8542C14.6927 11.4012 15 12.1431 15 12.9166C15 13.6902 14.6927 14.432 14.1457 14.979C13.5987 15.526 12.8569 15.8333 12.0833 15.8333H5" stroke="#05DF72" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>

                        </div>
                      ) : (
                        <div className="text-[19px] rounded-2xl flex items-center justify-center px-[20px]">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.1676 8.33332C18.5482 10.2011 18.2769 12.1428 17.3991 13.8348C16.5213 15.5268 15.09 16.8667 13.3438 17.6311C11.5977 18.3955 9.64227 18.5381 7.80367 18.0353C5.96506 17.5325 4.35441 16.4145 3.24031 14.8678C2.12622 13.3212 1.57602 11.4394 1.68147 9.53615C1.78692 7.63294 2.54165 5.8234 3.81979 4.4093C5.09793 2.9952 6.82223 2.06202 8.70514 1.76537C10.588 1.46872 12.5157 1.82654 14.1667 2.77916" stroke="#94DAA0" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.5 9.16671L10 11.6667L18.3333 3.33337" stroke="#94DAA0" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                      )
                    }
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
