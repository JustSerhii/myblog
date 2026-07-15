import type React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string; 
  type?: "button" | "submit" | "reset"; 
}

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        w-full self-center px-4 py-2 rounded-md font-medium
        bg-white dark:bg-neutral-800 
        text-gray-900 dark:text-gray-100 
        border-2 border-gray-900 dark:border-gray-100 
        shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] 
        transition-all duration-200
        hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none
        active:translate-x-[2px] active:translate-y-[2px]
        focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900
        ${className}
      `}
    >
      {children}
    </button>
  );
}
