import TableHeadButton from './TableHeadButton.tsx';
import { TableHeadWrapper } from "./tableHead.ts";

function TableHead() {

  return (
    <TableHeadWrapper>
      <tr>
        <th>
          <TableHeadButton
            icon="expand_more"
            className="table-title"
          >
            Employee Id
          </TableHeadButton>
        </th>
        <th>
          <TableHeadButton
            icon="expand_more"
            className="table-title"
          >
            Name
          </TableHeadButton>
        </th>
        <th>
          <TableHeadButton
            icon="expand_more"
            className="table-title"
          >
            Designation
          </TableHeadButton>
        </th>
        <th>
          <TableHeadButton
            icon="expand_more"
            className="table-title"
          >
            Department
          </TableHeadButton>
        </th>
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
