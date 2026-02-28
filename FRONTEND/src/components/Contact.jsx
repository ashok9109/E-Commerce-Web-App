import React from 'react'
import Footer from './Footer';

const Contact = () => {
    return (
        <section className='min-h-screen w-full bg-white flex flex-col items-center justify-center p-5'>

            <div className='h-full w-full max-w-3xl'>
                <h1 className='text-3xl font-bold text-center p-2' >Contact Information</h1>

                {/* information div */}
                <div className='w-full flex flex-col items-center gap-5 justify-center gap-10'>
                    <p>Upstare Research is a growing clothing brand. It is a one-stop destination for budget-friendly and fine-quality clothes. Our ultimate goal is to make the highest-quality clothes possible and to sell them to you at the most competitive and best prices possible.</p>
                    <p>We try our best to provide you with maximum information about products with the help of high-resolution pictures, different size charts, their composition, etc.</p>
                    <p>We will be coming with lots of varieties and designs really soon, and we will be more than happy if you suggest ideas and send them to:</p>
                </div>

                {/* contact details */}
                <div className='w-full bg-[#0E1B24] p-10 rounded-lg text-white mt-2' >
                <h1 className='font-bold' >Whatsapp :-  <span className='text-gray-400'>91-6268226160</span></h1>
                <h1 className='font-bold' >Email :- <span className='text-gray-400'>support@upstareresearch.com</span></h1>
                </div>

                {/* contact form */}
                <form className='w-full flex flex-col gap-8 mt-2'>
                    <h1 className='text-3xl text-center font-bold' >Contact Us Form</h1>
                    <input className='w-full border-1 border-gray-400 p-3 rounded-lg' placeholder='Name' type="text" />
                    <input className='w-full border-1 border-gray-400 p-3 rounded-lg' placeholder='Email' type="email" />
                    <textarea className='w-full border-1 border-gray-400 p-3 rounded-lg' ></textarea>
                    <button className='w-full bg-[#0E1B24] text-white py-2 rounded' >Send Message</button>
                </form>
            </div>
            <Footer/>
        </section>
    )
}

export default Contact;