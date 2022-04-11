import { Card } from "react-bootstrap";
import Rating from "../Rating/Rating";

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} className="h-75" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Rating rating={product.rating} color="rgb(249, 232, 37)" />
        <Card.Text className="h2">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
