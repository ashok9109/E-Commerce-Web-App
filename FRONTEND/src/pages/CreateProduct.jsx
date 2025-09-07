import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { asynccreateproduct } from "../store/actions/productAction";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import createvideo from '../videos/create-vdieo.mp4'


const CreateProduct = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const CreateProductHandler = (product) => {
    let newProductObj = {
      title: product.title,
      description: product.description,
      price: {
        amount: product.amount,
        currency: product.currency
      },
      image: product.image,
      stock: product.stock
    }
    // product.id = nanoid();
    dispatch(asynccreateproduct(newProductObj));
    reset();
    navigate("/");
  }

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center pt-10 bg-[#05090A] " >
        <video className='h-screen w-screen absolute top-0 left-0  bg-[#05090A]' autoPlay loop muted   >
          <source src={createvideo} />
        </video>
        <div className="h-full w-210 z-[999] rounded-sm ">
          <form
            onSubmit={handleSubmit(CreateProductHandler)}
            className="h-full w-full flex flex-col items-center justify-center rounded-lg pt-15 " >
            <input
              {...register("title", { required: "Title is required" })}
              className="  w-200 text-2xl border-2 text-red-600  px-2 py-4 mb-4 rounded-lg outline-0 "
              type="text" name="title" placeholder="Product Title" />
            {errors.title && (
              <span className="text-white" >{errors.title.message}</span>
            )}
            <textarea
              {...register("description", { required: "Description is required" })}
              className=" w-200 text-2xl border-2 text-red-600  px-2 py-5 text-center mb-4 rounded-lg outline-0 "
              type="text" name="description" placeholder="Product Description Here....">
            </textarea>
            {errors.description && (
              <span className="text-white">{errors.description.message}</span>
            )}
            <div className="w-200 text-2xl border-2 text-red-600  px-2 py-4 mb-4 rounded-lg " >
              <label> price</label>
              <div className="flex items-center justify-between border-2 text-red-600 p-3">
                <input
                  {...register("amount", { required: "Amount is required " })}
                  className="  outline-0 "
                  type="number" name="amount" placeholder="Amount" />
                <select
                  {...register("currency")}
                  className="outline-0">
                  <option value="INR">INR</option>
                  <option value="USD">USD</option>
                </select>
              </div>
              {errors.amount && (
                <span className="text-white text-sm" >{errors.amount.message}</span>
              )}
            </div>
            <input
              {...register("image", { required: "Image is required" })}
              className=" w-200 text-2xl border-2 text-red-600  px-2 py-4 mb-4 rounded-lg outline-0  "
              type="url" name="image" placeholder="Product Image Url" />
            {errors.image && (
              <span className="text-white" >{errors.image.message}</span>
            )}
            <input
              {...register("stock", { required: "Stock numder is required" })}
              className=" w-200 text-2xl border-2 text-red-600  px-2 py-4 mb-4 rounded-lg outline-0 "
              type="text" name="stock" placeholder="Product Stock" />
            {errors.stock && (
              <span className="text-white">{errors.stock.message}</span>
            )}
            <button
              className="text-2xl px-5 ml-5 py-3 bg-red-600 text-white rounded-lg"
            >Create Product</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateProduct;
