import { genreSearch, search12 } from './home/movieData.js'

let input=document.querySelector('input')
let search=document.querySelector('.search1')
let close=document.querySelector('.close')
let title=document.querySelector('.title')
let cat=document.querySelector('.categories')
let gentTit=document.querySelector('.genreTit')
let span=document.querySelector('.arrow')
let genList=document.querySelector('.genrelist')
let genHead=document.querySelector('.genreHead')
let genCont=document.querySelector('.genreCont')
let searchList=document.querySelector('.search ul')


let url=window.location.href
url=new URL(url)
let name=url.searchParams.get('name'), id=url.searchParams.get('id')
let genre=await genreSearch(id)
let img='https://image.tmdb.org/t/p/w300'

genHead.innerHTML=name

genre.items.forEach(e=>{
    let over=e.overview.toString()
    genCont.innerHTML+=
    `<div class="movieCont">
        <img src="${img+e.poster_path}">
        <div class="movDes">
            <h3><span>TITLE : </span>${e.original_title}</h3>
            <h3><span>OVERVIEW : </span>${over.slice(0, 200)}</h3>
            <a href="movieDet.html?id=${e.id}">More</a>
        </div>
    </div>`
})


search.addEventListener('click', ()=>{
    input.classList.toggle('input')
    close.classList.toggle('closec')
    title.classList.toggle('none')
    cat.classList.toggle('none')
    searchList.classList.toggle('none')
    input.value=''
})

close.addEventListener('click', ()=>{
    input.classList.remove('input')
    close.classList.remove('closec')
    title.classList.toggle('none')
    cat.classList.toggle('none')
    searchList.classList.toggle('none')
    input.value=''
})

gentTit.addEventListener('click', ()=>{
    span.classList.toggle('rot')
    genList.classList.toggle('none')
})

input.addEventListener('input', async ()=>{
    let searchRes=await search12(input.value)
    let html=searchRes.results.map((e)=>{
        return `<li><a href="movieDet.html?${e.id}">${e.original_title}</a></li>`
    }).join('')
    searchList.innerHTML=html
})

