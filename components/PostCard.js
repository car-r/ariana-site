import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({ title, date, description, featureImage, slug, youTubeLink }) => {
    return (
        <div className="lg:grid grid-cols-2 pb-10 mb-14 border-b-2 border-gray-200">
            <a href={youTubeLink}
                className="cursor-pointer  hover:drop-shadow-lg"
            >
                <Image 
                    src={featureImage.url}
                    className="rounded-lg"
                    width='1080'
                    height='600'
                />
            </a>
            <div className="mt-2 flex flex-col lg:pl-7 lg:mt-4">
                <h3 className="text-md font-semibold md:text-xl lg:text-2xl">
                    <Link href={`/posts/${slug}`}>{title}</Link>
                </h3>
                <p className="font-thin text-sm md:text-base lg:text-lg mb-2">{date}</p>
                <p className="font-light text-sm md:text-base lg:text-lg">{description}</p>
            </div>
        </div>
    )
}

export default PostCard
