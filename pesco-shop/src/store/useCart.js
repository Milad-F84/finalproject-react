import { create } from "zustand";

const useCart = create((set) => {
  const prevCart = JSON.parse(localStorage.getItem("cart")) || [];
  return {
    products: prevCart,
    addProduct: (id) =>
      set((prev) => {
        const foundItemIndex = prev.products.findIndex(
          (item) => item.id === id
        );
        if (foundItemIndex != -1) {
          const newProducts = prev.products.map((item, index) => {
            if (index == foundItemIndex) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            } else {
              return item;
            }
          });
          localStorage.setItem("cart", JSON.stringify(newProducts));
          return {
            products: newProducts,
          };
        } else {
          localStorage.setItem(
            "cart",
            JSON.stringify([
              ...prev.products,
              {
                id,
                quantity: 1,
              },
            ])
          );
          return {
            products: [
              ...prev.products,
              {
                id,
                quantity: 1,
              },
            ],
          };
        }
      }),
    removeProduct: (id) =>
      set((prev) => {
        const foundItemIndex = prev.products.findIndex(
          (item) => item.id === id
        );
        if (foundItemIndex != -1) {
          const newProducts = prev.products
            .map((item, index) => {
              if (index == foundItemIndex) {
                return {
                  ...item,
                  quantity: item.quantity - 1,
                };
              } else {
                return item;
              }
            })
            .filter((item) => item.quantity > 0);
          localStorage.setItem("cart", JSON.stringify(newProducts));
          return {
            products: newProducts,
          };
        } else {
          localStorage.setItem(
            "cart",
            JSON.stringify([
              ...prev.products,
              {
                id,
                quantity: 0,
              },
            ])
          );
          return {
            products: [
              ...prev.products,
              {
                id,
                quantity: 0,
              },
            ],
          };
        }
      }),
    removeProductCompletely: (id) =>
      set((prev) => {
        const newProducts = prev.products.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(newProducts));
        return {
          products: newProducts,
        };
      }),
  };
});

export default useCart;
