let popular='https://api.themoviedb.org/3/movie/popular?api_key=f1c9c70c76391cecff01913a1ee6ecd0'

async function getPopular(){
    let popu=await fetch(popular)
    popu=await popu.json();
    console.log(popu)
}