import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductScreen from "../../screens/ProductScreen";
import Footer from "../Footer";
import Main from "../Main";
import Navbars from "../Navbars";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/products/:productId" element={<ProductScreen />}  />
          
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
