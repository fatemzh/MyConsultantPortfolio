import React from 'react'
import Card from './Card'   
import ResumeApi from './ResumeApi'

const Resume = () => {
  return (
    <>
      <section className='Resume' id='resume'>
        <div className="container top">
            <div className="heading text-center">
                <h4>7+ YEARS OF EXPERIENCE</h4>
                <h1>My Resume</h1>
            </div>

            <div className="content-section mtop d_flex">
                <div className="left">
                    <div className="heading">
                        <h4>2007-2010</h4>
                        <h1>Education Quality</h1>
                    </div>

                    <div className="content">
                        {ResumeApi.map((value, id) => {
                            if(value.category === "education")
                            {
                                return <Card key={id} title={value.title} year={value.year} rate={value.rate} desc={value.desc} />
                            }
                        })

                        }
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Resume
