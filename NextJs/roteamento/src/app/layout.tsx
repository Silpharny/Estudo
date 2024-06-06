import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Next.js Tutorial',
    template: '%s | Tutorial'
  },
  description: 'Roteamento com Next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">

      <body>
        
        <header style={ { backgroundColor:'lightblue', padding: '1rem', } }>
          <p>Header</p>
        </header>

        {children}

        <footer style={ { backgroundColor:'ghostwhite', padding: '1rem', } }>
          <p>Footer</p>
        </footer>
        </body>
    
    </html>
  )
}
