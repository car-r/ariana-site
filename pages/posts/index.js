import React from 'react'
import { GraphQLClient } from 'graphql-request';
import Image from 'next/image';
import Link from 'next/link';
import PostCard from '../../components/PostCard';
import { getPosts } from '../../lib/data';

export async function getStaticProps() {
    // Moved below to data.js file to house graphQL requests
    // const graphcms = new GraphQLClient('https://api-us-west-2.graphcms.com/v2/ckxpk6xgz05zt01z6gtuqhy32/master')

    // const { posts } = await graphcms.request(
    //     `
    //         {
    //             posts(orderBy: date_DESC) {
    //                 title
    //                 slug
    //                 date
    //                 description
    //                 featureImage {
    //                     url
    //                 }
    //                 youTubeLink
    //             }
    //         }
    //     `
    // )

    const posts = await getPosts()
    return {
        props: {
            posts,
            
        },
    }

}

const home = ({ posts }) => {
    console.log(posts)
    return (
        <div className="w-11/12 max-w-6xl mx-auto">
            <div className="my-12">
                {posts.map(({ title, date, description, featureImage, slug, youTubeLink }) => (
                    <PostCard 
                        key={slug} 
                        title={title} 
                        date={date} 
                        description={description} 
                        featureImage={featureImage} 
                        slug={slug}
                        youTubeLink={youTubeLink}
                    />
                ))}
            </div>
        </div>
        
        
    )
}

export default home
