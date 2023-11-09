import React from "react";
import ButtonWrapper from "./button.ts";

function Button({
  children,
  icon,
  className,
  onClick
}: {
  children?: React.ReactNode;
  icon?: string;
  className?: string | undefined;
  onClick?:() => void;
}) {
  return (
    <ButtonWrapper className={`common-flex ${className}`} onClick={onClick!}>
      {icon && <span className="material-symbols-outlined"> {icon} </span>}
      {children !== "" ? children : ""}
    </ButtonWrapper>
  );
}

export default Button;
