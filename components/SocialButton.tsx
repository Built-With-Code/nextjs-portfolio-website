import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  bgColor?: string | undefined;
}

const SocialButton: React.FC<Props> = ({ children, bgColor = "black" }) => {
  let bgHoverColorClass;

  switch (bgColor) {
    case "dribbble":
      bgHoverColorClass = "hover:bg-dribbble";
      break;
    case "instagram":
      bgHoverColorClass = "hover:bg-instagram";
      break;
    case "twitter":
      bgHoverColorClass = "hover:bg-twitter";
      break;
    case "linkedin":
      bgHoverColorClass = "hover:bg-linkedin";
      break;
    default:
      bgHoverColorClass = "hover:bg-black";
      break;
  }

  return (
    <button
      className={`group h-12 w-12 bg-white ${bgHoverColorClass} rounded-full transition-colors duration-200 ease-in-out flex justify-center items-center`}
    >
      <div className="fill-black group-hover:fill-white transition-colors duration-200 ease-in-out">
        {children}
      </div>
    </button>
  );
};

export default SocialButton;
