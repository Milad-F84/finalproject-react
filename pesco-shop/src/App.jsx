import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./Pages/HomePage";
import ShoppingCartPage from "./Pages/ShoppingCartPage";
import SingleProductPage from "./Pages/SingleProductPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import ProfilePage from "./Pages/ProfilePage";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/products/:productId"
                element={<SingleProductPage />}
              />
              <Route path="/shoppingcart" element={<ShoppingCartPage />} />
              <Route path="/login" element={<LoginPage />}/>
              <Route path="/signin" element={<SignupPage />}/>
              <Route path="/profile" element={<ProfilePage />}/>
            </Routes>
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
