import './globals.css'
import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
 
const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefin',
})
 
export const metadata: Metadata = {
  title: 'Todo app',
  description: 'Challenge for Frontmentor.io',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${josefin.className} text-base`}>{children}</body>
    </html>
  )
}
