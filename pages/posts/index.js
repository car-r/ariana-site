import React from 'react'
import { GraphQLClient } from 'graphql-request';
import Image from 'next/image';
import Link from 'next/link';
import PostCard from '../../components/PostCard';
import { getPosts } from '../../lib/data';

export async function getStaticProps() {

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
