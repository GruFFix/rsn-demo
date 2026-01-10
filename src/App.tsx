import { FC, lazy, Suspense } from 'react'
import { NotifyContainers } from 'react-simple-notify'

import { Hero } from '@/components/Hero'
import { Footer } from '@/components/Footer'

// Lazy load heavy Showcase component
const Showcase = lazy(() => import('@/components/Showcase').then(module => ({ default: module.Showcase })))

const ShowcaseLoader = () => (
  <div style={{
    minHeight: '800px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid rgba(139, 92, 246, 0.3)',
      borderTopColor: '#8b5cf6',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite'
    }} />
  </div>
)

export const App: FC = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<ShowcaseLoader />}>
        <Showcase />
      </Suspense>
      <Footer />
      <NotifyContainers />
    </>
  )
}
