import React from 'react';
import styled from 'styled-components';
import StyleWrapper from './styleWrap';
import Square from './components/square';
import HomeSection from './components/home/homeSection';

const Section = styled.div`
width: 100%;
height: 100%;

`
function App() {
  return (
        <StyleWrapper>
          <HomeSection />
          <Square />
          <Section />
        </StyleWrapper>
  );
}

export default App;
