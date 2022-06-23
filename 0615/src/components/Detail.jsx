import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { card } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/card?id=${card}`)
      .then((res) => res.json())
      .then((data) => setDetails(data[0]));
  }, [card]);
  /* 
  const cardList = details.filter(
    (element) => Number(element.id) === Number(card)
  ); */
  console.log(details);
  return (
    <div>
      <h2>{details.title}</h2>
      <img src={`${details.imgUrl}`} alt='' />
      <p>{details.content}</p>
    </div>
  );
};

export default Detail;
