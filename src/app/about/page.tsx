'use client'
import { AccordionItem } from '@/components/AccordionItem'

import Image from 'next/image'

const faqData = [
  {
    question: 'How does mobile detailing work?',
    answer:
      'Mobile detailing means we can come to you! All we need is a water and power source withing 80 feet of your vehicle.',
  },
  {
    question: 'Can I bring my car to you?',
    answer: 'Yes! You can drop your car off and leave the rest to us! (North Saanich)',
  },
  {
    question: 'Why should I choose you?',
    answer:
      'Being driven by passion and with such little overhead we can provide a professional service for a fraction of the cost. We are also incredibly flexible and can accommodate your needs!',
  },
]

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between p-12'>
      <h1 className='py-6 text-3xl font-extrabold'>About</h1>
      <div className='flex max-w-md  flex-col space-y-6 divide-y divide-zinc-100/20'>
        <p>
          Our detailer Jack is a Victoria born university student with a long standing passion for auto detailing.
          Professional quality is his promise, without the manic rates of the industry.
        </p>
      </div>
      <h1 className='py-6 text-3xl font-extrabold'>FAQs</h1>
      <div className='flex w-full max-w-md flex-col divide-y divide-zinc-100/20'>
        {faqData.map((item, index) => (
          <AccordionItem question={item.question} answer={item.answer} key={index} />
        ))}
      </div>
    </main>
  )
}
