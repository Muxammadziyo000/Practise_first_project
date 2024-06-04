import React from 'react'
import './contact.css'
function Contact() {
    return (
        <div className='contact'>
            <div className="contact_wrapper container">
                <h1>Contact Us</h1>
                <p>Lorem ipsum, dolor sit amet consectetur <br />adipisicing elit.</p>
                <form className='inputes_wrapper'>
                    <div className="left_side">
                        <p>Name</p>
                        <input type="text" />
                        <p>Email</p>
                        <input type="email" name="" id="" />
                        <p>Message</p>
                        <input type="text" />
                        <button>Submit</button>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24181.338889658957!2d72.406396!3d40.747344399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bceda26cac2df1%3A0xadb31390fea21f6a!2z0JDQutCy0LDQv9Cw0YDQug!5e0!3m2!1sru!2s!4v1717480535615!5m2!1sru!2s" width="575" height="360" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='map'></iframe>
                </form>

            </div>
        </div>
    )
}

export default Contact