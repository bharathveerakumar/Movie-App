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

let imgs=document.querySelector('img'), l=0
setInterval(() => {
    imgs.style.left=l+`%`
    l+=35
    console.log(imgs.style)
}, 2000);