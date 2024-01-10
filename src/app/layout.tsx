import { Container } from '@/components'
import '@/style/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wen Chan App',
  description: 'A simple and efficient problem logging app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <div>所有页面</div>
          {children}
        </Container>
      </body>
    </html>
  )
}
