import {
  Container,
  Heading,
  Text,
  Button,
  Box,
  Link
} from "@chakra-ui/react";
import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";
import { ThreeColumn } from "@/components/PostTemplate";

export default function Home({ sixPosts }) {

  return (
    <>
      <ThreeColumn post={sixPosts} />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`query {
        posts(orderBy: createdAt_DESC,stage:PUBLISHED) {
          title
          slug
          excerpt
          publishedAt
          content {
            html
            raw
          }
          thumbnail {
            url
          }
          categories {
            slug
            name
          }
        }
      }      
  `
  });

  const { posts } = data;

  const sixPosts = posts.slice(0, 6);
  return {
    props: {
      sixPosts
    }
  };
}