import ActionsWrapper from "./actionsBar";
import Search from "./../Search/Search.tsx";
import Button from "../Button/Button.tsx";

function ActionsBar() {
  return (
    <ActionsWrapper className="common-flex">
      <Search />
      <Button icon="filter_list" >
        Filters
      </Button>
    </ActionsWrapper>
  );
}
export default ActionsBar;
