import { getPopular, getTamil } from './movieData.js'

let input=document.querySelector('input')
let search=document.querySelector('.search1')
let close=document.querySelector('.close')
let title=document.querySelector('.title')
let cat=document.querySelector('.categories')
let gentTit=document.querySelector('.genreTit')
let span=document.querySelector('.arrow')
let genList=document.querySelector('.genrelist')
let pop=document.querySelector('.p')
let movList=document.querySelector('.movielist')
let right=document.querySelector('.right'), l=0
let left=document.querySelector('.left')

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

right.addEventListener('click', ()=>{
    movList.scrollBy(200, 0)
})

left.addEventListener('click', ()=>{
    movList.scrollBy(-200, 0)
})

// setInterval(() => {
//     movList.scrollBy(300, 0)
// }, 2000);

let popMov=await getPopular()
let tam=await getTamil()
console.log(tam.items)
let img='https://image.tmdb.org/t/p/w300'

popMov.forEach(e=>{
    let over=e.overview.toString()
    pop.innerHTML+=
    `<div class="movcont">
        <img src="${img+e.poster_path}">
        <div class="movdes">
            <h1><span>TITLE</span> : ${e.original_title}</h1>
            <h1><span>OVERVIEW</span> : ${over.slice(0, 500)}</h1>
        </div>
    </div>    
    `
})