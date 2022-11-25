import React, { useState } from 'react'
import "./solution.css"
import { solutions } from '../../constants/index'

import figure from '../../assets/images/figure2.svg'
import figureLine from '../../assets/images/hexagon_line.svg'
import { Link } from 'react-router-dom'

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

                                        <div className="link_wrapper">
                                            <Link to={"/#!"} className='custom_button'>
                                                <span className='d-block'>For More</span>
                                                <div className="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                                        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                                    </svg>
                                                </div>
                                            </Link>

                                        </div>
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