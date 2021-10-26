import { getImages, getMovies } from './home/movieData.js'

let q=window.location.href
let url=new URL(q)
let id=url.searchParams.get('id')

let imgUrl='https://image.tmdb.org/t/p/w300'

let search =await getMovies(id);
let getImg=await getImages(id);
let posters=getImg.posters

let poster=document.querySelector('.poster')

for(var i=0;i<3;i++){
    let img=document.createElement('img')
    img.src=`${imgUrl}${posters[i].file_path}`
    poster.appendChild(img)
}

let imgs=document.querySelectorAll('img'), l=0, r=0
imgs.forEach(e=>{
    e.style.left=l+'%'
    l+=100
})
l=100, i=0
setInterval(() => {
    if(i==3) i=0, r++
    if(r%2) imgs[i].style.left=0+'%'
    else imgs[i].style.left=(i*100)+'%'
    i++
}, 2000);