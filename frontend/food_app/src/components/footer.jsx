import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <div className='footer-container'>
        <p className='footer-text'>© {new Date().getFullYear()} Abhishek Kumar</p>
    </div>
  )
}
