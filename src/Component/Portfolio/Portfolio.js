import React from "react"
import "./portfolio.css"
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"

const Portfolio = () => {
  return (
    <>
     <section className='Portfolio top' id='portfolio'>
        <div className="container">
            <div className="heading text-center">
                <h1>My portfolio</h1>
            </div>

            <div className="content grid">
                {
                    Portfolio_data.map((value, index) => {
                        return <Card key={index} image={value.image} category={value.category} title={value.title} />
                    })
                }
            </div>
        </div>
     </section> 
    </>
  )
}

export default Portfolio
