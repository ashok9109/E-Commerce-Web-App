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
                            <h1 className='opacity-50' >HELP</h1>
                            <h1>Payments</h1>
                            <h1>Shipping</h1>
                            <h1>Cancellation & Return</h1>
                            <h1>FAQ</h1>
                        </div>
                        <div className='flex flex-col' >
                            <h1 className='opacity-50' >CONSUMER POLICY</h1>
                            <h1>Cancellation & Return</h1>
                            <h1>Terms Of Use</h1>
                            <h1>Scurity</h1>
                            <h1>Privacy</h1>
                            <h1>Sitamap</h1>
                            <h1>ERP Compaliance</h1>
                        </div>
                    </div>
                    <div className='h1-60 w-110 flex flex-col items-center justify-center bg-gray-300 text-black' >
                        <h1 className='opacity-50 mb-4' >NAME & EMAIL</h1>
                        <h1>-Ashok Yadav-</h1>
                        <h1>ashokyadavrtp200@gmail.com</h1>
                        <div className='flex text-2xl mt-4'>
                            <h1><i className="ri-instagram-line"></i></h1>
                            <h1><i className="ri-facebook-box-fill"></i></h1>
                            <h1><i className="ri-linkedin-box-fill"></i></h1>
                            <h1></h1>
                        </div>
                    </div>
                </div>
                <div className='h1-23 w-full border-t-1 text-white ' >
                    <div className='h1-full w-full flex items-center justify-center gap-10' >
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
