import { useParams } from "react-router-dom";
import useGetSingleProduct from "../request/useGetSingleProduct";
import StarIcon from "@mui/icons-material/Star";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

export default function SingleProductPage() {
  const { productId } = useParams();
  const { data, isLoading, error, isError } = useGetSingleProduct(productId);
  console.log(data);

  if (isLoading) {
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
        <h1>an error has been accured{error.message}</h1>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-7 md:flex-row md:justify-between md:items-center container-primary p-4">
        <img
          src={data?.data?.image}
          alt="product image"
          className="w-full aspect-square object-contain rounded-3xl md:w-[600px]"
        />
        <div className="flex flex-col gap-3">
          <div className="flex justify-start items-center gap-1">
            <LocalOfferIcon className="text-red-700" />
            <p className="text-red-700">فروش 70% تخفیف</p>
          </div>
          <h1 className="text-2xl font-bold">{data?.data?.title}</h1>
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1">
              <StarIcon className="text-red-500" />
              <StarIcon className="text-red-500" />
              <StarIcon className="text-red-500" />
              <StarIcon className="text-red-500" />
            </div>
            <p>({data?.data?.rating?.rate})</p>
          </div>
          <h2>{data?.data?.description}</h2>
          <hr className="text-gray-400"/>
          <p className="font-bold text-lg">{data?.data?.price}$</p>
          <div className="md:flex md:items-center md:gap-5">
            <div className="border-2 border-gray-400 rounded-3xl p-3 max-w-[150px] flex gap-2 justify-between items-center h-[40px]">
              <button className="text-2xl">+</button>
              <span className="text-xl">2</span>
              <button className="text-2xl">-</button>
            </div>
            <div>
              <button className="bg-black text-white max-w-[150px] h-[40px] rounded-3xl p-2 mb-3 text-center">
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
