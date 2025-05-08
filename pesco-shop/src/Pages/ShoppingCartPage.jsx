import { useCallback, useMemo, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import useCart from "../store/useCart";
import useGetSingleProduct from "../request/useGetSingleProduct";

export default function ShoppingCartPage() {
  const { products } = useCart();

  const totalItems = products.reduce((sum, item) => sum + item.quantity, 0);

  const [priceMap, setPriceMap] = useState({});

  const handlePriceCalculated = useCallback((productId, totalPrice) => {
    setPriceMap((prev) => ({ ...prev, [productId]: totalPrice }));
  }, []);

  const totalPrice = Object.values(priceMap).reduce((sum, price) => sum + price, 0);

  console.log("priceMap:", priceMap);

  return (
    <>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          سبد خرید شما
        </h1>
        {products.length === 0 ? (
          <div className="text-center p-10 flex flex-col justify-center items-center">
            <img src="\images\cart-empty.png" alt="" />
            <p className="text-lg text-gray-600">سبد خرید شما خالی است</p>
          </div>
        ) : (
          <div className="space-y-6">
            {products.map((item) => (
              <ShoppingCart
                key={item.id}
                productId={item.id}
                quantity={item.quantity}
                onPriceCalculated={handlePriceCalculated}
              />
            ))}

            <div className="border-t pt-4 text-right flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center">
              <span className="text-xl font-semibold text-gray-700">
                مجموع تعداد کالا:{" "}
                <span className="text-orange-500">{totalItems}</span>
              </span>
              <p className="text-xl font-semibold text-gray-700">قیمت کل: <span className="text-orange-500">{totalPrice.toFixed(2)}$</span></p>
              <button className="text-sm text-white bg-red-500 hover:bg-black px-4 py-1 rounded-md transition cursor-pointer duration-200">رفتن برای تسویه حساب</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
