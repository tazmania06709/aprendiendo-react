import { useEffect, useState } from 'react'
import './App.css'



const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // console.log('effect', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      // console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // cleanup:
    // -> cuando el componente se desmonta
    // -> cuando cambian las dependencias, antes de ejecutar
    //    el efecto de nuevo
    return () => { // cleanup method
      window.removeEventListener('pointermove', handleMove)
      setPosition({ x: 0, y: 0 })
    }

  }, [enabled])

  // [] -> solo se ejecuta una vez cuando se monta el componente
  // [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined -> se ejecuta cada vez que se renderiza el componente

  // change body className
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px,${position.y}px)`,
      }} />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"}
      </button>
    </>
  )
}

function App() {
  // const [mounted, setMounted] = useState(true)

  return (
    <main>
      <h3>Mouse Follower</h3>
      <FollowMouse />
      {/* {mounted && <FollowMouse />}
      <button>Toggle mounted FollowMouse component</button>
      <button onClick={() => setMounted(!mounted)}>
        {mounted ? "Desmontar" : "Montar"}</button> */}
    </main>

  )
}

export default App
