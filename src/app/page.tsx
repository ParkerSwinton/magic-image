import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col space-y-3 px-10 pt-20'>
      <h1 className='text-4xl font-extrabold text-sky-500'>
        Love your car <br />
        like it's brand
        <br />
        new again.
      </h1>
      <h2 className='text-lg font-bold text-zinc-400'>
        We provide high quality mobile
        <br />
        car detailing for a fraction of the
        <br />
        price.
      </h2>
    </main>
  )
}
