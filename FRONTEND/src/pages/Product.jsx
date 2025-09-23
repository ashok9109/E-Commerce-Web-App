import { lazy, Suspense } from 'react';
// import useInfinite from '../utils/useInfinite';
import About from './About';
// import InfiniteScroll from "react-infinite-scroll-component";
const ProductTemplate = lazy(() => import('../components/ProductTemplate'));
import Footer from '../components/Footer';
import { fetchAllProduct } from '../apis/ProductApis';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadproduct } from '../store/reducers/productSlice';
import LoadingProduct from '../components/LoadingProduct';

const Product = () => {

  const dispatch = useDispatch();
  // const { products, hasmore, fatchlazyproducts } = useInfinite();

  const getAllProducts = async()=>{
    const res = await fetchAllProduct();
    if(res){
      console.log('this res set in product',res)
      dispatch(loadproduct(res))
    }
  }

 const {products} = useSelector((state)=> state.productReducer)
 console.log('check product', products)

  useEffect(()=>{
    getAllProducts()
  },[])

  return (
    <>
      <div className='h-full w-full ' >
        <About />
        {/* <InfiniteScroll
          dataLength={products}
          next={fatchlazyproducts}
          hasMore={hasmore}
          loader={<h1>Loading...</h1>}
          endMessage={<p className='text-center' ><b>Yah! You Seen it all</b></p>}
        > */}
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
                
                  <ProductTemplate p={p} />
              ))}
            </div>
          </div>
        {/* </InfiniteScroll> */}
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
