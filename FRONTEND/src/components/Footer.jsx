import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='h-100 w-full bg-black mt-5 p-10 ' >
                <div className='h-65 w-full flex gap-10 ' >
                    <div className='h-60 w-230 flex items-center justify-center gap-25 bg-gray-300 text-black' >
                        <div className='flex flex-col' >
                            <h1 className='opacity-50' >ABOUT</h1>
                            <h1>Contact Us</h1>
                            <h1>About Us</h1>
                            <h1>Careers</h1>
                            <h1>-V-cart Stories</h1>
                            <h1>Press</h1>
                            <h1>Corporate Information</h1>
                        </div>
                        <div className='flex flex-col mb-10' >
                            <h className='opacity-50' >HELP</h>
                            <h>Payments</h>
                            <h>Shipping</h>
                            <h>Cancellation & Return</h>
                            <h>FAQ</h>
                        </div>
                        <div className='flex flex-col' >
                            <h className='opacity-50' >CONSUMER POLICY</h>
                            <h>Cancellation & Return</h>
                            <h>Terms Of Use</h>
                            <h>Scurity</h>
                            <h>Privacy</h>
                            <h>Sitamap</h>
                            <h>ERP Compaliance</h>
                        </div>
                    </div>
                    <div className='h-60 w-110 flex flex-col items-center justify-center bg-gray-300 text-black' >
                        <h1 className='opacity-50 mb-4' >NAME & EMAIL</h1>
                        <h1>-Ashok Yadav-</h1>
                        <h1>ashokyadavrtp200@gmail.com</h1>
                        <div className='text-2xl mt-4'>
                            <h><i className="ri-instagram-line"></i></h>
                            <h><i className="ri-facebook-box-fill"></i></h>
                            <h><i className="ri-linkedin-box-fill"></i></h>
                            <h></h>
                        </div>
                    </div>
                </div>
                <div className='h-23 w-full border-t-1 text-white ' >
                    <div className='h-full w-full flex items-center justify-center gap-10' >
                        <h1>Become a seller</h1>
                        <h1>Advertise</h1>
                        <h1>Gift Cards</h1>
                        <h1>Help Center</h1>
                        <h1><i className="ri-copyright-line"></i>2021-2025 -V-Cart.com</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
