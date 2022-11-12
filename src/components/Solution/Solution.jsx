import React, { useState } from 'react'
import "./solution.css"
import { solutions } from '../../constants/index'

import figure from '../../assets/images/figure2.svg'
import figureLine from '../../assets/images/hexagon_line.svg'
const Solution = () => {
    const [active, setActive] = useState({
        id: "solution-1",
    });
    return (
        <section id='solutions'>
            <div className="container">
                <div className="solutions_content d-flex justify-content-center align-items-center flex-wrap">
                    <div className="figures position-relative">
                        {solutions.map((item, index) => (

                            <div
                                className={`figure  ${active.id === item.id ? 'active' : ''} 
                                ${index === 0 ? 'figure-topLeft' : ''}
                                ${index === 1 ? 'figure-topRight' : ''}
                                ${index === 2 ? 'figure-bottomLeft' : ''}
                                ${index === 3 ? 'figure-bottomRight' : ''}
                                `
                                }
                                key={item.id}
                                onClick={() => {
                                    setActive({ ...active, id: item.id, title: item.title, content: item.content })
                                }}>

                                <img className='figure_line' src={figureLine} alt={item.title} />
                                <img className='frame_img' src={figure} alt={item.title} /> 
                                <img className='figure_icon' src={item.icon} alt={item.title} />
                            </div>


                        ))}
                    </div>

                    <div className='figure_content col-lg-6 col-md-12 col-sm-12'>
                        {solutions.map(item => (
                            <div key={item.id}>
                                {active.id === item.id && (
                                    <>
                                        <div className="home_solutions_title">{item.title}</div>
                                        <div className="home_solutions_description">{item.content}</div>
                                        <a className='custom_button' href="/">For More</a>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Solution