import React from "react";
import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";
import { ThreeColumn } from "@/components/PostTemplate";

export default function CategorySlug({ posts }) {

    return (
        <div>
            <ThreeColumn post={posts} />
        </div>
    );
}


export async function getStaticPaths() {
    const { data } = await client.query({
        query: gql`query{
            categories {
                slug
                name
            }
        }`
    });
    const { categories } = data;
    const paths = categories.map(categories => ({
        params: { slug: categories.slug }
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const slug = params.slug;
    const { data } = await client.query({
        query: gql`
            query getPostByCategory ($slug: String!) {
            posts (where: {categories: {slug: $slug}},stage:PUBLISHED) {
                slug
                title
                publishedAt
                categories {
                    name
                }
                thumbnail {
                    url
                }
            }
        }`,
        variables: { slug }
    });
    const { posts } = data;

    return {
        props: { posts }
    };
}