import { useContext } from "react";
import { TableProps } from "../../../core/interfaces/interface.ts";
import DataContext from "../../../core/store/DataContext.tsx";
import { findSortCriteria } from "../../../utils/helper.ts";
import ButtonWrapper from "../../Button/button.ts";
import { TableHeadIconWrapper } from "./tableHead.ts";

function TableHeadButton({
  children,
  icon,
  className,
}: {
  children?: React.ReactNode;
  icon?: string;
  className?: string | undefined;
}) {
  const { tableProps, addTableProps } = useContext(DataContext);

  let currentSortCriteria = findSortCriteria(children);
  const sortIcon = currentSortCriteria=== tableProps.sort.sortTerm? tableProps.sort.sortVal ? "" : "rotate":"";

  function sortBtnClickHandler() {
    const updatedTableProps: TableProps = {
      ...tableProps,
      sort: {
        sortTerm: currentSortCriteria.toString(),
        sortVal: !tableProps.sort.sortVal,
      },
    };
    addTableProps(updatedTableProps);
  }

  return (
    <ButtonWrapper
      className={`common-flex ${className}`}
      onClick={sortBtnClickHandler}
    >
      <TableHeadIconWrapper
        $visible={true}
        className={`material-symbols-outlined ${sortIcon}`}
      >
        {icon}
      </TableHeadIconWrapper>
      {children}
    </ButtonWrapper>
  );
}
export default TableHeadButton;
