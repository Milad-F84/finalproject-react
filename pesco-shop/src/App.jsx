import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./Pages/HomePage";
import ShoppingCartPage from "./Pages/ShoppingCartPage";
import SingleProductPage from "./Pages/SingleProductPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products/:productId" element={<SingleProductPage />} />
              <Route path="/shoppingcart" element={<ShoppingCartPage />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </QueryClientProvider>
    </>
  );
}

export default App;
