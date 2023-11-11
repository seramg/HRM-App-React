import Button from "../Button/Button.tsx";

function TableHead() {
  return (
    <thead>
      <tr>
        <th>
          <Button icon="expand_more" className="table-title">
            Employee Id
          </Button>
        </th>
        <th>
          <Button icon="expand_more" className="table-title">
            Name
          </Button>
        </th>
        <th>
          <Button icon="expand_more" className="table-title">
            Designation
          </Button>
        </th>
        <th>
          <Button icon="expand_more" className="table-title">
            Department
          </Button>
        </th>
        <th>
          <span className="table-title"> Skills </span>
        </th>
        <th>
          <span className="table-title"> Actions </span>
        </th>
      </tr>
    </thead>
  );
}
export default TableHead;