import React from 'react'
import { GraphQLClient } from 'graphql-request';
import Image from 'next/image';

export async function getStaticProps() {
    const graphcms = new GraphQLClient('https://api-us-west-2.graphcms.com/v2/ckxpk6xgz05zt01z6gtuqhy32/master')


    const { posts } = await graphcms.request(
        `
            {
                posts(orderBy: date_DESC) {
                    title
                    slug
                    date
                    description
                    featureImage {
                        url
                    }
                }
            }
        `
    )

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
                {posts.map(({ title, date, description, featureImage, slug }) => (
                    <div className="lg:grid grid-cols-2 pb-10 mb-14 border-b-2 border-gray-200">
                        <a href="https://www.youtube.com/watch?v=hN0x3EGZo5c"
                            className="cursor-pointer  hover:drop-shadow-lg"
                        >
                            <Image 
                                src={featureImage.url}
                                className="rounded-lg"
                                width='1000'
                                height='600'
                            />
                        </a>
                        <div className="mt-2 flex flex-col lg:pl-7 lg:mt-4">
                            <h3 className="text-md font-semibold md:text-xl lg:text-2xl">{title}</h3>
                            <p className="font-thin text-sm md:text-base lg:text-lg mb-2">{date}</p>
                            <p className="font-light text-sm md:text-base lg:text-lg">{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        
    )
}

export default home
