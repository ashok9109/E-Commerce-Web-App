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
import Contact from '../components/Contact';

const Product = () => {

  const dispatch = useDispatch();
  // const { products, hasmore, fatchlazyproducts } = useInfinite();

  const getAllProducts = async () => {
    const res = await fetchAllProduct();
    if (res) {
      console.log('this res set in product', res)
      dispatch(loadproduct(res))
    }
  }

  const { products } = useSelector((state) => state.productReducer)

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>
      <section className='min-h-screen w-full bg-background'>
        <About />
        {/* <InfiniteScroll
          dataLength={products}
          next={fatchlazyproducts}
          hasMore={hasmore}
          loader={<h1>Loading...</h1>}
          endMessage={<p className='text-center' ><b>Yah! You Seen it all</b></p>}
        > */}
        <div className='w-full flex flex-col items-center justify-center text-sm text-[#F1E99D] md:p-5'>
          <h1 className='md:text-5xl' >WE LOVE TRENDS</h1>
          <div className='flex gap-7 md:text-2xl p-2' >
            <h1>FEATURED PRODUCTs</h1>
            <h1>NEW PRODUCTs</h1>
            <h1>BEST PRODUCTs</h1>
          </div>
        </div>
        <div className='min-h-full w-full'>
          <div className='flex flex-col md:flex-row items-center justify-center gap-5 flex-wrap rounded-lg'>
            {products.map((p, i) => (
              <ProductTemplate p={p} />
            ))}
          </div>
        </div>
        <Contact/>
      </section>
    </>
  )
}

export default Product;
