import Image from 'next/image'
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center px-12 pt-20'>
      <div className='flex flex-col gap-4'>
        <h1 className='whitespace-nowrap text-3xl font-extrabold tracking-wide text-zinc-50 sm:text-4xl'>
          {`We'd love to hear`}
          <br />
          from you!
        </h1>
        <h2 className='whitespace-nowrap text-lg font-bold text-zinc-400 sm:text-xl'>
          Ready for your dream car? Any
          <br />
          {`more questions? Don't hesitate to`}
          <br />
          reach out.
        </h2>
        <div className='flex flex-col items-center gap-4'>
          <div className='flex w-min flex-col items-center'>
            <AiOutlineMail className='text-sky-500' />
            <a href='mailto:imagic.detail@gmail.com' className='hover:text-sky-500'>
              imagic.detail@gmail.com
            </a>
          </div>
          <div className='flex w-min flex-col items-center'>
            <AiOutlinePhone className='text-sky-500' />
            <h3 className='whitespace-nowrap'>(250) 812-2975</h3>
          </div>
        </div>
      </div>
    </main>
  )
}
