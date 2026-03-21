import Footer from './Footer';

const Contact = () => {
    return (
        <section className='min-h-screen w-full bg-background flex flex-col items-center justify-center'>

            <div className='w-full flex flex-col md:flex-row md:p-10'>
                <div className='h-full w-full max-w-3xl p-6'>
                    <h1 className='text-3xl font-bold text-center text-[#F1E99D] p-2' >Contact Information</h1>

                    {/* information div */}
                    <div className='w-full flex flex-col items-center text-[#F1E99D] gap-5 justify-center gap-10'>
                        <p>Ashok Yadav is a growing clothing brand. It is a one-stop destination for budget-friendly and fine-quality clothes. Our ultimate goal is to make the highest-quality clothes possible and to sell them to you at the most competitive and best prices possible.</p>
                        <p>We try our best to provide you with maximum information about products with the help of high-resolution pictures, different size charts, their composition, etc.</p>
                        <p>We will be coming with lots of varieties and designs really soon, and we will be more than happy if you suggest ideas and send them to:</p>
                    </div>

                    {/* contact details */}
                    <div className='w-full bg-[#0E1B24] text-[#F1E99D] p-3 md:p-10 rounded-lg text-sm md:text-lg mt-6' >
                        <h1 className='font-bold' >Whatsapp :- 00007654321</h1>
                        <h1 className='font-bold' >Email :- ashokyadavrtp200@gmail.com</h1>
                    </div>
                </div>

                {/* contact form */}
                <div className='w-full'>
                    <form className='w-full flex flex-col gap-8 mt-5'>
                        <h1 className='text-3xl text-center font-bold text-[#F1E99D]' >Contact Us Form</h1>
                        <input className='w-full bg-white p-5 rounded-lg' placeholder='Name' type="text" />
                        <input className='w-full bg-white p-5 rounded-lg' placeholder='Email' type="email" />
                        <textarea className='w-full bg-white p-8 rounded-lg' ></textarea>
                        <button className='w-full bg-[#0E1B24] py-4 rounded text-[#F1E99D]' >Send Message</button>
                    </form>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Contact;