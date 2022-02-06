import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";
import { ThreeColumn } from "@/components/PostLayout";
import { HeroPost } from "@/components/Hero";
import {
  Box,
} from "@chakra-ui/react";

const title = "All Post";
const subtitle = " posts in here";

const AllPost = ({ posts }) => {

  return (
    <>
      <HeroPost title={title} subtitle={subtitle} total={posts.length} />
      <Box>
        <ThreeColumn post={posts} />
      </Box>
    </>
  );
};

export default AllPost;

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
              text
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


  return {
    props: {
      posts
    }
  };
}