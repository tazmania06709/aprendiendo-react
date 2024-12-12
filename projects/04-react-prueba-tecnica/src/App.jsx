import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"
import { Otro } from "./Components/Otro"
import './App.css'


// Variante 1
// export function App() {
//     const [fact, setFact] = useState()
//     const [imageUrl, setImageUrl] = useState()

//     // no puedes usar React Query, SWR, axios, apolo, etc....
//     useEffect(() => {
//         // fecth devuelve una promesa en json, luego en data obtenemos la propiedad fact con al informacion que mostrar
//         fetch(CAT_ENDPOINT_RANDOM_FACT).then(res => res.json()).then(data => {
//             const { fact } = data
//             setFact(fact)

//             const firstWord = fact.split(' ')[0] // obtiene la primera palabra del arreglo
//             // const firstWord = fact.split(' ').slice(0,3).join(' ') // obtiene las 3 primeras palabra del arreglo
//             // const firstWord = fact.split(' ', 3).join() // obtiene las 3 primeras palabra del arreglo
//             console.log(firstWord)
//             fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`)
//                 .then(res => res.json())
//                 .then(response => {
//                     //const { tags } = response
//                     console.log(response)
//                     setImageUrl(tags)
//                 })
//         })
//     }, [])

//     return (
//         <main>
//             <h1>App de gatitos</h1>
//             <section>
//                 {/* // Renderizado condicional */}
//                 {fact && <p>{fact}</p>}
//                 {imageUrl && <img src={`${CAT_ENDPOINT_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first word for ${fact}`} />}
//                 {/* <button onClick={() => setFact('lorem ipsum cat fact whatever')}>Get new fact</button> */}
//             </section>
//         </main>
//     )
// } 
// Variante 2

export function App() {
    const { fact, refreshRandomFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    //Importante nunca sacar el set de los hook de la logica del componente
    const handClick = async () => {
        refreshRandomFact()
    }

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handClick}>Get new fact</button>
            <section>
                {/* // Renderizado condicional */}
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt={`Image extracted using the first word for ${fact}`} />}
                {/* <Otro /> */}
            </section>

        </main>
    )
}

// no puedes usar React Query, SWR, axios, apolo, etc....
// para recuperar la cita al cargar la pagina
// useEffect(() => {
//     // fecth devuelve una promesa en json, luego en data obtenemos la propiedad fact con al informacion que mostrar
//     fetch(CAT_ENDPOINT_RANDOM_FACT).then(res => res.json()).then(data => {
//         const { fact } = data
//         setFact(fact)
//     })
// }, [])