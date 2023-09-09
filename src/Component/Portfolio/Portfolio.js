import React from 'react'
import Card from '../Features/Card'
import Portfolio_data from './Portfolio_data'
import "./portfolio.css"

const Portfolio = () => {
  return (
    <>
     <section className='portfolio top' id='portfolio'>
        <div className="container">
            <div className="heading text-center">
                <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
                <h1>My portfolio</h1>
            </div>

            <div className="content grid">
                {
                    Portfolio_data.map((value, index) => {
                        return <Card key={index} image={value.image} category={value.category} totalLike={value.image} title={value.title} />
                    })
                }
            </div>
        </div>
     </section> 
    </>
  )
}

export default Portfolio
