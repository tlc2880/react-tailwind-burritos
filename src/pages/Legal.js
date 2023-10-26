import React from 'react'
import { Link } from 'react-router-dom'

function Legal() {
  return (
    <footer id="footer" class="bg-teal-700 text-white text-xl absolute bottom-0 w-full items-center" >
      <div class="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
        <address>
          <h2>Great Burritos, Inc.</h2>
          555 Taco Way<br/>
          Milwaukee, Wisconsin 12345-5555<br/>
          Email: <a href="mailto:inquiries@greatburritos.com">Inquires@greatburritos.com</a><br/>
          Phone: <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <nav class="hidden md:flex flex-col gap-2" aria-label="footer">
          <Link to='/'>Home</Link>
          <Link to='/ourburritos'>Our Burritos</Link>
          <Link to='/reviews'>Reviews</Link>
          <Link to='/contact'>Contact Us</Link>
        </nav>
        <div class="flex flex-col sm:gap-2">
          <p class="text-right">Copyright &copy; <span id="year">2023</span></p>
          <p class="text-right">All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Legal
