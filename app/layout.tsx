import type { Metadata } from 'next'
import { Sidebar } from '@/components/Sidebar'
import { HealthBar } from '@/components/HealthBar'
import './globals.css'

export const metadata: Metadata = {
  title: 'drzava.gov.si – Portal države Slovenije',
  description: 'Pregled stanja države v realnem času.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sl">
      <body>
        <div className="app">
          <Sidebar />
          <main className="main">
            <HealthBar />
            <div className="content">{children}</div>
          </main>
        </div>
      </body>
    </html>
  )
}
