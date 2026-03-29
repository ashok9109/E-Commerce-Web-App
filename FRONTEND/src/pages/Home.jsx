import homevideo from '../images/newArrival.mp4'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProductApi } from '../apis/ProductApis';
import { loadproduct } from '../store/reducers/productSlice';
import { useEffect } from 'react';
import ProductTemplate from '../components/ProductTemplate';
import About from './About';
import Contact from '../components/Contact';
const Home = () => {

const dispatch = useDispatch();
  const {products} = useSelector((state)=> state.productReducer)
  console.log('this is the products', products)

  const fetchAllProducts = async ()=>{
    const response = await fetchAllProductApi();
    if(response){
      dispatch(loadproduct(response))
    }
  }

  useEffect(()=>{
    fetchAllProducts()
  },[]);

  return (
    <>
      <section className='min-h-screen bg-background w-full relative' >
        <About/>

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
        {products.map((p, i)=>(
          <ProductTemplate p={p}/>
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
        <Contact/>
      </section>
    </>
  )
}

export default Home
