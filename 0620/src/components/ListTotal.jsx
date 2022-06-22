import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';

const ListTotal = () => {
  const [lists, setLists] = useState([]);
  const LIST_PER_PAGE = 10; //한장에 보여질 리스트 수
  const [page, setPage] = useState(1);
  const startNum = (page - 1) * LIST_PER_PAGE;
  const endNum = startNum + LIST_PER_PAGE;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((res) => setLists(res));
  }, []);
  return (
    <div>
      <Title>게시물 목록</Title>
      <Ul>
        {[...lists]
          .reverse()
          .slice(startNum, endNum)
          .map(({ id, title, body }) => {
            return (
              <Li key={id}>
                <span className='idName'>{id}</span>
                <span className='listBody'>{body}</span>
              </Li>
            );
          })}
      </Ul>
      <Pagination
        total={lists.length}
        page={page}
        setPage={setPage}
        listPerPage={LIST_PER_PAGE}
      />
    </div>
  );
};

export default ListTotal;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #b66666;
  text-align: center;
  margin-top: 2rem;
`;

const Ul = styled.ul`
  font-size: 0.875rem;
  margin: 3rem auto;
  width: 1000px;
`;

const Li = styled.li`
  border-bottom: 1px solid #ccc;
  padding: 0.5rem 1rem;
  display: flex;
  & > .idName {
    width: 4rem;
    color: #333;
  }
  & > .listBody {
    margin-left: 1.5rem;
    width: 50rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #666;
    text-align: left;
  }
  & > .listBody:hover {
    color: #000;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;
