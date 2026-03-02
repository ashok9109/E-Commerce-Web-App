import { lazy } from 'react';
import About from './About';
const ProductTemplate = lazy(() => import('../components/ProductTemplate'));
import { fetchAllProductApi } from '../apis/ProductApis';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadproduct } from '../store/reducers/productSlice';
import Contact from '../components/Contact';

const Product = () => {

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer)

  const getAllProducts = async () => {
    const res = await fetchAllProductApi();
    if (res) {
      dispatch(loadproduct(res))
    }
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>
      <section className='min-h-screen w-full bg-background'>
        {/* About */}
        <About />

        {/* Heading product page */}
        <div className='w-full flex flex-col items-center justify-center text-sm text-[#F1E99D] md:p-5'>
          <h1 className='md:text-5xl' >WE LOVE TRENDS</h1>
          <div className='flex gap-7 md:text-2xl p-2' >
            <h1>FEATURED PRODUCTs</h1>
            <h1>NEW PRODUCTs</h1>
            <h1>BEST PRODUCTs</h1>
          </div>
        </div>

        {/* Mapping products */}
        <div className='min-h-full w-full'>
          <div className='flex flex-col md:flex-row items-center justify-center gap-5 flex-wrap rounded-lg'>
            {products.map((p, i) => (
              <ProductTemplate p={p} />
            ))}
          </div>
        </div>
        <Contact />
      </section>
    </>
  )
}

export default Product;
