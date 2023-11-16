import { useContext, useState } from "react";
import { TableProps } from "../../../core/interfaces/interface.ts";
import DataContext from "../../../core/store/DataContext.tsx";
import { findSortCriteria, sortData } from "../../../utils/helper.ts";
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
  const { tableProps, addTableProps, employees,addEmployees } = useContext(DataContext);
  const [sort, setSort] = useState(tableProps.sort.sortVal);

  const sortIcon = sort ? "" : "rotate";
  let currentSortCriteria = findSortCriteria(children);

  function sortBtnClickHandler() {
    const updatedTableProps: TableProps = {
      ...tableProps,
      sort: {
        sortTerm: currentSortCriteria.toString(),
        sortVal: !sort,
      },
    };
    setSort(() => !sort);
    addTableProps(updatedTableProps);

    const sorted = sortData(employees,updatedTableProps.sort)
    addEmployees(sorted)

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
