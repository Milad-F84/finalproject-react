import { useNavigate } from "react-router-dom";

export default function SingleProduct({ image, title, id }) {
    const navigate = useNavigate();

    return (
      <div
        onClick={() => navigate(`/products/${id}`)}
        className="shadow-lg rounded-md overflow-hidden cursor-pointer"
      >
        <img
          className="w-full aspect-square object-contain"
          src={image}
          alt="product image"
        />
  
        <h2>{title}</h2>
      </div>
    );
}
