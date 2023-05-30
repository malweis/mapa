"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <head>
      <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          
      </head>
      <body className={inter.className}>
        <div className='main h-full w-full'>
          <Header/>
          {children}
          
        </div>
        </body>
    </html>
  )
}
