interface Skill{
    id: string;
    name: string
}
interface Employee {
  address: string;
  date_of_birth: string;
  date_of_joining: string;
  department: string;
  designation: string;
  emp_name: string;
  employment_mode: string;
  gender: string;
  id: string;
  phone: string;
  skills: Skill[];
}
export default Employee