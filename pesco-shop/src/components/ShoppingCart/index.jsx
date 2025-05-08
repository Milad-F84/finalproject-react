import useGetSingleProduct from "../../request/useGetSingleProduct";
import useCart from "../../store/useCart";

export default function ShoppingCart({productId , quantity}){
    const {data , isLoading , error , isError} = useGetSingleProduct(productId);
    const {removeProductCompletely} = useCart();
    
    if(isLoading){
        return (
            <div className="h-screen flex justify-center items-center">
              <img src="\images\loading-shop.gif" alt="" className="" />
            </div>
          );
    }

    if (isError) {
        return (
          <div className="h-screen flex flex-col justify-center items-center">
            <img src="\images\error-shop.gif" alt="" className="" />
            <h1 className="font-bold animate-pulse text-center">an error has been accured{error.message}</h1>
          </div>
        );
      }

      return(
        <>
        <div className="flex flex-col sm:flex-row items-center gap-4 border p-4 rounded-xl shadow-md bg-white hover:shadow-lg transition">
            <img className="w-24 h-24 object-contain" src={data?.data?.image} alt="" />
            <div className="flex-1 w-full text-right">
                <h3 className="text-lg font-bold text-gray-800">{data?.data?.title}</h3>
                <p className="text-gray-600">قیمت واحد:{data?.data?.price}</p>
                <p className="text-gray-600">{quantity}</p>
                <p className="text-green-600 font-semibold mt-2">مجموع:{(quantity * data?.data?.price).toFixed(2)}$</p>
                <button  className="mt-4 text-sm text-white bg-red-500 hover:bg-red-600 px-4 py-1 rounded-md transition cursor-pointer" onClick={() => removeProductCompletely(productId)}>حذف محصول</button>
            </div>
        </div>
        </>
      )
}