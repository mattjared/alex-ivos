import Image from 'next/image'
import Tiles from "./Tiles"
import Contact from "./Contact"
import BookTrainingComp from "./BookTrainingComp"
import Footer from "./Footer"

export default function Home() {
  return (
    <main className='bg-gray-100'>
      <section className="py-10 md:pt-24 md:pb-12 container max-w-screen-xl mx-auto px-4 text-center">
        <Image src="/me.jpg" alt="" width="250" height="250" className="mx-auto mb-16 rounded-lg" />
        <h1 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">Alex Ivos</h1>
        <h2 className='text-6xl font-bold'>Account Executive @ Vercel</h2>
        <p className="font-normal text-gray-600 text-md md:text-xl my-16">Vercel Enterprise</p>
      </section>
      <Contact />
      <Tiles />
      <BookTrainingComp />
      <Footer />
    </main>
  )
}
