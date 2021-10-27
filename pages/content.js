import React from 'react'
import Image from 'next/image'
import brl from '../public/BRL.png'
import admittedCarrier from '../public/admitted-carrier.png'
import threeReasons from '../public/three-reasons.png'

const content = () => {
    return (
        <div className="w-11/12 max-w-6xl mx-auto">
            <div className="my-12">
                <h1 className="text-2xl font-bold mb-4 lg:text-3xl">My Content</h1>
                    <div className="lg:grid grid-cols-2 pb-10 mb-14 border-b-2 border-gray-200">
                        <a href="https://www.youtube.com/watch?v=hN0x3EGZo5c"
                            className="cursor-pointer  hover:drop-shadow-lg"
                        >
                            <Image 
                                src={brl}
                                className="rounded-lg"
                            />
                        </a>
                        <div className="mt-2 flex flex-col lg:pl-7 lg:mt-4">
                            <h3 className="text-md font-semibold md:text-lg">Meet Ariana Richter | Broker Relationship Leader</h3>
                            <p className="font-thin text-sm md:text-base lg:text-base mb-2">Sep 13, 2021</p>
                            <p className="font-light text-sm md:text-base lg:text-base">Reintroducing Ariana Richter in her new role as a Broker Relationship Leader for Munich Re Specialty Insurance.</p>
                        </div>
                    </div>
                    <div className="lg:grid grid-cols-2 pb-10 mb-14 border-b-2 border-gray-200">
                        <a href="https://www.youtube.com/watch?v=VD-qN07sSyk"
                            className="cursor-pointer  hover:drop-shadow-lg"
                        >
                            <Image 
                                src={admittedCarrier}
                                className="rounded-lg"
                            />
                        </a>
                        <div className="mt-2 flex flex-col lg:pl-7 lg:mt-4">
                            <h3 className="text-md font-semibold md:text-lg">Benefits of Placing Business with an Admitted Carrier</h3>
                            <p className="font-thin text-sm md:text-base lg:text-base mb-2">May 1, 2021</p>
                            <p className="font-light text-sm md:text-base lg:text-base">Learn the benefits of working with Admitted carriers for you and your customers!</p>
                        </div>
                    </div>
                    <div className="lg:grid grid-cols-2">
                        <a href="https://www.youtube.com/watch?v=VD-qN07sSyk"
                            className="cursor-pointer  hover:drop-shadow-lg"
                        >
                            <Image 
                                src={threeReasons}
                                className="rounded-lg"
                            />
                        </a>
                        <div className="mt-2 flex flex-col lg:pl-7 lg:mt-4">
                            <h3 className="text-md font-semibold md:text-lg">Three Reasons to Say Yes to American Modern</h3>
                            <p className="font-thin text-sm md:text-base lg:text-base mb-2">Apr 7, 2021</p>
                            <p className="font-light text-sm md:text-base lg:text-base">Sharing the top three reasons to do business with American Modern Insurance Group</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default content
