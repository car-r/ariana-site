import Head from 'next/head'
import Accomplishments from '../components/Accomplishments'
import HeroSection from '../components/HeroSection'
import Content from '../components/Content'
import Content2 from '../components/Content2'
import Skills from '../components/Skills'
import { getContentData } from '../lib/data'

export const getStaticProps = async () => {
  const contentData = await getContentData()
  console.log(contentData)
  return {
    props: {
      contentData,
    }
  }
}


export default function Home({contentData}) {
  return (
    <div className="flex flex-col w-full items-center min-h-screen bg-gray-100">
      <Head>
        <title>Ariana Richter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full flex-1 text-center bg-white ">
        
        <HeroSection />
        <Skills />
        <Accomplishments />
        <Content contentData={contentData}/>
        
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
