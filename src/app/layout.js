"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import {SSRProvider} from 'react-aria';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <head>
      <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="csrf-token" content="{{ csrf_token() }}" />
          
      </head>
      <body className={inter.className}>
        <div className='main h-full w-full'>
          <Header/>
          <SSRProvider> 
            {children}
            </SSRProvider>
            <ToastContainer/>
          
        </div>
        </body>
    </html>
  )
}
