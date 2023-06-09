import { Header } from '@/components/Header/header'
import './globals.css'
import { Saira } from 'next/font/google'
import { DefaltProvaiders } from '@/Providers/defaultProviders'
import { Footer } from '@/components/Footer/footer'


const saira = Saira({ 
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
 })

export const metadata = {
  title: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={saira.className}>

        <DefaltProvaiders>
        
          <Header/>
          <div style={{minHeight:'75vh'}}>
          {children}
          </div>  
          <Footer />
        </DefaltProvaiders>
      </body>
    </html>
  )
}

