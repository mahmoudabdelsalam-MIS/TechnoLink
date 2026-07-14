import { forwardRef } from "react";
import { Loader2 } from "lucide-react";

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      icon: Icon = null,
      iconPostion = "start",
      fullWidth = false,
      className = "",
      ...props
    },
    ref,
  ) => {
    const baseClasses = `
      inline-flex items-center justify-center 
      font-semibold  
      cursor-pointer
      transition-all duration-200 
      rounded-xl
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
      disabled:cursor-not-allowed disabled:opacity-70
    `;

    const variants = {
      primary:
        "bg-[#2A0808] border border-transparent text-white hover:bg-[#2A0808]/90",
      
      outline:
        "bg-transparent border-2 border-[#F68D20] text-[#F68D20] hover:bg-[#F68D20]/10",

      secondary:
        "bg-white border border-gray-300 text-[#2A0808] hover:bg-gray-50",
      third: "bg-[#D4AF37] text-white hover:bg-[#d9a13f]",
      borderd:" border border-white text-white text-sm font-semibold tracking-wider px-5 py-2.5  group-hover:opacity-100 group-hover:translate-y-0 hover:bg-white hover:text-black",
      ghost:
        "bg-[#F8FAFC] border border-transparent text-[#2A0808] hover:bg-gray-100",
      warning:
        "bg-red-50 border border-transparent text-red-600 hover:bg-red-100/70",
    };

    const sizes = {
      sm: "px-5 py-2.5 text-sm min-h-[42px]",
      md: "px-10 py-3 text-base min-h-[48px]",
      lg: "px-8 py-4 text-lg min-h-[56px]",
    };

    const isIconOnly = Icon && !children;

    return (
      <button
        ref={ref}
        disabled={isLoading || props.disabled}
        className={`
          ${baseClasses}
          ${variants[variant]}
          ${sizes[size]}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
        {...props}
      >
        {isLoading ? (
          <div
            className={`flex items-center gap-2 ${iconPostion === "end" ? "flex-row-reverse" : ""}`}
          >
            {children}
            <div
              className={`animate-spin rounded-full h-4 w-4 border-b-2 ${
                variant === "primary"
                  ? "border-white"
                  : variant === "outline"
                  ? "border-[#F68D20]"
                  : variant === "warning"
                  ? "border-red-600"
                  : "border-[#2A0808]"
              }`}
            ></div>
          </div>
        ) : isIconOnly ? (
          <Icon className="w-5 h-5" />
        ) : (
          <div
            className={`flex items-center gap-2 ${iconPostion === "end" ? "flex-row-reverse" : ""}`}
          >
            {children}
            {Icon && <Icon className="w-5 h-5" />}
          </div>
        )}
      </button>
    );
  },
);

export default Button;