let popular='https://api.themoviedb.org/3/movie/popular?api_key=f1c9c70c76391cecff01913a1ee6ecd0'
let tamil='https://api.themoviedb.org/3/list/45025?api_key=f1c9c70c76391cecff01913a1ee6ecd0'

export async function getPopular(){
    let popu=await fetch(popular)
    popu=await popu.json();
    return popu.results
}

export async function getTamil(){
    let tam=await fetch(tamil)
    tam=await tam.json()
    return tam
}