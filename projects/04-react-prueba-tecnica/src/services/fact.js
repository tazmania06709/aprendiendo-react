const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

// De sta forma se puede reutilizar en VUE, REACT,etc
export const getRandomFact = async () => {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await res.json()
    const { fact } = data
    return fact    
}