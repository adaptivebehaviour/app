import { Poppins, Quicksand, Merriweather, Roboto_Mono } from 'next/font/google'
import { revalidatePath } from 'next/cache'
import './globals.css'
import { Metadata } from 'next'

const sans = Poppins({ weight: ['400', '700'], subsets: ['latin'], display: 'swap', fallback: ['system-ui'], variable: '--font-poppins' })
const serif = Merriweather({weight: ['400', '700'], subsets: ['latin'], display: 'swap', fallback: ['system-ui'], variable: '--font-merriweather' })
const mono = Roboto_Mono({ weight: ['400', '700'], subsets: ['latin'], display: 'swap', fallback: ['system-ui'], variable: '--font-roboto_mono' })
const ui = Quicksand({ weight: ['500', '700'], subsets: ['latin'], display: 'swap', fallback: ['system-ui'], variable: '--font-quicksand' })

revalidatePath('/')

export const metadata: Metadata = {
  title: "App",
  description: "A template for creating Next.js applications",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
      <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable} ${ui.variable}`}>
          <body>{children}</body>
      </html>
    )
  }
