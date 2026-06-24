import type React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function Button({children, onClick}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white w-full self-center px-4 py-2 rounded-md border"
    >
      {children}  
    </button>
  );
}