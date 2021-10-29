import Head from 'next/head'
import Accomplishments from '../components/Accomplishments'
import HeroSection from '../components/HeroSection'
import Skills from '../components/Skills'


export default function Home() {
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
