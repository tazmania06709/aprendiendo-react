import { useState } from 'react'
// import withResults from '../../mocks/with-result.json'
// import withoutResults from '../../mocks/no-result.json'
import { searchMovies } from '../../services/movies'


export function usaMovies({ search }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [movies, setMovies] = useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [error, setError] = useState(null)

    const getMovies = async () => {
        try {
            setLoading(true)
            setError(null)
            const newMovies = await searchMovies({ search })
            setMovies(newMovies)
        } catch (error) {
            setError(error.message)
        } finally {
            // esto siempre se va ejecutar despues del try y el catch
            setLoading(false)
        }
    }

    return { movies, getMovies, loading, error }

}