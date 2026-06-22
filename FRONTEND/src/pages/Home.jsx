import homevideo from '../images/newArrival.mp4'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProductApi } from '../apis/ProductApis';
import { loadproduct } from '../store/reducers/productSlice';
import { useEffect } from 'react';
import ProductTemplate from '../components/ProductTemplate';
import About from './About';
import Contact from '../components/Contact';
import logo1 from '../images/policy1.png'
import logo2 from '../images/policy2.png'
import logo3 from '../images/policy3.png'
import logo4 from '../images/policy3.png'
import image1 from '../images/jk-banner-1.jpeg'
import image2 from '../images/jk-banner-2.jpeg'
import image3 from '../images/jk-banner-3.jpeg'
import Slider from '../components/Slider';


const Home = () => {

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer)

  const fetchAllProducts = async () => {
    const response = await fetchAllProductApi();
    if (response) {
      dispatch(loadproduct(response))
    }
  }

  useEffect(() => {
    fetchAllProducts()
  }, []);

  return (
    <>
      <section className='w-full bg-background relative' >
        <Slider/>

        <section className='flex flex-col items-center justify-center gap-6 text-white'>
          <div className='flex flex-col md:flex-row gap-10' >

            <div className='flex border-2 p-2 md:px-7 md:py-2 gap-5 rounded-lg text-sm' >
              <img class='h-[30px]' src={logo1} alt="" />
              <div className='w-full' >
              <h1 className='text-[#F1E99D]' >FREE DELIVERY</h1>
              <p>For all oders over $120</p>
              </div>
            </div>

            <div className='flex border-2 p-2 md:px-7 md:py-2 gap-5 rounded-lg text-sm' >
              <img class='h-[30px]' src={logo2} alt="" />
              <div className='w-full' >
              <h1 className='text-[#F1E99D]' >SAFE PAYMENT</h1>
              <p>100% Secure Payment</p>
              </div>
            </div>

            <div className='flex border-2 p-2 md:px-7 md:py-2 gap-5 rounded-lg text-sm' >
              <img class='h-[30px]' src={logo3} alt="" />
              <div className='w-full' >
              <h1 className='text-[#F1E99D]' >SHOP WITH CONIFIDENCE</h1>
              <p>If good have problems</p>
              </div>
            </div>

            <div className='flex border-2 p-2 md:px-7 md:py-2 gap-5 rounded-lg text-sm' >
              <img class='h-[30px]' src={logo4} alt="" />
              <div className='w-full' >
              <h1 className='text-[#F1E99D]' >24/7 HELP CENTER</h1>
              <p>Dedicated Center</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-6' >
          <img src={image1} alt="image" />
          <img src={image2} alt="image" />
          <img src={image3} alt="image" />
          </div>
        </section>

        {/* prduct section */}
        <section className='w-full' >
          <div className='w-full flex flex-col items-center justify-center text-sm text-[#F1E99D] md:p-5'>
            <h1 className='md:text-5xl' >WE LOVE TRENDS</h1>
            <div className='flex gap-7 md:text-2xl p-2' >
              <h1>FEATURED PRODUCTs</h1>
              <h1>NEW PRODUCTs</h1>
              <h1>BEST PRODUCTs</h1>
            </div>
          </div>

          <div className='flex flex-col md:flex-row items-center justify-center flex-wrap md:pl-5' >
            {products.map((p, i) => (
              <ProductTemplate p={p} />
            ))}
          </div>
        </section>

        {/* hero video */}
        <section className='w-full flex flex-col items-center justify-center gap-4 bg-background relative text-[#F1E99D]' >
          <div className='flex flex-col gap-2 text-center p-5'>
            <h1 className='text-6xl font-bold font-serif p-4' >What our Customers Say</h1>
            <p>"Amazing quality and super fast delivery"</p>
            <p>"The fit is perfect and fabric feels premium. Will buy again!"</p>
            <p>"Stylish and affordable - a must-have!" </p>
          </div>
          <video className='h-screen w-screen object-cover'
            autoPlay loop muted playsInline>
            <source src={homevideo} />
          </video>
        </section>
        <Contact />
      </section>
    </>
  )
}

export default Home
