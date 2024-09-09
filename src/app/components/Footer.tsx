"use client"
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="footer w-full h-auto px-16">
        <nav className='text-center flex flex-col justify-center items-center border-2 border-yellow-100 p-3'>
            <div className="footer-links flex justify-center gap-4  w-full py-4 uppercase text-sm">
                <Link href="/">Home</Link>
                <Link href="/assignments">Assignments</Link>
                <Link href="/resources">Resources</Link>
            </div>
            <div className="footer-contact flex justify-center gap-4 w-full py-4 text-slate-200">
                <p><a href="mailto:your.email@example.com">gmyradov@paedu.org</a></p>
                <p>(123) 456-7890</p>
                <p>14120 Newbrook Dr., Chantilly, VA</p>
            </div>
            <div className="footer-legal flex justify-center w-full py-4">
                <p className='text-sm text-slate-200'>© 2024 CS Pinnacle. All rights reserved.</p>
                {/* <a href="/privacy-policy">Privacy Policy</a> */}
                {/* <a href="/terms-of-service">Terms of Service</a> */}
            </div>
        </nav>
        
        <button onClick={() => window.scrollTo(0, 0)} className="back-to-top fixed bottom-10 right-10">
            Back to Top
        </button>
    </footer>
  )
}

export default Footer