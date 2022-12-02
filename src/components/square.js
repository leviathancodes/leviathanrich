import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Levi } from './leviathanRich.svg';

const SquareStyle = styled.div`
  background: #A2C4C9;
  display: flex;
  width: 20%;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

function Square() {
  return (
    <SquareStyle>
      <Levi />
    </SquareStyle>
  )
};

export default Square;

// <img src={leviathanRich} alt="A drawing of Mr. Leviathan Rich"/>
