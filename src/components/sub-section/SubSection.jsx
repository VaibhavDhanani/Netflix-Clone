import React, { useEffect, useState } from 'react';
import Section from './section/section';

const SubSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const filterByPlan = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user || !user.plan) {
          throw new Error("User plan not found in localStorage");
        }

        const params = new URLSearchParams({ plan: user.plan });
        const response = await fetch(`http://localhost:5000/api/getcontentbyplan?${params}`);
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    filterByPlan();
  }, []);

  // console.log(data);
  
  return (
    <div>
      {data.map(dataItem => (
        <Section key={dataItem._id} data={dataItem} />
      ))}
    </div>
  );
}

export default SubSection;
