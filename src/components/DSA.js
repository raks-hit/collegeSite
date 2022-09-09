import React from 'react'
import '../css/DSA.css';
import { Link } from 'react-router-dom';
export default function DSA() {
  return (
    <div>
         <Link to="/" id="backto">Back to Home</Link>
     
     <p class="pl">Data Structures And Algorithm</p>
     <p>Resources</p>
     <div class="dsasheet">
         <p>DSA Sheets-</p>
         <Link to="/">Love Babbar DSA sheet</Link>
         <Link to="/">Aman Dhattarwal DSA sheet</Link>
         <Link to="/" >Fraz DSA sheet</Link>
     </div>
    </div>
  )
}
