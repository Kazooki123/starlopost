import React from 'react'

export const metadata = {
  title: 'About',
  description: 'About StarloPost',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
