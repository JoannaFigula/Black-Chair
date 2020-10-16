import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';

const PreviewWrapper = styled.div`
  // border:1px solid rgb(5, 4, 4, .3);
  position: relative;
  width: 90%;
  height: 350px;
  background-color: hsl(0, 0%, 95%);
  // background-image: url(${({background}) => background});
  background-size: cover;
`;

const PreviewInfoLabel = styled.div`  
  position: absolute;
  left: 0;
  bottom: 35px;
  width: 100%;
  min-height: 60px;
  background-color: rgba(255, 255, 255, .5);
  // color: #1ABC9C;
  padding: 5px 15px;
  h2,
  p {
    margin: 5px;
  }
`;

const Border = styled.div`
    margin:0;
    padding:0;
    width: 55%;
    height: 6px;
    background-color: #1ABC9C;
`

const ParagraphWrapper =styled.div`
    position: absolute;
    left: 0;
    top:0;
    padding:40px 30px;
    font-size: 13px;    
    width: 100%;
    min-height: 350px;    
    text-align: justify;
    p{
    // border:1px solid rgb(5, 4, 4, .3);
    color:inherit;
    line-height: 1.4;
    }
`

const StyledImage = styled(Image)`
    width:100%;
    height:350px;
    object-fit:cover;
`

const Preview = ({ title, excerpt, info_1, info_2, image}) => (
  <PreviewWrapper>
    <StyledImage fluid={image} />
    <ParagraphWrapper>
      <p>{info_1}</p>
      <p>{info_2}</p>
    </ParagraphWrapper>
    <PreviewInfoLabel>
      <h2>{title}</h2>
      <p>{excerpt}</p>
      <Border></Border>
    </PreviewInfoLabel>
  </PreviewWrapper>
);

export default Preview;
