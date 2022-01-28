
import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";
import { Box, Heading } from "@chakra-ui/react";
import NextImage from "next/image";
const PostSlug = ({ posts }) => {

    const { title,
        categories: { name: categoryName, slug: categroySlug },
        thumbnail: { url: thumbnailURL },
        content: { html: body }
    } = posts[0];

    return (
        <div>
            <h1> {title} </h1>
            <p> {categoryName} </p>
            <NextImage width={400} height={400} src={thumbnailURL} objectFit="cover" />
            <div dangerouslySetInnerHTML={{ __html: body }} />
        </div>
    );
};

export default PostSlug;

export async function getStaticPaths() {
    const { data } = await client.query({
        query: gql`query{
            posts {
                slug
            }
        }`
    });
    const { posts } = data;
    const paths = posts.map(posts => ({
        params: { slug: posts.slug }
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const slug = params.slug;
    const { data } = await client.query({
        query: gql`
            query getPostBySlug ($slug: String!) {
            posts (where: {slug: $slug}) {
                slug
                title
                content {
                    html
                }
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
