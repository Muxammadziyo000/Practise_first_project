import React from 'react'
import tick from './img/Vector.png'
import './services.css'
function Services() {
    return (
        <div className='services_page'>
            <div className="services_page_wrapper container">
                <div className="services_content">
                    <h5>PLANS</h5>
                    <h1>Our Services</h1>
                    <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.</p>
                </div>
                <div className="services_wrapper">
                    <div className="services">
                        <h5>Basic</h5>
                        <h3>$100 <span>/month</span></h3>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
                        <div className="tick">
                            <p><img src={tick} alt="" />Lorem ipsum dolor sit</p>
                            <p><img src={tick} alt="" />Lorem ipsum dolor sit</p>
                            <p><img src={tick} alt="" />Lorem ipsum dolor sit</p>
                            <p><img src={tick} alt="" />Lorem ipsum dolor sit</p>
                            <p><img src={tick} alt="" />Lorem ipsum dolor sit</p>
                        </div>
                        <button>Learn more</button>
                    </div>
                    <div className="services">
                        <h5>Plus</h5>
                        <h3>$250 <span>/month</span></h3>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
                        <div className="tick">
                            <p><img src={tick} alt="" />Lorem ipsum dolor sit</p>
                            <p><img src={tick} alt="" />Lorem ipsum dolor sit</p>
                            <p><img src={tick} alt="" />Lorem ipsum dolor sit</p>
                            <p><img src={tick} alt="" />Lorem ipsum dolor sit</p>
                            <p><img src={tick} alt="" />Lorem ipsum dolor sit</p>
                        </div>
                        <button>Learn more</button>
                    </div>
                    <div className="services">
                        <h5>Pro</h5>
                        <h3>$400<span>/month</span></h3>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
                        <div className="tick">
                            <p><img src={tick} alt="" />Lorem ipsum dolor sit</p>
                            <p><img src={tick} alt="" />Lorem ipsum dolor sit</p>
                            <p><img src={tick} alt="" />Lorem ipsum dolor sit</p>
                            <p><img src={tick} alt="" />Lorem ipsum dolor sit</p>
                            <p><img src={tick} alt="" />Lorem ipsum dolor sit</p>
                        </div>
                        <button>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services