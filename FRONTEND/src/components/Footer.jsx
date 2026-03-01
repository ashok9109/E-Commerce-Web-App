import logo from '../images/upstare-logo.png'

const Footer = () => {
    return (
        <>
            <footer className='w-full md:h-100 w-full bg-[#0E1B24] mt-5 p-10 rounded-t-4xl' >
                <div className='md:h-65 w-full flex flex-col md:flex-row items-center justify-evenly gap-10' >
                    <div className='w-full md:h-60 md:w-230 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-25 text-white' >
                        <div className='w-full flex flex-col' >
                            <h1 className='opacity-50' >ABOUT</h1>
                            <h1>Contact Us</h1>
                            <h1>About Us</h1>
                            <h1>Careers</h1>
                            <h1>Press</h1>
                        </div>
                        <div className='w-full flex flex-col' >
                            <h1 className='opacity-50' >HELP</h1>
                            <h1>Payments</h1>
                            <h1>Shipping</h1>
                            <h1>Cancellation & Return</h1>
                            <h1>FAQ</h1>
                        </div>
                        <div className='w-full flex flex-col' >
                            <h1 className='opacity-50' >CONSUMER POLICY</h1>
                            <h1>Cancellation & Return</h1>
                            <h1>Terms Of Use</h1>
                            <h1>Scurity</h1>
                            <h1>Privacy</h1>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='h-15' src={logo} alt="upstare logo" />
                    </div>
                </div>
                <div className='md:h1-23 w-full border-t text-white mt-5 ' >
                    <div className='w-full flex flex-col md:flex-row items-center justify-center gap-10' >
                        <h1>Become a seller</h1>
                        <h1>Advertise</h1>
                        <h1>Gift Cards</h1>
                        <h1>Help Center</h1>
                        <h1>© 2026 Upstare Research. All rights reserved. Powered by Ashok Yadav.</h1>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
