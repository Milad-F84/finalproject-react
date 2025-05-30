import { useParams } from "react-router-dom";
import useGetSingleProduct from "../request/useGetSingleProduct";
import StarIcon from "@mui/icons-material/Star";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import useCart from "../store/useCart";
import { useMemo } from "react";
import { Breadcrumbs, Typography, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

export default function SingleProductPage() {
  const { productId } = useParams();
  const { data, isLoading, error, isError } = useGetSingleProduct(productId);
  const { products, addProduct, removeProduct } = useCart();
  console.log(data);

  const thisProductCount = useMemo(() => {
    const foundIndex = products.findIndex((item) => item.id === productId);

    if (foundIndex == -1) {
      return 0;
    } else {
      return products[foundIndex].quantity;
    }
  }, [products]);

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
      <div className="max-w-6xl mx-auto px-4 pt-4">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            underline="hover"
            color="inherit"
            href="/"
            sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
          >
            <HomeIcon fontSize="small" />
            خانه
          </Link>
          <Typography color="primary">
            {data?.data?.title?.slice(0, 25) + "..."}
          </Typography>
        </Breadcrumbs>
      </div>
      <div className="flex flex-col gap-7 md:flex-row md:justify-between md:items-center container-primary p-4">
        <img
          src={data?.data?.image}
          alt="product image"
          className="w-full aspect-square object-contain rounded-3xl md:w-[357px]"
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
          <hr className="text-gray-400" />
          <p className="font-bold text-lg text-center md:text-start">
            {data?.data?.price}$
          </p>
          <div className="flex flex-col gap-2 items-center md:flex-row md:items-center md:gap-5 ">
            <div className="border-2 border-gray-400 rounded-3xl p-3 w-[150px] flex gap-2 justify-between items-center h-[40px]">
              <button
                onClick={() => addProduct(productId)}
                className="text-2xl cursor-pointer"
              >
                +
              </button>
              <span className="text-xl">{thisProductCount}</span>
              <button
                onClick={() => removeProduct(productId)}
                className="text-2xl cursor-pointer"
              >
                -
              </button>
            </div>
            <div>
              <button className="bg-black text-white w-[150px] h-[40px] rounded-3xl p-2 text-center cursor-pointer hover:bg-red-500 duration-250">
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
