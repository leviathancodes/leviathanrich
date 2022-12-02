import React from 'react';
import styled from 'styled-components';
import { Textfit } from 'react-textfit';
import words from '../../utils/words';

const Wrap  = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden; 
`
const Paragraph = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: center;
`
const Title = styled.h1`
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
`
const PLine = styled.a`
  display: flex;
  text-decoration: inherit;
  color: inherit;
  cursor: pointer;
`

const HomeSection = () => {
  return (
    <Wrap>
        <Title>LEVIATHAN RICH</Title>
      <Paragraph>
        <PLine href="https://linktr.ee/nomadfox">music *&nbsp;</PLine>
        <PLine href="https://www.etsy.com/shop/FetalMind">shop *&nbsp;</PLine>
        <PLine href="https://github.com/leviathancodes">code *&nbsp;</PLine>
        <PLine>contact *&nbsp;</PLine>
      </Paragraph>
      {/* {words.detailedWords.map(word => {
        return (
          <Textfit>{word}&nbsp;</Textfit>
        )
      })} */}
    </Wrap>
  )
}

export default HomeSection;