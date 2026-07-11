import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { createProductApi } from "../apis/ProductApis";


const CreateProduct = () => {

  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const CreateProductHandler = async (product) => {
    let newProductObj = {
      title: product.title,
      description: product.description,
      price: {
        amount: product.amount,
        currency: product.currency
      },
      image: product.image,
      stock: product.stock,
      brand: product.brand,
      category: product.category
    }
    const response = await createProductApi(newProductObj);
    if (response) {
      console.log("product created")
    }
    reset();
    navigate("/product");
  }

  return (
    <>
      <section className="min-h-screen bg-background w-full text-[#F1E99D]">
        <div className="w-full flex flex-col items-center justify-center gap-10 md:gap-0 p-5 md:p-20 rounded-sm">
          <h1 className="font-bold text-gradient md:text-3xl" >Create New Product</h1>


          {/* form and input fields */}
          <form onSubmit={handleSubmit(CreateProductHandler)} className="w-full max-w-2xl flex flex-col items-center gap-10 justify-center border-2 text-[#F1E99D] bg-gradient rounded-lg p-4">

            {/* Title input */}
            <input {...register("title", { required: "Title is required" })}
              className="w-full border-2 mb-2 rounded-sm outline-0 p-1"
              type="text" name="title" placeholder="Product Title" />
            {errors.title && (<span className="text-white" >{errors.title.message}</span>)}

            {/* Price input */}
            <div className="w-full border-2 rounded-sm">
              <label> price</label>
              <div className="flex items-center justify-between border-2 p-3">
                <input {...register("amount", { required: "Amount is required " })}
                  className="outline-0"
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

            {/* category */}
            <select {...register("category")}
              className="w-full outline-0 border-2 rounded-sm p-1">
              <option className="text-black" value="laptop">Laptop</option>
              <option className="text-black" value="gaming">Gaming</option>
              <option className="text-black" value="smartphone">Smartphone</option>
              <option className="text-black" value="electronics">Electronics</option>
              <option className="text-black" value="menclothing">Man's Clothings</option>
              <option className="text-black" value="womenclothing">Women's Clothigs</option>
              <option className="text-black" value="fashion">Fashion</option>
              <option className="text-black" value="television">Televisions</option>
            </select>

            {/* Image input */}
            <input {...register("image", { required: "Image is required" })}
              className=" w-full border-2 rounded-sm outline-0 p-1"
              type="url" name="image" placeholder="Product Image Url" />
            {errors.image && (<span className="text-white" >{errors.image.message}</span>)}

            {/* Stock input */}
            <input {...register("stock", { required: "Stock numder is required" })}
              className=" w-full border-2 rounded-sm outline-0 p-1"
              type="number" name="stock" placeholder="Product Stock" />
            {errors.stock && (<span className="text-white">{errors.stock.message}</span>)}

            {/* Brand input */}
            <input {...register("brand", { required: "Brand is required" })}
              className=" w-full border-2 rounded-sm outline-0 p-1"
              type="text" name="brand" placeholder="Brand Name" />
            {errors.brand && (<span className="text-white">{errors.brand.message}</span>)}

            {/* Description */}
            <textarea {...register("description", { required: "Description is required" })}
              className="w-full border-2 text-center rounded-sm outline-0"
              type="text" name="description" placeholder="Product Description Here....">
            </textarea>
            {errors.description && (<span className="text-white">{errors.description.message}</span>)}

            {/* create product button */}
            <button className="w-full py-2 bg-black rounded-lg" >CREATE</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default CreateProduct;
