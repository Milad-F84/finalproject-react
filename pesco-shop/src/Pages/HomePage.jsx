import Banner from "../components/Banner";
import Blog from "../components/Blog";
import Category from "../components/Category";
import Deal from "../components/Deal";
import News from "../components/NewsState";
import Off from "../components/Off";
import SingleProduct from "../components/SingleCard";
import useGetProducts from "../request/useGetProducts";

export default function HomePage() {
  const { data: products, isLoading, error, isError } = useGetProducts();
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
        <h1 className="font-bold animate-pulse text-center">an error has been accured{error.message}</h1>
      </div>
    );
  }

  return (
    <>
      <Banner />
      <Category />
      <Off />

      <div className="bg-[#fffaf3] p-10">
        <div className="container-primary">
          <div>
            <p className="text-red-500">محصولات ویژه</p>
          </div>
          <div>
            <h1 className="font-bold text-2xl">مجموعه ویژگی های ما</h1>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-8 container-primary ">
          {products?.data?.map((item) => (
            <SingleProduct
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              rate={item.rating.rate}
              price={item.price}
            />
          ))}
        </div>
      </div>

      <Deal />
      <Blog />
      <News />
    </>
  );
}
