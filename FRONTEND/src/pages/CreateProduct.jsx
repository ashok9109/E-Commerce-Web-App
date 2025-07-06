import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import createproduct from '../images/createproduct.avif'



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
      <div className="h-screen w-screen flex items-center justify-center  " >
        <div className="h-140 w-330 flex items-center justify-center shadow-lg shadow-black mb-22 ">
          <div className="h-140 w-115 " >
            <img className="p-7" src={createproduct} alt="" />
          </div>
          <div className="h-140 w-215 ">
            <form
              onSubmit={handleSubmit(CreateProductHandler)}
              className="h-full w-full rounded-lg p-13 " >
              <input
                {...register("image")}
                className="w-130 text-2xl border-b mb-13 outline-0 text-black  "
                type="url" name="image" placeholder="Product Image Url" />
              <input
                {...register("title")}
                className="w-130 text-2xl border-b mb-13 outline-0 text-black  "
                type="text" name="title" placeholder="Product Title" />
              <input
                {...register("price")}
                className="w-130 text-2xl border-b mb-13 outline-0 text-black  "
                type="number" name="price" placeholder="Product Price" />
              <input
                {...register("category")}
                className="w-130 text-2xl border-b mb-13 outline-0 text-black  "
                type="text" name="category" placeholder="Product Category" />
              <textarea
                {...register("description")}
                className="w-130 text-2xl border-b mb-13 outline-0 text-black  "
                type="text" name="description" placeholder="Product Description Here...."
              ></textarea>
              <button
                className="text-2xl px-5 py-3 bg-black text-white rounded-lg"
              >Create Product</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateProduct;
