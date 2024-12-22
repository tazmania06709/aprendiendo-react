import { useEffect, useState } from 'react'
import { useRef } from 'react'
import { usaMovies } from './components/hooks/useMovies.jsx'
import { Movies } from './components/Movies.jsx'
import './App.css'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {

    // Primer input del usuario
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }
    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)

  }, [search])

  return { search, updateSearch, error }
}


function App() {
  const { search, updateSearch, error } = useSearch('')
  const { movies, getMovies, loading } = usaMovies({ search })

  console.log('render')

  const counter = useRef() // valor que persiste entre renders
  if (counter.current === undefined) {
    counter.current = 0
  } else {
    counter.current++
  }

  const handledSubmit = (event) => {
    event.preventDefault()
    getMovies()
    // Usando el DOM y no react(useRef)
    // const { query } = Object.fromEntries(new window.FormData(event.target))

    // console.log({ search })
  }

  const handledChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    updateSearch(newQuery)
  }

  // useEffect(() => {
  //   if (query === '') {
  //     setError('No se puede buscar una película vacía')
  //     return
  //   }
  //   if (query.match(/^\d+$/)) {
  //     setError('No se puede buscar una película con un número')
  //     return
  //   }
  //   if (query.length < 3) {
  //     setError('La búsqueda debe tener al menos 3 caracteres')
  //     return
  //   }
  //   setError(null)

  // }, [query])

  return (
    <div className='page'>


      <header>
        <h1>Buscador de Películas</h1>
        <form className='form' onSubmit={handledSubmit}>
          <input style={
            {
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }
          } onChange={handledChange} value={search} name='query' type="text" placeholder='Avengers, Stars Wars, The Matrix,...' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
