import { useParams } from "react-router-dom";
import useGetSingleProduct from "../request/useGetSingleProduct";

export default function SingleProductPage() {
  const { productId } = useParams();
  const { data, isLoading, error, isError } = useGetSingleProduct(productId);
  console.log(data);

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
        <p>({data?.data?.rate})</p>
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
