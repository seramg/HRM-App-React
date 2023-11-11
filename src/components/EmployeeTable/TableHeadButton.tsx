import { useContext, useState } from "react";
import { TableProps } from "../../core/interfaces/interface.ts";
import DataContext from "../../core/store/DataContext.tsx";
import { findSortCriteria, sortData } from "../../utils/helper.ts";
import ButtonWrapper from "../Button/button.ts";
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
  const [sort, setSort] = useState(true);
  const [iconVisible, setIconVisible] = useState(false);

  const { employees, tableProps, addTableProps } = useContext(DataContext);
  const sortIcon = sort ? "rotate" : "";
  let currentSortCriteria = findSortCriteria(children);

  function sortBtnClickHandler() {
    setSort(() => !sort);
    setIconVisible(true);
    const updatedTableProps: TableProps = {
      ...tableProps,
      sort: {
        sortTerm: currentSortCriteria.toString(),
        sortVal: sort,
      },
    };
    addTableProps(updatedTableProps);
    sortData(employees, tableProps.sort);
  }

  const sortBtnBlurHandler = () => {
    setSort(() => true);
    setIconVisible(false);
  };
  return (
    <ButtonWrapper
      className={`common-flex ${className}`}
      onClick={sortBtnClickHandler}
      onBlur={sortBtnBlurHandler}
    >
      <TableHeadIconWrapper
        visible={iconVisible}
        className={`material-symbols-outlined ${sortIcon}`}
      >
        {icon}
      </TableHeadIconWrapper>
      {children}
    </ButtonWrapper>
  );
}
export default TableHeadButton;
