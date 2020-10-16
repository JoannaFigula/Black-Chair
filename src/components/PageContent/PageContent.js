import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 50px 0;
  max-width: 46%;
  padding:20px;
  text-align: right;

    p {
    font-size: 18px;
    text-align: justify;
    line-height:1.5;
  }
  span {
    width:100%;
    font-size: 18px;
    font-weight:700;
    margin: 0;    
    font-style: italic;
  }
`;

const PageContent = ({paragraph, sign}) => (
  <Wrapper>
    <p>{paragraph}</p>
    <span>{sign}</span>
  </Wrapper>
)

export default PageContent;
