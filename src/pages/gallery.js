import React from "react";
import styled from 'styled-components';
import Image from 'gatsby-image';
import { graphql} from 'gatsby';
import PageInfo from "../components/PageInfo/PageInfo";


const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;

const Img = styled(Image)`
  img{
  padding:0 40px 40px 0;
  object-fit: cover;
  }  
  picture {
  margin:10px;
  }
`;


const pageData = {
  title: 'gallery',
  paragraph: ` As nouns the difference between armchair and chair is that armchair is
  a chair with supports for the arms or elbows while chair is an item of
  furniture used to sit on or in comprising a seat, legs, back,
  and sometimes arm rests, for use by one person compare stool, couch,
  sofa, settee, love seat and bench.`
}

const GalleryPage = ({data}) =>(
  <>
    <PageInfo title={pageData.title} paragraph={pageData.paragraph}/>
    <GalleryWrapper>
      {data.allFile.nodes.map(image=> (
        <Img key={image.id} fixed={image.childImageSharp.fixed} />
        ))}

    </GalleryWrapper>
  </>
)

export const query = graphql`
{
    allFile(filter:{absolutePath:{regex: "/images/gallery/"}}) {
    nodes {
      id
      publicURL
      childImageSharp {
        fixed(width: 560, height: 400) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
     }
    }
  }
`

export default GalleryPage;
