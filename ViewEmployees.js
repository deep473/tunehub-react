import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewEmployees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Using Axios to fetch the employee data
    axios.get('http://localhost:8080/fetchAll')
      .then(response => {
        // Response data is accessed via `response.data`
        setEmployees(response.data);
      })
      .catch(error => console.error('There was an error!', error));
  }, []);

  return (
    <table border='1'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.department}</td>
            <td>{employee.salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ViewEmployees;
