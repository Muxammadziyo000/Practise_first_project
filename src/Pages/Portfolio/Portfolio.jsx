import React from 'react'
import Img1 from './img/Group.png'
import Img2 from './img/Group 40.png'
import Img3 from './img/Group 42.png'
import Img4 from './img/4.png'
import Img5 from './img/5.png'
import Img6 from './img/Frame 43.png'
import Img7 from './img/dscdsc 1.png'
import Img8 from './img/5175975 1.png'
import './portfolio.css'

function Portfolio() {
    return (
        <div className='portfolio'>
            <section className='projects_section'>
                <div className="project_wrapper container">
                    <div className="project_content">
                        <h5>WORKS</h5>
                        <h1>Portfolio</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur <br />adipisicing elit.</p>
                    </div>
                    <div className="projects">
                        <img src={Img1} alt="" />
                        <img src={Img2} alt="" />
                        <img src={Img3} alt="" />
                        <img src={Img4} alt="" />
                        <img src={Img5} alt="" />
                        <img src={Img6} alt="" />
                        <img src={Img7} alt="" />
                        <img src={Img8} alt="" />
                    </div>
                    <button >Learn more</button>
                </div>
            </section>
        </div>
    )
}

export default Portfolio