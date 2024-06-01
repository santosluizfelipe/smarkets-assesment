import React from "react";
import { CardWrapper, Title, Date, ButtonWrapper, Value, GreenButton, BlueButton } from "./Card.style";

const Card = ({title, date, greenB, blueB, value}) => {



  const splitTitle = (title) => {
    const words = title.split(' ');
    const pairs = [];
    for (let i = 0; i < words.length; i += 2) {
      pairs.push(words.slice(i, i + 2).join(' '));
    }
    return pairs;
  };

  return (
    <CardWrapper>
        <Title>
        {splitTitle(title).map((pair, index) => (
          <div key={index}>{pair}</div>
        ))}
      </Title>
      <Date>{date}</Date>
      <ButtonWrapper>
      <GreenButton>{greenB}</GreenButton>
      <BlueButton >{blueB}</BlueButton>
      </ButtonWrapper>
      <Value>{value}</Value>
    </CardWrapper>
  );
}

export default Card;