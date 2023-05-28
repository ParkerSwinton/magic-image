import { Navbar } from '@/components/Navbar'
import './globals.css'
export const metadata = {
  title: 'Magic Image',
  description: 'Mobile Car Detailing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='bg-zinc-950 font-sans text-zinc-50'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
