import { useParams } from "react-router-dom";
import useGetSingleProduct from "../request/useGetSingleProduct";
import StarIcon from "@mui/icons-material/Star";

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
    <div className="shadow-lg rounded-2xl overflow-hidden cursor-pointer p-3">
      <img
        className="w-full aspect-square object-contain rounded-3xl"
        src={data?.data?.image}
        alt="product image"
      />
      <div className="flex items-center gap-1">
        <div className="flex items-center gap-1">
          <StarIcon className="text-red-500" />
          <StarIcon className="text-red-500" />
          <StarIcon className="text-red-500" />
          <StarIcon className="text-red-500" />
        </div>
        <p>({data?.data?.rating?.rate})</p>
      </div>
      <div className="flex justify-between items-center gap-2">
        <h2 className="font-bold hover:text-red-500 transition line-clamp-1">
          {data?.data?.title}
        </h2>
        <p>{data?.data?.price}$</p>
      </div>
    </div>
  );
}
