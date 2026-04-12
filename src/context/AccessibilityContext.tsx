import { createContext, useContext, useEffect, useState } from 'react'

interface AccessibilityContextType {
  highContrast: boolean
  toggleHighContrast: () => void
  fontSize: 'normal' | 'large' | 'xlarge'
  setFontSize: (size: 'normal' | 'large' | 'xlarge') => void
}

const AccessibilityContext = createContext<AccessibilityContextType | null>(null)

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [highContrast, setHighContrast] = useState<boolean>(() => {
    return localStorage.getItem('highContrast') === 'true'
  })

  const [fontSize, setFontSizeState] = useState<'normal' | 'large' | 'xlarge'>(() => {
    const stored = localStorage.getItem('fontSize')
    return (stored as 'normal' | 'large' | 'xlarge') || 'normal'
  })

  useEffect(() => {
    const root = document.documentElement
    if (highContrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }
    localStorage.setItem('highContrast', String(highContrast))
  }, [highContrast])

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('text-base-normal', 'text-base-large', 'text-base-xlarge')
    const sizeMap = { normal: '17px', large: '20px', xlarge: '23px' }
    root.style.fontSize = sizeMap[fontSize]
    localStorage.setItem('fontSize', fontSize)
  }, [fontSize])

  const toggleHighContrast = () => setHighContrast(v => !v)
  const setFontSize = (size: 'normal' | 'large' | 'xlarge') => setFontSizeState(size)

  return (
    <AccessibilityContext.Provider value={{ highContrast, toggleHighContrast, fontSize, setFontSize }}>
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext)
  if (!ctx) throw new Error('useAccessibility must be used inside AccessibilityProvider')
  return ctx
}
