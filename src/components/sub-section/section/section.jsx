import React from 'react'
import Card from '../card/card'
import "./section.css"
const Section = (props) => {
  // console.log(props)
  const { id, title, movies } = props.series;
  const linkurl = `category/${title}`;
  return (
    <div className='flex flex-col'>
      
      <a href={linkurl} >
  <h1 className='category-name'>{title}</h1>
</a>

      <div className='card-container'>
        {movies.filter((oneSeries, index) => index < 5).map(oneSeries => <Card key={oneSeries.id} info={oneSeries} />)}
      </div>
    </div>
  )
}

export default Section
