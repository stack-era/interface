import { useEffect } from 'react'
import { useDarkModeManager } from 'theme/components/ThemeToggle'

const initialStyles = {
  width: '200vw',
  height: '200vh',
  transform: 'translate(-50vw, -100vh)',
}
const backgroundResetStyles = {
  width: '100vw',
  height: '100vh',
  transform: 'unset',
}

type TargetBackgroundStyles = typeof initialStyles | typeof backgroundResetStyles

const backgroundRadialGradientElement = document.getElementById('background-radial-gradient')
const setBackground = (newValues: TargetBackgroundStyles) =>
  Object.entries(newValues).forEach(([key, value]) => {
    if (backgroundRadialGradientElement) {
      backgroundRadialGradientElement.style[key as keyof typeof backgroundResetStyles] = value
    }
  })

export default function RadialGradientByChainUpdater(): null {
  const [darkMode] = useDarkModeManager()

  // manage background color
  useEffect(() => {
    if (!backgroundRadialGradientElement) {
      return
    }

    setBackground(backgroundResetStyles)
    const lightGradient =
      'radial-gradient(100% 100% at 50% 0%, rgba(184, 188, 255, 0.51) 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF'
    const darkGradient = 'linear-gradient(180deg, #202738 0%, #070816 100%)'
    backgroundRadialGradientElement.style.background = darkMode ? darkGradient : lightGradient
  }, [darkMode])
  return null
}
