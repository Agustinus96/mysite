import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hi! I am Agustinus',
  description: 'Personal website',
}

export default function RootLayout({ children }) {
  return (
    <html class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 backdrop-blur-sm" lang="en">
      <body className={inter.className}>
        <div>
        <Navbar />
        </div>
        {children}</body>
    </html>
  )
}
