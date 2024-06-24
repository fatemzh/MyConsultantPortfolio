import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className="box box_shodow">
        <div className="title_content d_flex">
            <div className="title">
                <h2>{props.title} </h2>
                <span>{props.year} </span>
            </div> 
        </div>
        <hr />
        <p>{props.desc} </p>
      </div>
    </>
  )
}

export default Card
