import React, { useState } from "react";
import ButtonWrapper from "./button.ts";

function Button({ name, icon, onClick }: { name: string; icon: string; onClick: ()=>void }) {
  return (
    <ButtonWrapper className="common-flex add-btn" onClick={onClick}>
      <span className="material-symbols-outlined"> {icon} </span>
      {name}
    </ButtonWrapper>
  );
}

export default Button;
