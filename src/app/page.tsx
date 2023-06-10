import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='min-v-screen align-center flex min-h-screen flex-col gap-4 px-10 pt-20'>
      <div className='flex w-min flex-col gap-2 sm:gap-4'>
        <h1 className='whitespace-nowrap text-4xl font-extrabold tracking-wide text-zinc-50 sm:text-6xl'>
          Love your car <br />
          like it's brand
          <br />
          new again.
        </h1>
        <h2 className='whitespace-nowrap text-lg font-bold text-zinc-400 sm:text-xl'>
          We provide high quality mobile
          <br />
          car detailing for a fraction of the
          <br />
          price.
        </h2>
        <Link href='/contact' className='mt-3 w-min whitespace-nowrap rounded bg-sky-500 px-2 py-1 text-xl font-bold'>
          Book Your Premium Detail
        </Link>
      </div>
    </main>
  )
}
