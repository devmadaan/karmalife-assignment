import React, { useState, useEffect } from 'react';

const IFSCTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://ifsc.razorpay.com/search?limit=100&offset=0&state=IN-HR'
        );
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>IFSC</th>
              <th>Bank</th>
              <th>Branch</th>
              <th>City</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.IFSC}</td>
                <td>{item.BANK}</td>
                <td>{item.BRANCH}</td>
                <td>{item.CITY}</td>
                <td>{item.STATE}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default IFSCTable;












