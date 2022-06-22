import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { card } = useParams();
  const cardNum = Number(card);
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/data/cardData.json`)
      .then((res) => res.json())
      .then((data) => setDetails(data[cardNum - 1]));
  }, [cardNum]);
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
