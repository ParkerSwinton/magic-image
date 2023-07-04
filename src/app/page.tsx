import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='min-v-screen align-center flex min-h-screen flex-col items-center justify-center gap-4 px-10  sm:flex-row sm:gap-12'>
      <div className='flex w-min flex-col gap-2 sm:gap-4'>
        <h1 className='whitespace-nowrap text-4xl font-extrabold tracking-wide text-zinc-50 sm:text-6xl'>
          Love your car <br />
          {`like it's brand`}
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
      <div className='h-64 w-64 sm:h-96 sm:w-96'>
        <Image src='/temp.webp' width={1200} height={1200} alt='Car' className='h-full w-full rounded object-cover' />
      </div>
    </main>
  )
}
