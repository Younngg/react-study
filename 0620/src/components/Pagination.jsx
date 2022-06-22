import React from 'react';
import styled from 'styled-components';

const Pagination = ({ total, page, setPage, LIST_PER_PAGE }) => {
  const pagesNum = Math.ceil(total / LIST_PER_PAGE);
  const pagesNumArray = new Array(pagesNum);

  return (
    <PaginationBox>
      <PrevButton
        onClick={() => {
          setPage(page - 1);
        }}
        disabled={page === 1}
      >
        이전
      </PrevButton>
      {pagesNumArray.fill().map((ele, i) => {
        return (
          <PageNumButton
            key={i + 1}
            onClick={() => {
              setPage(i + 1);
            }}
          >
            {i + 1}
          </PageNumButton>
        );
      })}

      <NextButton
        onClick={() => {
          setPage(page + 1);
        }}
        disabled={page === pagesNum}
      >
        이후
      </NextButton>
    </PaginationBox>
  );
};

export default Pagination;

const PaginationBox = styled.div`
  height: 1000px;
`;

const PrevButton = styled.button`
  width: 50px;
  height: 30px;
  background-color: green;
  color: white;
`;

const NextButton = styled(PrevButton);

const PageNumButton = styled.button``;
