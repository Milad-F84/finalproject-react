import Footer from "../components/Footer";
import Header from "../components/Header";
import News from "../components/NewsState";

export default function Layout({ children}) {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  }