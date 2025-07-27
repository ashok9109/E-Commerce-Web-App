import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import createproduct from '../images/createproduct.jpg'



const CreateProduct = () => {

  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const CreateProductHandler = (product) => {
    console.log(product);
    reset();
    navigate("/");
  }

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center text-white  " >
        <div className="h-140 w-330 flex items-center justify-center text-black bg-white shadow-lg shadow-black mb-22 ">
          <div className="h-140 w-115 flex flex-col items-center justify-center " >
            <img className="h-100 mb-10  p-7" src={createproduct} alt="" />
            <h1 className="text-4xl mb-30 font-mono" >Create Product</h1>
          </div>
          <div className="h-140 w-215 text-white ">
            <form
              onSubmit={handleSubmit(CreateProductHandler)}
              className="h-full w-full rounded-lg p-13 " >
              <input
                {...register("image")}
                className="w-130 text-2xl border-2 text-black px-2 py-4 mb-4 rounded-lg outline-0  "
                type="url" name="image" placeholder="Product Image Url" />
              <input
                {...register("title")}
                className="w-130 text-2xl border-2 text-black px-2 py-4 mb-4 rounded-lg outline-0 "
                type="text" name="title" placeholder="Product Title" />
              <input
                {...register("price")}
                className="w-130 text-2xl border-2 text-black px-2 py-4 mb-4 rounded-lg outline-0 "
                type="number" name="price" placeholder="Product Price" />
              <input
                {...register("category")}
                className="w-130 text-2xl border-2 text-black px-2 py-4 mb-4 rounded-lg outline-0 "
                type="text" name="category" placeholder="Product Category" />
              <textarea
                {...register("description")}
                className="w-130 text-2xl border-2 text-black px-2 py-4 mb-4 rounded-lg outline-0 "
                type="text" name="description" placeholder="Product Description Here...."
              ></textarea>
              <button
                className="text-2xl px-5 ml-5 py-3 bg-blue-700 text-white rounded-lg"
              >Create Product</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateProduct;
