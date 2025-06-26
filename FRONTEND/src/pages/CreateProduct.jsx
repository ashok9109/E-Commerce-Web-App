import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";


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
      <div className="h-screen w-screen px-10 py-15 text-blue-800" >
        <form
          onSubmit={handleSubmit(CreateProductHandler)}
          className="h-160 w-200 rounded-lg border-2 p-13 text-blue-800" >
          <input
            {...register("image")}
            className="w-130 text-2xl border-b mb-15 outline-0  "
            type="url" name="image" placeholder="Product Image Url" />
          <input
            {...register("title")}
            className="w-130 text-2xl border-b mb-15 outline-0  "
            type="text" name="title" placeholder="Product Title" />
          <input
            {...register("price")}
            className="w-130 text-2xl border-b mb-15 outline-0  "
            type="number" name="price" placeholder="Product Price" />
          <input
            {...register("category")}
            className="w-130 text-2xl border-b mb-15 outline-0  "
            type="text" name="category" placeholder="Product Category" />
          <textarea
            {...register("description")}
            className="w-130 text-2xl border-b mb-10 outline-0  "
            type="text" name="description" placeholder="Product Description Here...."
          ></textarea>
          <button
            className="text-2xl px-5 py-3 bg-blue-600 text-white rounded-lg"
          >Create Product</button>
        </form>
      </div>
    </>
  )
}

export default CreateProduct;
