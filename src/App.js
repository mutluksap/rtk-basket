import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import Products from "./components/Products"
import {useSelector, useDispatch} from "react-redux";
import {getProducts} from "./store/reducers/Products";
import {useEffect} from "react";
import Loading from "./components/Loading";
import Card from "./components/Card"
import { Routes, Route } from "react-router-dom"
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [])

    const { products, loading, error } = useSelector(state => state.products);

  return (
      <div className="h-full w-full">
          <Header/>
          <div className="w-full container mx-auto md pt-20">
          {loading && <Loading/>}
          {error && error}
          {products.length > 0 &&
              <Routes>
                  <Route path="/" element={ <Products /> } />
                  <Route path="/card" element={ <Card/> } />
              </Routes>
          }
          </div>
          <Footer/>
      </div>
  );
}

export default App;
