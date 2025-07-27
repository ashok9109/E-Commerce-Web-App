import { Suspense } from 'react';
import useInfinite from '../utils/useInfinite';
import About from './About';
import ProductTemplate from '../components/ProductTemplate';
import Footer from '../components/Footer';

const Product = () => {

  const { products, hasmore, fatchlazyproducts } = useInfinite();

  return (
    <>
      <div className='h-full w-full' >
        <About />
        <div className='h-25 flex flex-col items-center justify-center' >
          <h1 className='text-4xl ' >WE LOVE TRENDS</h1>
          <div className='flex gap-7' >
            <h1>FEATURED PRODUCTs</h1>
            <h1>NEW PRODUCTs</h1>
            <h1>BEST PRODUCTs</h1>
          </div>
        </div>
        <div className='h-full w-full'>
          <div className=' w-370 flex items-center justify-center flex-wrap bg-black rounded-lg  ml-7 mt-5 pt-7 pl-4 ' >
            {products.map((p, i) => (
              <Suspense key={p.id}>
                <ProductTemplate p={p} />
              </Suspense>
            ))}
          </div>
        </div>
        <div className='h-40 w-full flex flex-col items-center justify-center bg-gray-300 mt-5' >
            <h1 className='font-bold text-2xl' >See personalized recommendations</h1>
            <button className='bg-black px-5 py-1 text-white rounded-sm mt-3' >Sign in</button>
            <div className='flex text-sm mt-2' >
            <h1>New Customer? </h1>
            <a href="#"> Start here</a>
            </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Product;
