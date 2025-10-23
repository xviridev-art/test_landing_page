
import React from "react";

const footerLinks = [{ text: "Terms of Service" }, { text: "Privacy Policy" }];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-transparent border-t border-[#fffefe1a]">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center justify-center">
          <p className="[font-family:'Poppins',Helvetica] font-normal text-[#fffefeb2] text-[12.7px] text-center tracking-[0] leading-5 whitespace-nowrap">
            © 2025 RoCart Affiliates. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          {footerLinks.map((link, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <span className="[font-family:'Poppins',Helvetica] font-normal text-[#fffefe4c] text-sm text-center leading-5 tracking-[0]">
                  •
                </span>
              )}
              <a
                href="#"
                className="[font-family:'Poppins',Helvetica] font-normal text-[#fffefeb2] text-[15.1px] text-center tracking-[0] leading-5 whitespace-nowrap hover:text-[#fffefe] transition-colors"
              >
                {link.text}
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
};
