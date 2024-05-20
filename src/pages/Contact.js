import React from 'react';
import PizzaLeft from '../assets/pizzaLeft.jpg'

import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{ backgroundImage: `url(${PizzaLeft})`}}></div>
      <div className='rightSide'>
        <h1>CONTACT US</h1>
        <form id='contactForm' method='POST'>
          <label htmlFor='name'>Full Name</label>
          <input name='name' placeholder='Enter full name...' type='text'/>
          <label htmlFor='email'>example@gmail.com</label>
          <input email='email' placeholder='Enter email...' type='email'/>
          <label htmlFor='message'>Message</label>
          <textarea
          rows='6'
            message='message'
            placeholder='Enter message...'
            type='Text'
            required
          ></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact