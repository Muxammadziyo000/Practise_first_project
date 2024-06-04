import React from 'react'
import facebook from './img/facebook.svg'
import inst from './img/inst.svg'
import twitter from './img/twitter.svg'
import pinter from './img/pinterest.svg'
import tiktok from './img/tiktiok.svg'
import whatsapp from './img/watsap.svg'
import youtube from './img/youtube.svg'

function Footer() {
    return (
        <div className='footer lightGreen'>
            <div className="footer_wrapper container">
                <div className="icon_wrapper">
                    <a className="icon_items"><img src={facebook} alt="" /></a>
                    <a className="icon_item"><img src={inst} alt="" /></a>
                    <a className="icon_item"><img src={twitter} alt="" /></a>
                    <a className="icon_item"><img src={pinter} alt="" /></a>
                    <a className="icon_item"><img src={tiktok} alt="" /></a>
                    <a className="icon_item"><img src={whatsapp} alt="" /></a>
                    <a className="icon_item"><img src={youtube} alt="" /></a>
                </div>
                <p>© Start, 2022. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer