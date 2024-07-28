import Navbar from '@/components/Navbar'
import '../css/globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import NextNProgress from 'nextjs-progressbar';
import NextTopLoader from 'nextjs-toploader';
import GoogleAnalytics from '@/components/GoogleAnalytics';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Homepage - Hussnain Ahmad',
  description: 'Porfolio of Hussnain Ahmad',
}

export default function RootLayout({ children }) {
  return (
    <html  data-theme="light" lang="en">
      <body>
        <NextTopLoader
  color="#e779c1"
  initialPosition={0.08}
  crawlSpeed={200}
  height={3}
  crawl={true}
  showSpinner={true}
  easing="ease"
  speed={200}
  shadow="0 0 10px #2299DD,0 0 5px #2299DD"
/>
<GoogleAnalytics />
    <Navbar/>
        
    {children}
    <Footer/>
      </body>
    </html>
  )
}
