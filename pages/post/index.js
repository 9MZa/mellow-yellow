import React, { useState } from "react";
import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";
import { ThreeColumn } from "@/components/PostLayout";
import { HeroPost } from "@/components/Hero";
import { NextSeo } from "next-seo";
import {
  Box,
  Flex,
} from "@chakra-ui/react";

const FilterButton = ({ btnName, filter }) => {
  return (
    <Flex
      justifyContent="center"
      flexWrap="wrap"
      my={10}
    >
      {btnName.map((item, i) => {
        return (
          <Box
            key={i}
            onClick={() => filter(item.name)}
            as="button"
            color="dark.100"
            bgColor="gray.100"
            w={28}
            h={10}
            mx={2}
            my={2}
            fontWeight="semibold"
            transition="all .3s ease-out"
            _hover={{
              bgColor: "primary.200"
            }}
          >
            {item.name}
          </Box>
        );
      })}
    </Flex>
  );
};


const title = "All Post";
const subtitle = " posts in here";

const AllPost = ({ posts }) => {

  const categoryName = ["All", ...new Set(posts.map(item => item.categories.name))];

  const allCategoryData = categoryName.map((item) => {
    const reform = { name: item };
    return (
      reform
    );
  });

  const [buttons, setButtons] = useState(allCategoryData);
  const [postItem, setPostItem] = useState(posts);

  const filter = (button) => {
    if (button === "All") {
      setPostItem(posts);
      return;
    }
    const filteredPosts = posts.filter(item => item.categories.name === button);
    setPostItem(filteredPosts);
  };

  return (
    <>
      <NextSeo
        title={title}
        description="all post in mellow yellow"
        openGraph={{
          title: title,
          description: "all post in mellow yellow",
        }}
      />
      <HeroPost title={title} subtitle={subtitle} total={posts.length} />
      <Box>
        <FilterButton btnName={buttons} filter={filter} />
        <ThreeColumn post={postItem} />
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
            createdBy{
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