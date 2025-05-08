import ShoppingCart from "../components/ShoppingCart";
import useCart from "../store/useCart";

export default function ShoppingCartPage() {
  const { products } = useCart();

  const totalItems = products.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          سبد خرید شما
        </h1>
        {products.length === 0 ? (
          <div className="text-center mt-10 p-10 bg-yellow-50 rounded-xl shadow-sm">
            <p className="text-lg text-gray-600">سبد خرید شما خالی است</p>
          </div>
        ) : (
          <div className="space-y-6">
            {products.map((item) => (
              <ShoppingCart
                key={item.id}
                productId={item.id}
                quantity={item.quantity}
              />
            ))}

            <div className="border-t pt-4 text-right">
              <span className="text-xl font-semibold text-gray-700">
                مجموع تعداد کالا:{" "}
                <span className="text-orange-500">{totalItems}</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
