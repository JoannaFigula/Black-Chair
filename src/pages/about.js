import React from "react";
import styled from 'styled-components';
import {graphql} from "gatsby";
import Image from "gatsby-image";
import PageInfo from "../components/PageInfo/PageInfo";
import PageContent from "../components/PageContent/PageContent"

const ContentWrapper = styled.div`
  width:auto;
`;
const Border = styled.div`
    margin:0;
    padding:0;
    width: 50%;
    height: 5px;
    background-color: #1ABC9C;
`
const ImageWrapper = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 50%;
  height: 100vh;
  object-fit: cover;
`;

const pageHeader = {
  title: 'about',
  paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
}

const pageContent = {
  paragraph: `The success of the company Thonet GmbH in Frankenberg, Germany, began with the work of master joiner Michael Thonet (1796–1871). Since he founded his first woodworking shop in 1819 in Boppard, the name Thonet has stood for high-quality, innovative and elegant furniture. Today, Thorsten Muck runs the company with its head offices and production facilities in Frankenberg. Michael Thonet's direct descendants in the fifth and sixth generation remain involved in the company's business as associates and sales partners. The collection comprises famous bentwood furniture, tubular steel classics from the Bauhaus era, and current designs by famous contemporary architects and designers.[3]

Often mispronounced "Tho-nay" the name is pronounced "toe-net" with a hard beginning and ending t.`,
  sign: 'Michael Thonet',
}

const AboutPage = ({data}) => (
  <>
    <ContentWrapper>
      <PageInfo title={pageHeader.title} paragraph={pageHeader.paragraph} />
      <Border />
      <PageContent paragraph={pageContent.paragraph} sign={pageContent.sign} />
      <Border />
    </ContentWrapper>
    <ImageWrapper fluid={data.file.childImageSharp.fluid} />
  </>
)

export const query = graphql`
  {
    file(name: { eq: "about" }) {
      childImageSharp {
        fluid(maxWidth: 700, maxHeight: 700, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage;
