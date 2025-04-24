import Banner from "../components/Banner";
import Category from "../components/Category";
import Off from "../components/Off";
import SingleProduct from "../components/SingleCard";
import useGetProducts from "../request/useGetProducts";

export default function HomePage(){
    debugger;
    const { data: products, isLoading, error, isError } = useGetProducts();
    if (isLoading) {
        return <h1>LOADING...</h1>;
      }
    
      if (isError) {
        return <h1>an error has been accured{error.message}</h1>;
      }

    return(
        <>
        <Banner />
        <Category />
        <Off />
        
        <div className="grid grid-cols-4 gap-8">
        {products?.data?.map((item) => (
          <SingleProduct
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>
        </>
    )
}