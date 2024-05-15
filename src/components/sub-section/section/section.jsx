import React from 'react'
import Card from '../card/card'
import "./section.css"
const Section = (props) => {
  // console.dir(props.data)

  const {title,subContent} = {...props.data};
  const id = props.data._id
  
  const linkurl = `category/${title}`;
  return (
    <div className='flex flex-col'>

      <a href={linkurl} >
        <h1 className='category-name'>{title}</h1>
      </a>

      <div className='card-container'>
        {subContent.filter((oneSeries, index) => index < 5).map(oneSeries => <Card key={oneSeries.id} info={oneSeries} />)}
      </div>
    </div>
    // <div></div>
  )
}

export default Section
