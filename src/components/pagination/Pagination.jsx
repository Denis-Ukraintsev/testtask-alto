import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  setCurrentPage,
  setOnPreviousPage,
  setOnNextPage,
} from "../../redux/features/productsSlice";

export default function Pagination() {
  const dispatch = useDispatch();
  const { loading, productsPerPage, products } = useSelector(
    ({ products }) => products
  );

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const previousPage = () => {
    dispatch(setOnPreviousPage());
  };

  const nextPage = () => {
    dispatch(setOnNextPage());
  };

  const i18n = {
    moveForvard: "Вперёд",
    moveBack: "Назад",
  };

  return loading ? (
    <></>
  ) : (
    <PaginationContainer>
      <NavigateButton onClick={previousPage}>{i18n.moveBack}</NavigateButton>
      <PagesList>
        {pageNumbers.map((number) => (
          <PageNumber key={number}>
            <Button
              onClick={() => {
                paginate(number);
              }}
            >
              {number}
            </Button>
          </PageNumber>
        ))}
      </PagesList>
      <NavigateButton onClick={nextPage}>{i18n.moveForvard}</NavigateButton>
    </PaginationContainer>
  );
}

const PaginationContainer = styled.div`
  display: flex;
  margin-top: 115px;
`;

const PagesList = styled.div`
  display: flex;
`;

const PageNumber = styled.div`
  list-style-type: none;
`;

const Button = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background-color: #eff5fe;
  font-weight: 500;
  cursor: pointer;
  border-radius: 50%;
  margin: 0 5px;
`;

const NavigateButton = styled.button`
  width: 80px;
  height: 32px;
  background-color: #eff5fe;
  font-weight: 500;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  margin: 0 18px;
`;
