import { Box } from "@chakra-ui/react";
import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";
import { ThreeColumn, SingleWide, SingleBig } from "@/components/PostLayout";

import Hero from "@/components/Hero";
export default function Home({ sixPosts, singlePost, lastPost }) {

  return (
    <>
      <Hero />
      <SingleWide post={singlePost} />
      <ThreeColumn post={sixPosts} />
      <SingleBig post={lastPost} />
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
          createdBy {
            name
          }
        }
      }      
  `
  });

  const { posts } = data;

  const singlePost = posts.slice(0, 1);
  const sixPosts = posts.slice(1, 7);
  const lastPost = posts.slice(7, 8);

  return {
    props: {
      singlePost,
      sixPosts,
      lastPost
    }
  };
}