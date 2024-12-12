
import { useEffect, useState } from "react"

const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/'

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()
    // para recuperar la imagen cada vez que tenemos una cita nueva
    useEffect(() => {
        if (!fact) return
        const threeFirstWord = fact.split(' ', 3).join(' ') // obtiene las 3 primeras palabra del arreglo
        console.log(threeFirstWord)
        fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { tags } = response
                //console.log(response)
                setImageUrl(tags)
            })
    }, [fact])
    return { imageUrl: `${CAT_ENDPOINT_IMAGE_URL}${imageUrl}` }
} // imageUrl : dado un url