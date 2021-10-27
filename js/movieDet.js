import { getImages, getMovies } from './home/movieData.js'

let q=window.location.href
let url=new URL(q)
let id=url.searchParams.get('id')

let imgUrl='https://image.tmdb.org/t/p/w400'

let search =await getMovies(id);
let getImg=await getImages(id);
let posters=getImg.posters
let backdrops=getImg.backdrops

let poster=document.querySelector('.poster')
let det=document.querySelector('.detCont'), k=0

for(var j=0;j<3;j++){
    let img=document.createElement('img')
    img.className='pos'
    img.src=`${imgUrl}${posters[j+2].file_path}`
    poster.appendChild(img)
}

let imgs=document.querySelectorAll('.pos'), l=0, r=1, i=0
imgs.forEach(e=>{
    e.style.left=l+'%'
    l+=100
})

setInterval(() => {
    if(i==3) i=0, r++
    if(r%2) poster.style.left=-i*100+'%'
    else poster.style.left=0+'%', r++, i=0
    i++
}, 3000);

let bdImg=document.querySelector('.backdrops')
setInterval(() => {
    if(k==3) k=0
    bdImg.src=`${imgUrl}${backdrops[k].file_path}`
    k++
}, 2000);

det.innerHTML+=`
        <div class="detTit">
            <h1>${search.original_title}</h1>
        </div>    
        `