import { UserPlus, Link, DollarSign, CheckCircle } from "lucide-react";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";

const stepCards = [
  {
    title: "Create Account",
    description: "Sign up in seconds and get instant access to your creator dashboard with full analytics and tracking tools",
    icon: UserPlus,
    bgGradient: "bg-gradient-to-br from-blue-500/10 to-blue-600/10",
    stepNumber: "01",
  },
  {
    title: "Connect Platforms",
    description: "Link your social media accounts to start tracking your reach and engagement metrics",
    icon: Link,
    bgGradient: "bg-gradient-to-br from-gray-500/10 to-gray-600/10",
    stepNumber: "02",
  },
  {
    title: "Start Earning",
    description: "Begin earning from your content with competitive rates and reliable payment processing",
    icon: DollarSign,
    bgGradient: "bg-gradient-to-br from-green-500/10 to-green-600/10",
    stepNumber: "03",
  },
];

interface HowItWorksSectionProps {
  onJoinClick: () => void;
}

export const HowItWorksSection = ({ onJoinClick }: HowItWorksSectionProps): JSX.Element => {
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

            <span className="font-semibold text-green-200 text-[20px] text-center tracking-[0] leading-5 whitespace-nowrap font-poppins">
              Simple 3-Step Process
            </span>
          </Badge>

          <div className="flex flex-col max-w-screen-md w-full items-center">
            <h2 className="font-semibold text-white text-[48px] text-center tracking-[0] leading-[56px] font-poppins">Why Creators</h2>
            <h2 className="font-semibold text-green-400 text-[48px] text-center tracking-[0] leading-[56px] font-poppins">Choose Us</h2>
          </div>

          <div className="flex flex-col max-w-screen-md w-full items-center">
            <h2 className="font-semibold text-gray-300 text-[21.6px] text-center tracking-[0] leading-[39px] font-poppins">
              Start earning from your Roblox content in just three simple steps. Our
              <br />
              streamlined process gets you up and running in minutes.
            </h2>
          </div>
        </header>

        <div className="flex flex-col max-w-6xl w-full items-start gap-20">
          <div className="flex flex-col lg:flex-row items-start justify-center gap-12 w-full relative">
            {stepCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <Card
                  key={index}
                  className={`flex-1 min-w-[280px] lg:w-[352px] border-gray-700/20 ${card.bgGradient}  flex flex-col items-start gap-6 p-[33px] rounded-3xl border border-solid shadow-xl backdrop-blur-md relative`}
                >
                  <CardContent className="p-0 flex flex-col items-start gap-6 w-full">
                    <div className="flex items-center justify-between w-full">

                      {
                        index === 0 ? (
                          <div className="w-[88px] h-[88px]  bg-blue-500 flex items-center justify-center bg-gradient-to-br from-gray-700/20 to-gray-800/20 rounded-2xl">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M21.3332 28V25.3333C21.3332 23.9188 20.7713 22.5623 19.7711 21.5621C18.7709 20.5619 17.4143 20 15.9998 20H7.99984C6.58535 20 5.2288 20.5619 4.2286 21.5621C3.22841 22.5623 2.6665 23.9188 2.6665 25.3333V28" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M11.9998 14.6667C14.9454 14.6667 17.3332 12.2789 17.3332 9.33333C17.3332 6.38781 14.9454 4 11.9998 4C9.05432 4 6.6665 6.38781 6.6665 9.33333C6.6665 12.2789 9.05432 14.6667 11.9998 14.6667Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M25.3335 10.6667V18.6667" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M29.3335 14.6667H21.3335" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                          </div>
                        ) : index === 1 ? (
                          <div className="w-[88px] h-[88px] bg-gray-500 flex items-center justify-center bg-gradient-to-br from-gray-700/20 to-gray-800/20 rounded-2xl">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.3335 17.3333C13.9061 18.0988 14.6366 18.7322 15.4756 19.1906C16.3145 19.6489 17.2422 19.9215 18.1957 19.9898C19.1492 20.0581 20.1063 19.9205 21.002 19.5864C21.8976 19.2523 22.711 18.7294 23.3868 18.0533L27.3868 14.0533C28.6012 12.796 29.2732 11.112 29.258 9.36399C29.2428 7.61601 28.5417 5.94392 27.3056 4.70787C26.0696 3.47182 24.3975 2.77069 22.6495 2.7555C20.9015 2.74031 19.2175 3.41227 17.9602 4.62666L15.6668 6.90666" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M18.6664 14.6666C18.0938 13.9011 17.3633 13.2677 16.5244 12.8094C15.6855 12.351 14.7578 12.0785 13.8042 12.0102C12.8507 11.9419 11.8937 12.0795 10.998 12.4136C10.1023 12.7477 9.28896 13.2705 8.61311 13.9466L4.61311 17.9466C3.39872 19.204 2.72676 20.888 2.74195 22.636C2.75714 24.384 3.45827 26.056 4.69432 27.2921C5.93038 28.5282 7.60246 29.2293 9.35044 29.2445C11.0984 29.2597 12.7824 28.5877 14.0398 27.3733L16.3198 25.0933" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                          </div>
                        )
                          : (
                            <div className="w-[88px] h-[88px] bg-green-500  flex items-center justify-center bg-gradient-to-br from-gray-700/20 to-gray-800/20 rounded-2xl">
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 2.66669V29.3334" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22.6667 6.66669H12.6667C11.429 6.66669 10.242 7.15835 9.36684 8.03352C8.49167 8.90869 8 10.0957 8 11.3334C8 12.571 8.49167 13.758 9.36684 14.6332C10.242 15.5084 11.429 16 12.6667 16H19.3333C20.571 16 21.758 16.4917 22.6332 17.3669C23.5083 18.242 24 19.429 24 20.6667C24 21.9044 23.5083 23.0914 22.6332 23.9665C21.758 24.8417 20.571 25.3334 19.3333 25.3334H8" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>

                            </div>
                          )
                      }
                      <div className="text-[28px] w-[58px] h-[58px] font-bold text-white font-poppins flex justify-center items-center bg-gradient-to-br from-green-400 to-black-500 rounded-full">
                        {card.stepNumber}
                      </div>
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
                  <div className="py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-primary-foreground shadow hover:bg-primary/80 inline-flex flex-col items-start pt-2.5 pb-2 px-[13px] top-[-17px] left-[-43px] absolute bg-white/10 rounded-full border border-solid border-gray-700/30 backdrop-blur-sm h-auto"><span className="font-semibold text-gray-200 text-[13.7px] tracking-[0] leading-4 whitespace-nowrap font-poppins">
                    {
                      index === 0 ? (
                        <div className="text-[19px] flex items-center justify-center px-[20px]">
                          sadsada
                        </div>
                      ) : index === 1 ? (
                        <div className="text-[19px] flex items-center justify-center px-[20px]">
                          asdasdasdasd
                        </div>
                      )
                        : (
                          <div className="text-[19px] flex items-center justify-center px-[20px]">
                            asdasdwadwadawdsda
                          </div>
                        )
                    }
                  </span>
                  </div>
                  <div className="absolute w-[calc(100%_-_2px)] h-[calc(100%_-_2px)] top-px left-px rounded-3xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0" />
                </Card>
              );
            })}
          </div>

          <div className="flex flex-col items-center w-full">
            <Button onClick={onJoinClick} className="gap-3 px-[33px] py-[17px] rounded-2xl border border-green-500 bg-gradient-to-r from-green-900/80 to-green-800/80 inline-flex items-center border-solid backdrop-blur-sm h-auto hover:bg-gradient-to-r hover:from-green-800/90 hover:to-green-700/90 transition-colors">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-green-200 text-[17.5px] leading-6 font-semibold text-center tracking-[0] whitespace-nowrap font-poppins">
                Ready to start earning? Join thousands of creators!
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
