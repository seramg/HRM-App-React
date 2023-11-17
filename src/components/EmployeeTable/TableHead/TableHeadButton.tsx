import { useContext } from "react";
import {
  SortDirection,
  TableProps,
} from "../../../core/interfaces/interface.ts";
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
  const visible = currentSortCriteria === tableProps.sort.sortTerm;
  let sortIcon = "rotate";
  let newSortProp = SortDirection.NO_SORT;

  if (visible) {
    if (tableProps.sort.sortVal === SortDirection.DESC) {
      newSortProp = SortDirection.ASC;
      sortIcon = "";
    } else if (tableProps.sort.sortVal === SortDirection.ASC) {
      newSortProp = SortDirection.DESC;
    } else if (tableProps.sort.sortVal === SortDirection.NO_SORT) {
      newSortProp = SortDirection.ASC;
      sortIcon = "";
    }
  }

  function sortBtnClickHandler() {
    
    const updatedTableProps: TableProps = {
      ...tableProps,
      sort: {
        sortTerm: currentSortCriteria.toString(),
        sortVal: newSortProp,
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
        $visible={visible}
        className={`material-symbols-outlined ${sortIcon}`}
      >
        {icon}
      </TableHeadIconWrapper>
      {children}
    </ButtonWrapper>
  );
}
export default TableHeadButton;
