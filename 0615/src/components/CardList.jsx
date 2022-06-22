import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import '../style/container.css';
const CardList = () => {
  const [cardData, setCardData] = useState([]);

  const dataUrl = 'http://localhost:3000/data/cardData.json';
  useEffect(() => {
    const fnc = async () => {
      const response = await axios.get(dataUrl);
      setCardData(response.data);
    };
    fnc();
  }, []);

  /* useEffect(() => {
    axios('http://localhost:3000/data/cardData.json')
      .then((response) => response.data)
      .then((data) => setCardData(data))
      .catch((error) => {
        console.log(error);
      });
  }, []); */

  /* useEffect(() => {
    fetch('http://localhost:3000/data/cardData.json')
      .then((response) => response.json())
      .then((data) => setCardData(data))
      .catch((error) => {
        console.log(error);
      });
  }, []); */

  return (
    <div className='card_area'>
      <h3>CardList</h3>
      <ul className='card_wrap'>
        {cardData.map((card) => {
          return (
            <>
              <Card key={card.id} card={card} />
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default CardList;
