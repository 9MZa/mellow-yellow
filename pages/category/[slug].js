import React from "react";
import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";
import { ThreeColumn } from "@/components/PostLayout";
import { HeroCategory } from "@/components/Hero";
import { NextSeo } from "next-seo";

export default function CategorySlug({ posts }) {

    const { categories: { name: categoryName } } = posts[0];

    return (
        <>
            <NextSeo
                title={`${categoryName} Category`}
                description={`Show post on ${categoryName}`}
                openGraph={{
                    title: `${categoryName} category`,
                    description: `Show post on ${categoryName}`,
                }}
            />
            <HeroCategory name={categoryName} total={posts.length} />
            <ThreeColumn post={posts} />
        </>
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
                excerpt
                publishedAt
                categories {
                    name
                }
                content{
                    text
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