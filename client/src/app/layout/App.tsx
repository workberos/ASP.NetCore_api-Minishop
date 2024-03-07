import { useEffect, useState } from "react"
import { Product } from "../model/product";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import { Container, CssBaseline } from "@mui/material";

function App() {
  const [products, setProducts] = useState<Product[]>([]);


  useEffect(()=>{
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  },[]);

  function addProduct(){
    setProducts(preState => [...preState, 
      {
        id: preState.length + 101,
        name: "product" + (preState.length + 1),
        price: preState.length*100 + 100,
        brand: "some brand",
        description: "some description",
        pictureUrl: "http://picsum.photos/200"
      }])
  };

  return (
    <>
      <CssBaseline/>
      <Header/>
      <Container>
        <Catalog products = {products} addProduct={addProduct}/>
      </Container>
    </>
  )
}

export default App
