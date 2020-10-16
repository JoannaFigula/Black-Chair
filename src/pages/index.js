import React from "react"
import Image from 'gatsby-image';
import Post from "../components/Post/Post";
import styled from 'styled-components';
import Button from "../components/Button/Button";
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

const ContainerWrapper = styled.div`
  width:100%;
  height: calc(100vh - 200px);
`
const ContentWrapper = styled.div`
  width: 90%;
  height: calc(100vh - 80px);
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
     a {
    text-decoration: none;
    color: inherit;
  }
  
  h1 {
    font-size: 75px;
    margin: 0;
    width: 50%;
    line-height: 0.9;
    span {
      color:#1ABC9C;
      font-weight:700;
    }
  }

  p {
    font-size: 18px;
    line-height:1.5;
    margin: 30px 0 40px;
    width: 48%;
    text-align: justify;
    // border:1px solid blue;
    
  }
`;

const ImageWrapper = styled(Image)`
  position: absolute !important;
  top:170px;
  right: -20;
  width: 35%;
  // height: calc(100vh - 80px);
  object-fit: cover;
`;

const IndexPage = ({data}) => (
  <ContainerWrapper>
        <ImageWrapper fluid={data.file.childImageSharp.fluid} />
        <ContentWrapper>
          {/*<Post></Post>*/}
          <h1>SIT <span>ON</span> OUR <span>CHAIR</span></h1>
          <p> While artists work from real to the abstract, architects must work from
            the abstract to the real.
            Lorem ipsum dolor sit amet dui. Cras enim vel blandit vestibulum iaculis.
            Sed et netus et pede massa, feugiat quam tempus enim. Lorem ipsum dolor sit amet dui. </p>
          <Button><Link to="/articles">see more</Link></Button>
        </ContentWrapper>
        <Post></Post>
  </ContainerWrapper>
)

export const query = graphql`
  {
    file(name: { eq: "black_chair" }) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage;
