let input=document.querySelector('input')
let search=document.querySelector('.search1')
let close=document.querySelector('.close')
let title=document.querySelector('.title')
let cat=document.querySelector('.categories')
let gentTit=document.querySelector('.genreTit')
let span=document.querySelector('.arrow')
let genList=document.querySelector('.genrelist')

search.addEventListener('click', ()=>{
    input.classList.toggle('input')
    close.classList.toggle('closec')
    title.classList.toggle('none')
    cat.classList.toggle('none')
})

close.addEventListener('click', ()=>{
    input.classList.remove('input')
    close.classList.remove('closec')
    title.classList.toggle('none')
    cat.classList.toggle('none')
})

gentTit.addEventListener('click', ()=>{
    span.classList.toggle('rot')
    genList.classList.toggle('none')
})

let popular='https://api.themoviedb.org/3/movie/popular?api_key=f1c9c70c76391cecff01913a1ee6ecd0'

async function getPopular(){
    let popu=await fetch(popular)
    popu=await popu.json();
    popu=popu.results
    console.log(popu)
}