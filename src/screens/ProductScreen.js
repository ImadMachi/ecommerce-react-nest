import React from "react";
import { Container, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductScreen = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.products.find((product) => product.id === parseInt(productId)));

  return (
    <Container className="mt-5">
      <div>Go Back</div>
      <div>
        <div>
          <Image src={product.image} alt={product.name} />
        </div>
        <div></div>
      </div>
    </Container>
  );
};

export default ProductScreen;
