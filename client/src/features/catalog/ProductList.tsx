import { List } from "@mui/material";
import { Product } from "../../app/model/product";
import ProductCard from "./ProductCard";

interface Props {
    products: Product[]
}
export default function ProductList({ products }: Props) {
    return (
        <List>
            {products.map(product => (
                <ProductCard product={product} key={product.id}/>
            ))}
        </List>
    );
} 