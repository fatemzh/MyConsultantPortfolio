import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className="box btn_shadow">
              <img src={props.image} alt="" />
              <h2>{props.title}</h2>
              <p>{props.desc}</p>
                <i className="fas fa-arrow-right"></i>
            </div>
    </>
  )
}

export default Card
