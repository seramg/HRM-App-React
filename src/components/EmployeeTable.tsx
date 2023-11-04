import  { useEffect, useState } from "react";
function EmployeeTable() {
  const [data, setData] = useState([]);
  const getData=()=>{
      fetch('../../data.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setData(myJson)
        });
    }
    useEffect(()=>{
      getData()
    },[])
  
  return (
    <div>
      {data && data.length > 0 && data.map((item) => <p>{item}</p>)}
    </div>
  );
}
export default EmployeeTable;
