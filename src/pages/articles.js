import React from "react";
import {graphql} from "gatsby"
import ArticlePreview from '../components/ArticlePreview/ArticlePreview';
import PageInfo from '../components/PageInfo/PageInfo';
import styled from 'styled-components';

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;

const pageData = {
  title: 'articles',
  paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
}

const ArticlesPage = ({data}) => {
  const {allMdx:{nodes}} = data;
  return (
    <>
      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
      <ArticlesWrapper>
        {nodes.map(({excerpt, frontmatter: {title, slug, info_1, info_2, featuredImage}}) => (
          <ArticlePreview title={title}
                          exerpt={excerpt} info_1={info_1} info_2={info_2} image={featuredImage.childImageSharp.fluid} />
        ))}
      </ArticlesWrapper>
    </>
  );
}

export const query = graphql`
{
    allMdx {
        nodes {
          frontmatter{
            title
            info_1
            info_2
            slug
            featuredImage{
              childImageSharp{
                fluid(maxWidth:500, maxHeight:320){
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          excerpt (pruneLength:20)
        }
    }
}    
`


export default ArticlesPage;
