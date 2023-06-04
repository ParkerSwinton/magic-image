'use client'
import { Pacifico } from 'next/font/google'
const pacifico = Pacifico({ subsets: ['cyrillic'], weight: '400' })

import Link from 'next/link'
import React, { useState } from 'react'

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className='fixed w-full bg-zinc-950'>
      <div className='z-50 divide-y  divide-zinc-800 sm:flex sm:items-center sm:justify-between sm:divide-y-0 sm:px-4 sm:py-3'>
        <div className='flex items-center justify-between  px-4 py-3 sm:p-0'>
          <Link
            className={`text-2xl ${pacifico.className} sm:text-3xl`}
            href='/'
          >
            Magic<span className='pl-0.5 text-sky-500'>Image</span>
          </Link>
          <button
            type='button'
            className='text-zinc-50 hover:text-sky-500 focus:text-sky-500  sm:hidden'
            onClick={() => setOpen((curr) => !curr)}
          >
            <svg viewBox='0 0 24 24' className='h-6 w-6 fill-current'>
              <path
                visibility={open ? 'visible' : 'hidden'}
                fillRule='evenodd'
                d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
              />
              <path
                visibility={!open ? 'visible' : 'hidden'}
                fillRule='evenodd'
                d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
              />
            </svg>
          </button>
        </div>
        <nav
          className={`${
            open ? 'flex' : 'hidden'
          } flex-col items-center text-lg text-gray-400 sm:flex sm:flex-row sm:gap-10`}
        >
          <Link
            className='w-full bg-zinc-950 py-1 text-center hover:bg-zinc-800 hover:text-sky-500 sm:hover:bg-inherit'
            href='/'
            onClick={() => setOpen(false)}
          >
            HOME
          </Link>

          <Link
            className='w-full bg-zinc-950 py-1 text-center hover:bg-zinc-800 hover:text-sky-500 sm:hover:bg-inherit'
            href='/services'
            onClick={() => setOpen(false)}
          >
            SERVICES
          </Link>
          <Link
            className='w-full bg-zinc-950  py-1 text-center hover:bg-zinc-800 hover:text-sky-500 sm:hover:bg-inherit'
            href='/about'
            onClick={() => setOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            className='w-full rounded bg-sky-500 px-3 text-center font-bold text-zinc-50 transition hover:bg-zinc-50 hover:text-sky-500'
            href='/contact'
            onClick={() => setOpen(false)}
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  )
}
