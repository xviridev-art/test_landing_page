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
                  {
                    index === 0 ? (
                      <div className="w-[88px] h-[88px] text-[19px] rounded-2xl flex items-center justify-center px-[20px] bg-green-500">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M29.3332 9.33334L17.9998 20.6667L11.3332 14L2.6665 22.6667" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M21.3335 9.33334H29.3335V17.3333" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                    ) : index === 1 ? (
                      <div className="w-[88px] h-[88px] text-[19px] rounded-2xl flex items-center justify-center px-[20px] bg-blue-500">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 2.66666V29.3333" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M22.6667 6.66666H12.6667C11.429 6.66666 10.242 7.15832 9.36684 8.03349C8.49167 8.90866 8 10.0956 8 11.3333C8 12.571 8.49167 13.758 9.36684 14.6332C10.242 15.5083 11.429 16 12.6667 16H19.3333C20.571 16 21.758 16.4917 22.6332 17.3668C23.5083 18.242 24 19.429 24 20.6667C24 21.9043 23.5083 23.0913 22.6332 23.9665C21.758 24.8417 20.571 25.3333 19.3333 25.3333H8" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                      </div>
                    ) : index == 2 ? (
                      <div className="w-[88px] h-[88px] text-[19px] rounded-2xl flex items-center justify-center px-[20px] bg-yellow-500">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.6362 17.1867L22.6562 28.5547C22.6788 28.6885 22.66 28.8261 22.6023 28.949C22.5446 29.0719 22.4508 29.1743 22.3334 29.2424C22.216 29.3105 22.0806 29.3412 21.9452 29.3303C21.8099 29.3194 21.6811 29.2674 21.5762 29.1813L16.8028 25.5987C16.5724 25.4265 16.2925 25.3335 16.0048 25.3335C15.7172 25.3335 15.4373 25.4265 15.2068 25.5987L10.4255 29.18C10.3206 29.2659 10.192 29.3178 10.0568 29.3287C9.92166 29.3397 9.78639 29.3091 9.66904 29.2412C9.5517 29.1732 9.45786 29.0711 9.40005 28.9485C9.34224 28.8258 9.32321 28.6884 9.34549 28.5547L11.3642 17.1867" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M16 18.6667C20.4183 18.6667 24 15.0849 24 10.6667C24 6.24838 20.4183 2.66666 16 2.66666C11.5817 2.66666 8 6.24838 8 10.6667C8 15.0849 11.5817 18.6667 16 18.6667Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-[88px] h-[88px] text-[19px] rounded-2xl flex items-center justify-center px-[20px] bg-red-500">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.3334 28V25.3333C21.3334 23.9188 20.7715 22.5623 19.7713 21.5621C18.7711 20.5619 17.4146 20 16.0001 20H8.00008C6.58559 20 5.22904 20.5619 4.22885 21.5621C3.22865 22.5623 2.66675 23.9188 2.66675 25.3333V28" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M12.0001 14.6667C14.9456 14.6667 17.3334 12.2789 17.3334 9.33333C17.3334 6.38781 14.9456 4 12.0001 4C9.05456 4 6.66675 6.38781 6.66675 9.33333C6.66675 12.2789 9.05456 14.6667 12.0001 14.6667Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M29.3333 28V25.3333C29.3324 24.1516 28.9391 23.0037 28.2151 22.0698C27.4911 21.1358 26.4774 20.4688 25.3333 20.1733" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M21.3333 4.17334C22.4805 4.46707 23.4973 5.13427 24.2234 6.06975C24.9496 7.00523 25.3437 8.15578 25.3437 9.34001C25.3437 10.5242 24.9496 11.6748 24.2234 12.6103C23.4973 13.5457 22.4805 14.2129 21.3333 14.5067" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                    )
                  }

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
