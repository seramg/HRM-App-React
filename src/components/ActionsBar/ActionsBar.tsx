import React from "react";
import ActionsWrapper from "./actionsBar";
import Search from "./../Search/Search.tsx";

function ActionsBar() {
  return (
    <ActionsWrapper className="common-flex">
      <Search />
    </ActionsWrapper>
  );
}
export default ActionsBar;
