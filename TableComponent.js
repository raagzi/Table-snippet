import React, { useEffect, useState } from 'react';

const TableComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the database or API endpoint
    // Update the 'data' state with the fetched values
    // Example:
    fetch('/api/data') // Replace '/api/data' with your API endpoint
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
