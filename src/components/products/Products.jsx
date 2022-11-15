import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/features/productsSlice";
import styled from "styled-components";

export default function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector(({ products }) => products);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const productsArray = products.map((product) => (
    <ProductContainer>
      <ProductImage>
        <img src={product.image_url} alt="" />
      </ProductImage>
      <ProductInfo>
        <ProductAvailability>
          {product.availability ? (
            <Button style={{ background: "#76CB22" }}>в наличии</Button>
          ) : (
            <Button style={{ background: "#A6C3EE" }}>под заказ</Button>
          )}
        </ProductAvailability>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{`${product.price} ₽`}</ProductPrice>
      </ProductInfo>
    </ProductContainer>
  ));

  return <Root>{productsArray}</Root>;
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 115px;
  max-width: 100%;
  height: 100%;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e4ecf9;
  padding: 5px;
  margin: 5px;
`;

const ProductImage = styled.div``;

const ProductInfo = styled.ul`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e4ecf9;
  padding: 10px;
  list-style-type: none;
`;

const ProductAvailability = styled.li`
  padding: 5px;
`;

const Button = styled.button`
  text-align: center;
  color: white;
  width: 83.59px;
  height: 27.12px;
  border: none;
`;

const ProductName = styled.li`
  padding: 5px;
`;

const ProductPrice = styled.li`
  font-weight: 700;
  padding: 5px;
`;
