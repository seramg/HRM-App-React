import TableHeadButton from "./TableHeadButton.tsx";
import { TableHeadWrapper } from "./tableHead.ts";

function TableHead() {
  return (
    <TableHeadWrapper>
      <tr>
        <TableHeadButton icon="expand_more" className="table-title">
          Employee Id
        </TableHeadButton>
        <TableHeadButton icon="expand_more" className="table-title">
          Name
        </TableHeadButton>
        <TableHeadButton icon="expand_more" className="table-title">
          Designation
        </TableHeadButton>
        <TableHeadButton icon="expand_more" className="table-title">
          Department
        </TableHeadButton>
        <th>
          <span className="table-title"> Skills </span>
        </th>
        <th>
          <span className="table-title"> Actions </span>
        </th>
      </tr>
    </TableHeadWrapper>
  );
}
export default TableHead;
