import React from 'react';
import { graphql, useStaticQuery  }  from 'gatsby';
import styled from 'styled-components';

const Paragraph = styled.p`
  margin:0;
  padding:0;
  font-size:18px;
  font-style:italic;
  // font-weight:700;
  color: black;
  text-align:right;
`

const query = graphql`
    {
        site {
        siteMetadata {
        title
        }
      }
    }
`;

const Post  = () => {
  const data = useStaticQuery(query);
  // console.log(data);
  return (
    <Paragraph> {data.site.siteMetadata.title } </Paragraph>
  )
}

// const Post  = () => {
//   const data = useStaticQuery(graphql`
// 	{
//       site {
//       siteMetadata {
//       title
//       }
//     }
//   }
// `);
//   return <p> {data.site.siteMetadata.title } </p>
// }

export default Post;
