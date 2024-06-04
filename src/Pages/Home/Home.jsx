import React from 'react'
import homeImg2 from './img/Group.png'
import homeImg3 from './img/img3.svg'
import homeImg from './img/Group.svg'
import google from './img/google.png'
import micro from './img/micro.svg'
import airbnb from './img/airbnb.svg'
import facebook from './img/facebook.svg'
import spotify from './img/spot.svg'
import pee1 from './img/peg_1.svg'
import nigga2 from './img/white_nigga.svg'
import milf3 from './img/milf.svg'
import bii4 from './img/biiii.svg'
import './home.css'
function Home() {
    return (
        <div className='home '>
            <section className='intruduction lightGreen'>
                <div className="introduction_wrapper container">
                    <div className="home_content">
                        <h5>W E L C O M E </h5>
                        <h4>Lorem ipsum dolor sit amet consectetur</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                        <button>Explore</button>
                    </div>
                    <img src={homeImg} alt="" />
                </div>
            </section>
            <section className='partners'>
                <div className="partners_wrapper container ">
                    <h5>PARTNERS</h5>
                    <h1>Lorem Ipsum Dolor.</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit.</p>
                    <div className="partners_link_wrapper">
                        <a href="#" className='partners_link'><img src={google} alt="" /></a>
                        <a href="#" className='partners_link'><img src={micro} alt="" /></a>
                        <a href="#" className='partners_link'><img src={airbnb} alt="" /></a>
                        <a href="#" className='partners_link'><img src={facebook} alt="" /></a>
                        <a href="#" className='partners_link'><img src={spotify} alt="" /></a>
                    </div>
                    <button>Learn More</button>
                </div>
            </section>
            <section className='partners_2'>
                <div className="  partners_wrapper_2 container">
                    <img src={homeImg2} alt="" />
                    <div className="partners_content">

                        <h4>Lorem ipsum dolor sit amet consectetur</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                        <button>Learn more</button>
                    </div>

                </div>
                <div className="  partners_wrapper_2 partners_wrapper_2_2 container">

                    <div className="partners_content">

                        <h4>Lorem ipsum dolor sit amet consectetur</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                        <button>Learn more</button>
                    </div>
                    <img src={homeImg3} alt="" />
                </div>
            </section>
            <section className='team'>
                <div className="team_wrapper container">
                    <div className="team_content">
                        <h5>TEAM</h5>
                        <h1>Our Talents</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur <br /> Suscipit nemo hic quos, ab,   </p>
                    </div>
                    <div className="team_members">
                        <div className="member_team">
                            <img src={pee1} alt="" />
                            <h4>Peg Legge</h4>
                            <p>CEO</p>
                        </div>
                        <div className="member_team">
                            <img src={nigga2} alt="" />
                            <h4>Richard Guerra </h4>
                            <p>CTO</p>
                        </div>
                        <div className="member_team">
                            <img src={milf3} alt="" />
                            <h4>Alexandra Milf</h4>
                            <p>Designer</p>
                        </div>
                        <div className="member_team">
                            <img src={bii4} alt="" />
                            <h4>Janet Bray</h4>
                            <p>Developer</p>
                        </div>

                    </div>
                    <button>Learn more</button>

                </div>
            </section>

        </div>
    )
}

export default Home