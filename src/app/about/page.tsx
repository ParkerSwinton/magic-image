import { AccordionItem } from '@/components/AccordionItem'
import { faqData } from '@/utils/faq'

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
