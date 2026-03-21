import { lazy } from 'react';
const ProductTemplate = lazy(() => import('../components/ProductTemplate'));
import { fetchAllProductApi } from '../apis/ProductApis';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadproduct } from '../store/reducers/productSlice';
import Contact from '../components/Contact';

const Product = () => {

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer)

  console.log("product page data=", products)

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
      <section className='min-h-screen w-full bg-background pt-20'> 

        <section className='flex' >
          {/* Left div */}
          <div className='w-[20%] bg-white' >
            <h1>hellow</h1>
          </div>

        {/*Right div Mapping products */}
        <div className='min-h-full w-full'>
          <div className='flex flex-col md:flex-row items-center justify-center gap-5 flex-wrap rounded-lg'>
            {products.map((p, i) => (
              <ProductTemplate p={p} />
            ))}
          </div>
        </div>
        </section>

        <Contact />
      </section>
    </>
  )
}

export default Product;
