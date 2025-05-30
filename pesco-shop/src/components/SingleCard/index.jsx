import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

export default function SingleProduct({ image, title, id, rate, price }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${id}`)}
      className="shadow-lg rounded-2xl overflow-hidden cursor-pointer p-3"
    >
      <img
        className="w-full aspect-square object-contain rounded-3xl"
        src={image}
        alt="product image"
      />
      <div className="flex items-center gap-1">
        <div className="flex items-center gap-1">
          <StarIcon className="text-red-500"/>
          <StarIcon className="text-red-500"/>
          <StarIcon className="text-red-500"/>
          <StarIcon className="text-red-500"/>
        </div>
        <p>({rate})</p>
      </div>
      <div className="flex justify-between items-center gap-2">
        <h2 className="font-bold hover:text-red-500 duration-150 line-clamp-1">
          {title}
        </h2>
        <p>{price}$</p>
      </div>
    </div>
  );
}
