import React, { useState } from "react";
import ButtonWrapper from "./button.ts";

function Button({ name, icon }: { name: string; icon: string;}) {
  return (
    <ButtonWrapper className="common-flex add-btn">
      <span className="material-symbols-outlined"> {icon} </span>
      {name}
    </ButtonWrapper>
  );
}

export default Button;
