import React, { useState, useEffect } from 'react'
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import brl from '../public/BRL.png'
import admittedCarrier from '../public/admitted-carrier.png'
import threeReasons from '../public/three-reasons.png'


const Content = ({contentData}) => {
    const [index, setIndex] = useState(0)
    const [index1, setIndex1] = useState(1)

    const [transR, setTransR] = useState(false)
    const [transL, setTransL] = useState(false)

    // useEffect(() => {
    //     if(transL) {
    //         setTimeout(() => {
    //             setTransL(false)
    //             setIndex((index + 1) % images.length)
    //             setIndex1((index1 + 1) % images.length)
    //         }, 800 )
    //     }
    // }, [ transL])

    const images = [
        brl,
        admittedCarrier,
        threeReasons
    ]

    const urls = [
        "'https://www.youtube.com/watch?v=hN0x3EGZo5c'",
        "'https://www.youtube.com/watch?v=VD-qN07sSyk'",
        "'https://www.youtube.com/watch?v=NINSBaXhVD8'"
    ]

    const handlePrev = () => {
        setTransR(true)
        setTransL(false)

        const nextIndex = index - 1
        const nextIndex1 = index1 - 1

        if (nextIndex < 0) {
            setIndex(contentData.posts.length - 1)
        } else {
            setIndex(nextIndex)
        }

        if(nextIndex1 < 0) {
            setIndex1(contentData.posts.length - 1)
        } else {
            setIndex1(nextIndex1)
        }
    }

    const handleNext = () => {
        setTransL(true)
        setTransR(false)
        setIndex((index + 1) % contentData.posts.length)
        setIndex1((index1 + 1) % contentData.posts.length)
    }
    console.log(contentData.posts)
    return (
        
        <div className="w-full mx-auto bg-gray-100 py-32 flex flex-col">
            <h1 className="text-3xl font-bold md:text-4xl mb-6">Content</h1>
            <div className="flex mx-auto max-w-5xl w-11/12 items-center">
                <ArrowCircleLeftIcon 
                    className="h-8 w-8 mr-4 md:mr-6 lg:mr-10 lg:h-12 lg:w-12 cursor-pointer"
                    onClick={handlePrev}
                />
                    <div className="flex relative overflow-hidden w-11/12 mx-auto max-w-5xl">
                        {/* <a href={urls[index]} className="">
                            <Image className={` absolute object-contain z-20 rounded-xl }`} src={images[index]} alt=""/>
                        </a> */}
                        <a href={contentData.posts[index].youTubeLink} className="">
                            <Image className='rounded-xl' src={contentData.posts[index].featureImage.url} alt={contentData.posts[index].title} width='1080' height='600'/>
                        </a>
                        {/* <Image className={` absolute object-contain z-0 p-4 rounded-xl ${transL ? 'animate-slideR' : ''}`} src={images[index1]} alt=""/> */}
                    </div>
                <ArrowCircleRightIcon 
                    className="h-8 w-8 ml-4 md:ml-6 lg:ml-10 lg:h-12 lg:w-12 cursor-pointer"
                    onClick={handleNext}
                />
            </div>    
        </div>
    )

}

export default Content
