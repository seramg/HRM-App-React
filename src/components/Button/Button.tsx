import React, { useState } from "react";
import ButtonWrapper from "./button.ts";

function Button({
  children,
  icon,
  className,
}: {
  children: React.ReactNode;
  icon: string;
  className?: string | undefined;
}) {
  return (
    <ButtonWrapper className={`common-flex ${className}`}>
      <span className="material-symbols-outlined"> {icon} </span>
      {children !== "" ? children : ""}
    </ButtonWrapper>
  );
}

export default Button;
