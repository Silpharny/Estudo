//import './globals.css'

export const metadata = {
  title: 'Roteamento',
  description: 'Roteamento com Next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
