import React from 'react'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'About',
  description: 'About StarloPost',
}

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
