import {
  Container,
  Heading,
  Text,
  Button,
  Box,
  Link
} from "@chakra-ui/react";

import Card from "@/components/Card";

import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";

export default function Home({ posts }) {

  console.log(posts);

  return (
    <>
      <Card />



    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`query {
        posts(orderBy: createdAt_DESC) {
          title
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