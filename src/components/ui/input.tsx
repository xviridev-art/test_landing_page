import * as React from "react";
import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-xl border border-[#fffefe33] bg-[#fffefe0d] px-4 py-3 text-sm text-white placeholder:text-[#fffefe66] focus:outline-none focus:ring-2 focus:ring-[#46ff68] focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 [font-family:'Poppins',Helvetica]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
