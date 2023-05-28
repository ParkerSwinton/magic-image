'use client'
import { Pacifico } from 'next/font/google'
const pacifico = Pacifico({ subsets: ['cyrillic'], weight: '400' })

import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className='fixed w-full'>
      <div className='flex h-14 items-center justify-between p-4'>
        <Link className={`text-3xl ${pacifico.className}`} href='/'>
          Magic<span className='pl-0.5 text-sky-500'>Image</span>
        </Link>
        <ul className='flex items-center gap-10 text-lg text-gray-400'>
          <Link className='hover:text-sky-500' href='/'>
            HOME
          </Link>
          <Link className='hover:text-sky-500' href='/services'>
            SERVICES
          </Link>
          <Link className='hover:text-sky-500' href='/about'>
            ABOUT
          </Link>
          <Link
            className='rounded bg-sky-500 px-3 font-bold text-zinc-50 transition hover:bg-zinc-50 hover:text-sky-500'
            href='contact'
          >
            CONTACT
          </Link>
        </ul>
      </div>
    </nav>
  )
}
