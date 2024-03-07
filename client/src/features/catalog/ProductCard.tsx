import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { Product } from "../../app/model/product";

interface Props {
    product: Product
}
export default function ProductCard({ product }: Props) {
    return (
        <Card>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={product.pictureUrl}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}