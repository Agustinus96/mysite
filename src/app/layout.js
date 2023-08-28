import './globals.css'
import './favicon.ico'
import { Inter } from 'next/font/google'
import Navbar from './navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hi! I am Agustinus',
  description: 'Personal website',
}

export default function RootLayout({ children }) {
  return (
    <html class="bg-stone-200">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <div>
        <Navbar />
        </div>
        {children}</body>
    </html>
  )
}
