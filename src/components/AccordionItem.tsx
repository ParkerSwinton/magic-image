'use client'
import { useState } from 'react'

interface AccordionItemProps {
  question: string
  answer: string
}

export const AccordionItem = ({ question, answer }: AccordionItemProps) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className='w-full py-3'>
      <div
        className='flex justify-between  hover:cursor-pointer hover:text-sky-500'
        onClick={() => setIsActive((prev) => !prev)}
      >
        <div className={`font-bold ${isActive ? 'text-sky-500' : ''}`}>{question}</div>
        <div className={`font-bold ${isActive ? 'text-sky-500' : ''}`}>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <p className='pt-2 text-zinc-400'>{answer}</p>}
    </div>
  )
}
