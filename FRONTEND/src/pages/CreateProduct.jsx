import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
// import { asynccreateproduct } from "../store/actions/productAction";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";


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
    console.log("this is the products", newProductObj)
    // dispatch(asynccreateproduct(newProductObj));
    reset();
    navigate("/product");
  }

  return (
    <>
      <section className="min-h-screen bg-background w-full text-[#F1E99D]">
        <div className="w-full flex flex-col items-center justify-center p-5 rounded-sm">
            <h1 className="text-3xl font-bold text-gradient" >Create New Product</h1>


          {/* form and input fields */}
          <form onSubmit={handleSubmit(CreateProductHandler)} className="w-full max-w-2xl flex flex-col items-center justify-center border-2 text-[#F1E99D] rounded-lg p-4">

            {/* Title input */}
            <input {...register("title", { required: "Title is required" })}
              className="w-full text-2xl border-2  px-2 py-4 mb-4 rounded-lg outline-0"
              type="text" name="title" placeholder="Product Title" />
            {errors.title && (<span className="text-white" >{errors.title.message}</span>)}

            {/* Description */}
            <textarea {...register("description", { required: "Description is required" })}
              className=" w-full text-2xl border-2 px-2 py-5 text-center mb-4 rounded-lg outline-0 "
              type="text" name="description" placeholder="Product Description Here....">
            </textarea>
            {errors.description && (<span className="text-white">{errors.description.message}</span>)}

            {/* Price input */}
            <div className="w-full text-2xl border-2 px-2 py-4 mb-4 rounded-lg">
              <label> price</label>
              <div className="flex items-center justify-between border-2 p-3">
                <input {...register("amount", { required: "Amount is required " })}
                  className="  outline-0 "
                  type="number" name="amount" placeholder="Amount" />

                {/* currency */}
                <select {...register("currency")}
                  className="outline-0">
                  <option value="INR">INR</option>
                  <option value="USD">USD</option>
                </select>
              </div>
              {errors.amount && (<span className="text-white text-sm" >{errors.amount.message}</span>)}
            </div>

            {/* Image input */}
            <input {...register("image", { required: "Image is required" })}
              className=" w-full text-2xl border-2 px-2 py-4 mb-4 rounded-lg outline-0  "
              type="url" name="image" placeholder="Product Image Url" />
            {errors.image && (<span className="text-white" >{errors.image.message}</span>)}

            {/* Stock input */}
            <input {...register("stock", { required: "Stock numder is required" })}
              className=" w-full text-2xl border-2 px-2 py-4 mb-4 rounded-lg outline-0 "
              type="text" name="stock" placeholder="Product Stock" />
            {errors.stock && (<span className="text-white">{errors.stock.message}</span>)}

            {/* create product button */}
            <button className="w-full py-2 bg-gradient rounded-lg" >CREATE</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default CreateProduct;
