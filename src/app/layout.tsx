import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'


const inter = Poppins({ weight: ["500", "600", "800", "300"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Rental Mobil Murah Makassar',
  description: 'cv.rencardtallasacity makassar adalah penyedia jasa rental mobil termurah dan terpercaya di area makassar yang berdiri sejak tahun 2000 an dan tentunya sudah banyak pengalaman yang berkaitan dengan jasa rental mobil.',
  icons: {
    icon: ['/next.svg']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}
