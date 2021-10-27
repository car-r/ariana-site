import Head from 'next/head'
import Image from 'next/image'
import Accomplishments from '../components/Accomplishments'
import Skills from '../components/Skills'
import profilePic from '../public/headshot.jpg'


export default function Home() {
  return (
    <div className="flex flex-col w-full items-center min-h-screen bg-gray-100">
      <Head>
        <title>Ariana Richter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full flex-1 text-center bg-white ">
        <div className="items-center max-w-6xl mx-auto lg:flex lg:w-11/12 justify-around my-20 ">
          <div className="text-center flex flex-col mb-8 lg:mr-10 lg:mb-0 lg:text-left justify-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm Ariana.
            </h1>
            <h3 className="text-xl lg:text-2xl mb-2 lg:mb-0">
              Business development and sales professional
            </h3>
            <h2 className="lg-text-lg font-thin mb-4">
              I'm here to build long lasting relationships with clients.
            </h2>
            <a href="https://www.linkedin.com/in/arianarichter24" 
              className="mb-2 py-3 w-10/12 mx-auto lg:w-5/12 lg:mx-0 lg:mb-0 bg-gray-200 rounded-lg hover:bg-gray-400 hover:text-gray-100 transition ease-in-out text-center
            ">
              <button >Connect with me</button>
            </a>
          </div>
          <div className="p-0 m-0">
            <Image 
              src={profilePic}
              alt="ariana richter"
              width={250}
              height={325}
              className="rounded-lg"
            />
          </div>
        </div>
        <Skills />
        <Accomplishments />
        
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
