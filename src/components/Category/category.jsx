import React from "react";
import "./category.css"
import SERIES from "../data/movies";
import Card from "../sub-section/card/card";
const Category = ({ title }) => {
    console.log(title);
        
    const filteredSeries = SERIES.find(series => series.title === title);
    const partitions= [];
    for (let i =0;i<filteredSeries.movies.length;i=i+5) {
    partitions.push(filteredSeries.movies.slice(i,i+5));
    }
    console.log(filteredSeries); // Log the filtered series array

    return (
        <div className="category-main">
            <h1 className="title">{title}</h1>
          {
            partitions.map((partition, index) => {
              return (
                <div className="category-container" >
                  {partition.map((movie, index) => {
                    return <Card info={movie} key={movie.id} />;
                  })}
                </div>
              );
            })
          }
        </div>
    );
}

export default Category;
