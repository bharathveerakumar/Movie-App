import { getAction, getAdven, getCrime, getPopular, getTamil, search12 } from './movieData.js'

let input=document.querySelector('input')
let search=document.querySelector('.search1')
let close=document.querySelector('.close')
let title=document.querySelector('.title')
let cat=document.querySelector('.categories')
let gentTit=document.querySelector('.genreTit')
let span=document.querySelector('.arrow')
let genList=document.querySelector('.genrelist')
let movList=document.querySelectorAll('.movielist')
let right=document.querySelector('.right'), l=0
let left=document.querySelector('.left')
let searchList=document.querySelector('.search ul'), sc=0, flags=1

search.addEventListener('click', ()=>{
    input.classList.toggle('input')
    close.classList.toggle('closec')
    title.classList.toggle('none')
    cat.classList.toggle('none')
    searchList.classList.toggle('none')
    input.value=''
})

close.addEventListener('click', ()=>{
    input.classList.toggle('input')
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

right.addEventListener('click', ()=>{
    movList.forEach(e=>{
        e.scrollBy(250, 0)
    })
})

left.addEventListener('click', ()=>{
    movList.forEach(e=>{    
        e.scrollBy(-250, 0)
    })
})

movList.forEach(e=>{
    setInterval(() => {
        if(sc<127&&flags) e.scrollBy(320, 0), sc++
        else if(sc!=0) flags=0, e.scrollBy(-320, 0), sc--
        else flags=1
    }, 3000);
})

let popMov=await getPopular()
let tam=await getTamil(), cls=97
let ac=await getAction()
let cm=await getAdven()
let cr=await getCrime()
let img='https://image.tmdb.org/t/p/w300'

listGen(popMov), listGen(tam.items.slice(0,20)), listGen(ac.items.slice(0, 20)), listGen(cm.items.slice(0, 20))
listGen(cr.items.slice(0, 20))

export function listGen(popMovi){
    let pop=document.querySelector(`.${String.fromCharCode(cls)}`)
    cls++;
    popMovi.forEach(e=>{
        let over=e.overview.toString()
        pop.innerHTML+=
        `<div class="movcont">
            <img src="${img+e.poster_path}">
            <div class="movdes">
                <h1><span>TITLE</span> : ${e.original_title}</h1>
                <h1><span>OVERVIEW</span> : ${over.slice(0, 400)}</h1>
                <a href="movieDet.html?id=${e.id}" class="more">More</a>
            </div>
        </div>    
        `
    })
}

input.addEventListener('input', async ()=>{
    let searchRes=await search12(input.value)
    let html=searchRes.results.map((e)=>{
        return `<li><a href="movieDet.html?${e.id}">${e.original_title}</a></li>`
    }).join('')
    console.log(html)
    searchList.innerHTML=html
})