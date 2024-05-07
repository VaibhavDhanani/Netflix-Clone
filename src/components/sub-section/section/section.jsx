import React from 'react'
import Card from '../card/card'
const Section = (props) => {
  // console.log(props)
  const { id, title, movies } = props.series;
  return (
    <div className='flex flex-col'>
      <h1 className='text-white mt-4'>{title}</h1>
      <div className='flex'>
        {movies.filter((oneSeries, index) => index < 4).map(oneSeries => <Card key={oneSeries.id} info={oneSeries} />)}
      </div>
    </div>
  )
}

export default Section
