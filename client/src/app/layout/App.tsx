import { useEffect, useState } from "react"
import { Product } from "../model/product";
import { Typography } from "@mui/material";
import Catalog from "../../features/catalog/Catalog";

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
        pictureUrl: "http://picsum.photo/200"
      }])
  };

  return (
    <div className="app">
      <Typography variant="h1">Minishop</Typography>
      <Catalog products = {products} addProduct={addProduct}/>
    </div>
  )
}

export default App
