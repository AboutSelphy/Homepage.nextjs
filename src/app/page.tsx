'use client'
import Switchtheme from '@/components/theme/switchtheme';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-background text-text flex flex-col items-center justify-center gap-6 transition-colors">
      <h1 className="text-4xl font-bold">tenkaiStudio</h1>
      <p className="text-text-muted">
        This is a test of your OKLCH dark/light theme with persistent toggle.
      </p>
      <div className="mt-6 w-1/2 h-20 border border-border rounded-lg flex items-center justify-center shadow">
        Default Card
      </div>

      <div className="flex gap-4">
        <Switchtheme />
      </div>
    </main>
  )
}
