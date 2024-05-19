import React, { useEffect, useState } from 'react';
import Section from './section/section';

const SubSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('http://localhost:5000/api/getmaincontent');
        const jsonData = await result.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      {data.map(dataItem => (
        <Section key={dataItem._id} data={dataItem} />
      ))}
    </div>
  );
}

export default SubSection;
