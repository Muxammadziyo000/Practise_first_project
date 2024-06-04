import React from 'react'
import logo from './img/Group 1.svg'
import './companents.css'
import burger from "./img/list.svg"
function Header() {
    return (
        <div className='header lightGreen'>
            <div className="header_wrapper container">
                <nav class="navbar navbar-expand-lg ">
                    <div class="container-fluid">
                        <a class="navbar-brand " href="#"><img src={logo} alt="" />Start</a>
                        <div className="space"></div>
                        <button class="navbar-toggler burger_button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span><img src={burger} alt="" /></span>
                        </button>

                        <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link " aria-current="page" href="/">Home</a>
                                <a class="nav-link" href="/portfolio">Portfolio</a>
                                <a class="nav-link" href="/services">Services</a>
                                <a class="nav-link" href='/contact'>Contact</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header