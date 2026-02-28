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

  const getAllProducts = async () => {
    const res = await fetchAllProduct();
    if (res) {
      console.log('this res set in product', res)
      dispatch(loadproduct(res))
    }
  }

  const { products } = useSelector((state) => state.productReducer)
  console.log('check product', products)

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>
      <section className='h-full w-full'>
        <About />
        {/* <InfiniteScroll
          dataLength={products}
          next={fatchlazyproducts}
          hasMore={hasmore}
          loader={<h1>Loading...</h1>}
          endMessage={<p className='text-center' ><b>Yah! You Seen it all</b></p>}
        > */}
        <div className='h-25 flex flex-col items-center justify-center text-sm p-7'>
          <h1 className='md:text-4xl' >WE LOVE TRENDS</h1>
          <div className='flex gap-7' >
            <h1>FEATURED PRODUCTs</h1>
            <h1>NEW PRODUCTs</h1>
            <h1>BEST PRODUCTs</h1>
          </div>
        </div>
        <div className='h-full w-full'>
          <div className='flex items-center justify-center flex-wrap rounded-lg ml-7 mt-5 pt-7 pl-4'>
            {products.map((p, i) => (
              <ProductTemplate p={p} />
            ))}
          </div>
        </div>
        <Footer />
      </section>
    </>
  )
}

export default Product;
