import Banner from "../components/Banner";
import Category from "../components/Category";
import Off from "../components/Off";
import SingleProduct from "../components/SingleCard";
import useGetProducts from "../request/useGetProducts";

export default function HomePage() {
  const { data: products, isLoading, error, isError } = useGetProducts();
  if (isLoading) {
    return <h1>LOADING...</h1>;
  }

  if (isError) {
    return <h1>an error has been accured{error.message}</h1>;
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
    </>
  );
}
