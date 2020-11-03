import React from 'react';
import Image from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {graphql} from 'gatsby';

export const query = graphql`
  query querySingleArticles ($slug: String!) {
  mdx(frontmatter: {slug: {eq:$slug}}){
    frontmatter{
          title
          slug
          featuredImage{
            childImageSharp{
              fixed(width:800){
                ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    body
  }
}
`
const PostLayout = ({data}) => {
  // console.log(props);
  return(
    <div>
      <h1>{data.mdx.frontmatter.title}</h1>
      <Image fixed={data.mdx.frontmatter.featuredImage.childImageSharp.fixed} />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </div>
  );
}

export default PostLayout;
