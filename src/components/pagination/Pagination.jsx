import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setCurrentPage } from "../../redux/features/productsSlice";

export default function Pagination() {
  const dispatch = useDispatch();
  const { productsPerPage, products } = useSelector(({ products }) => products);

  const pageNumbers = [];

  for (let i = 1; i <= products.length / productsPerPage; i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <PaginationContainer>
      <PagesList>
        {pageNumbers.map((number) => (
          <PageNumber key={number}>
            <Button
              onClick={() => {
                paginate(number);
              }}
              style={{
                borderRadius: "50%",
              }}
              href="!#"
            >
              {number}
            </Button>
          </PageNumber>
        ))}
      </PagesList>
    </PaginationContainer>
  );
}

const PaginationContainer = styled.div`
  margin-top: 115px;
`;

const PagesList = styled.div`
  display: flex;
`;

const PageNumber = styled.ul`
  list-style-type: none;
`;

const Button = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background-color: #eff5fe;
  font-weight: 700;
`;
