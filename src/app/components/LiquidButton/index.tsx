import React from "react";

interface LiquidButtonProps {
  text: string;
  textColor: string;
  textColor2: string;
  liquidColor: string;
  baseColor: string;
  exerciseId: number;
  onClick?: (id:number) => void; // Optional click handler
  customWidth?: string | number; // Optional prop for custom width
  isSelected?: boolean; // Optional prop to indicate if the button is selected
  selectedTextColor?: string; // Optional prop for selected text color
  selectedLiquidColor?: string; // Optional prop for selected liquid color
}

const LiquidButton = ({
  text,
  textColor,
  textColor2,
  liquidColor,
  baseColor,
  exerciseId,
  onClick,
  customWidth,
  isSelected,
  selectedTextColor = textColor2, // Default to textColor2 if not provided
  selectedLiquidColor = liquidColor, // Default to liquidColor if not provided
}: LiquidButtonProps) => {
  return (
    <div>
      {isSelected ?
      <button
      onClick={() => onClick && onClick(exerciseId)}
      type="button"
      className="relative overflow-hidden px-6 py-3 rounded-md border border-current group"
      style={{
        color: selectedTextColor,
        backgroundColor: selectedLiquidColor,
        width: customWidth || "260px"
      }}
    >
<span
        className="relative z-10"
      >
        {text}
      </span>

    </button>
      
      : 
       <button
      onClick={() => onClick && onClick(exerciseId)}
      type="button"
      className="relative overflow-hidden px-6 py-3 rounded-md border border-current group"
      style={{
        color: textColor,
        backgroundColor: baseColor,
        width: customWidth || "260px"
      }}
    >
      {/* Liquid Fill Layer */}
      <span
        className="absolute left-0 top-0 h-full w-0 group-hover:w-full transition-all duration-100 ease-in-out"
        style={{
          backgroundColor: liquidColor,
          opacity: 0.3,
          zIndex: 0,
        }}
      ></span>

      {/* Button Text */}
      <span
        className="relative z-10 transition-colors duration-100 ease-in-out group-hover:text-[var(--hover-text-color)]"
        style={
          {
            "--hover-text-color": textColor2,
          } as React.CSSProperties & Record<string, string>
        }
      >
        {text}
      </span>
    </button>
      }
    </div>
   
  );
};

export default LiquidButton;
