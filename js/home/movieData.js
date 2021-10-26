let popular='https://api.themoviedb.org/3/movie/popular?api_key=f1c9c70c76391cecff01913a1ee6ecd0'
let tamil='https://api.themoviedb.org/3/list/45025?api_key=f1c9c70c76391cecff01913a1ee6ecd0'
let action='https://api.themoviedb.org/3/list/28?api_key=f1c9c70c76391cecff01913a1ee6ecd0'
let comedy='https://api.themoviedb.org/3/list/35?api_key=f1c9c70c76391cecff01913a1ee6ecd0'
let crime='https://api.themoviedb.org/3/list/80?api_key=f1c9c70c76391cecff01913a1ee6ecd0'

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

export async function getAction(){
    let ac=await fetch(action)
    ac=await ac.json()
    return ac
}

export async function getAdven(){
    let cm=await fetch(comedy)
    cm=await cm.json()
    return cm
}

export async function getCrime(){
    let cr=await fetch(crime)
    cr=await cr.json()
    return cr
}

export async function genreSearch(id){
    let genreId=await fetch(`https://api.themoviedb.org/3/list/${id}?api_key=f1c9c70c76391cecff01913a1ee6ecd0`)
    genreId=await genreId.json()
    return genreId
}

export async function search12(value){
    let search=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=f1c9c70c76391cecff01913a1ee6ecd0&query=${value}`)
    search=await search.json()
    return search
}

export async function getMovies(id){
    let getMovie=await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f1c9c70c76391cecff01913a1ee6ecd0`)
    getMovie=await getMovie.json()
    return getMovie
}

export async function getImages(id){
    let getImg=await fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=f1c9c70c76391cecff01913a1ee6ecd0`)
    getImg=await getImg.json()
    return getImg
}
