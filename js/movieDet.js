import { getImages, getMovies, getCast, getVdo } from './home/movieData.js'

let q=window.location.href
let url=new URL(q)
let id=url.searchParams.get('id')

let imgUrl='https://image.tmdb.org/t/p/w400'

let search =await getMovies(id);
let getImg=await getImages(id);
let casts=await getCast(id)
let videos=await getVdo(id)
let posters=getImg.posters
let backdrops=getImg.backdrops
let genres=search.genres

let vdoUrl='https://www.youtube.com/embed/'

let poster=document.querySelector('.poster')
let det=document.querySelector('.detCont'), k=0


for(var j=0;j<3;j++){
    let img=document.createElement('img')
    img.className='pos'
    img.src=`${imgUrl}${posters[(j+1)%posters.length].file_path}`
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
            <div class="genre">
                <div class="rating">
                    <h2>${search.vote_average}</h2>
                    <div class="ratingColor"></div>
                </div>
                <ul>
                    <li>${genres[0].name}</li>
                    <li>${genres[1%genres.length].name}</li>
                    <li>${search.runtime} mins</li>
                </ul>
            </div>
        </div>
        <div class="overview">
            <h2><span>OVERVIEW</span> :</h2>
            <h3>${search.overview}</h3> <br>
            <h3><span>STATUS</span> : ${search.status}</h3>
            <h3><span>RELEASE DATE</span> : ${search.release_date}</h3>
            <h3><span>BUDGET</span> : $${search.budget}</h3> <br><br>
            <h2><span>CAST</span> :</h2>
        </div>
        `

let ratingColor=document.querySelector('.ratingColor')
let over=document.querySelector('.overview')
ratingColor.style.width=search.vote_average*10+'%'

let cast=document.createElement('div')
let crew=document.createElement('div')
cast.className='cast'
crew.className='cast'
for(var j=0;j<10;j++){
    if(casts.cast[j].profile_path){
        cast.innerHTML+=`
                <div class="card">
                    <img src="${imgUrl}${casts.cast[j%casts.cast.length].profile_path}" class="imgc">
                    <h4>${casts.cast[j%casts.cast.length].name}</h4>
                </div>
        `
    }
}
for(j=0;j<10;j++){
    if(casts.crew[j].profile_path){
    crew.innerHTML+=`
            <div class="card">
                <img src="${imgUrl}${casts.crew[j%casts.crew.length].profile_path}" class="imgc">
                <h4>${casts.crew[j%casts.crew.length].name}</h4>
            </div>
    `
    }
}

let but=document.createElement('button')
let but1=document.createElement('button')
but.innerHTML='View More', but.className='but12'
but1.innerHTML='View More', but1.className='but13'


but.addEventListener('click', ()=>{
    cast.innerHTML=''
    casts.cast.forEach(e=>{
        cast.innerHTML+=`
        <div class="card">
            <img src="${imgUrl}${e.profile_path}" class="imgc">
            <h4>${e.name}</h4>
        </div> 
        `
    })  
})

but1.addEventListener('click', ()=>{
    crew.innerHTML=''
    casts.crew.forEach(e=>{
        crew.innerHTML+=`
        <div class="card">
            <img src="${imgUrl}${e.profile_path}" class="imgc">
            <h4>${e.name}</h4>
        </div> 
        `
    })  
})

cast.appendChild(but)
crew.appendChild(but1)

over.appendChild(cast)
over.innerHTML+='<br><br><h2><span>CREW</span> : </h2>'
over.appendChild(crew)


det.innerHTML+=`
        <div class="media">
            <h2><span>MEDIA</span> :</h2>
            <div class="mediaCont">
                <div class="mediaTab">
                    <button class="tabBut ps butDes">Posters</button>
                    <button class="tabBut bds">Backdrops</button>
                    <button class="tabBut vdo">Videos</button>
                </div>
                <div class="images"></div>
                <button class="psBut but">View More</button>
            </div>
        </div>
`

let mediaCont=document.querySelector('.images'), psCnt=20, bdsCnt=20, vdoCnt=5
for(var h=0;h<10;h++){
    let im=document.createElement('img')
    im.className='posterImg', ps()
    im.src=`${imgUrl}${posters[h%posters.length].file_path}`
    mediaCont.appendChild(im)
}

let tabBut=document.querySelectorAll('.tabBut'), prevBut
let viewBut=document.querySelector('.but')
prevBut=tabBut[0]

tabBut.forEach(e=>{
    e.addEventListener('click', ()=>{
        prevBut.classList.remove('butDes')
        e.classList.add('butDes')
        prevBut=e;
    })
})

let ps1=document.querySelector('.ps')
let bds1=document.querySelector('.bds')
let vdo1=document.querySelector('.vdo')

ps1.addEventListener('click', ()=>{
    mediaCont.innerHTML=''
    viewBut.className='psBut but', ps()
    for(var h=0;h<10;h++){
        let im=document.createElement('img')
        im.className='posterImg'
        im.src=`${imgUrl}${posters[h%posters.length].file_path}`
        mediaCont.appendChild(im)
    }
})

bds1.addEventListener('click', ()=>{
    mediaCont.innerHTML=''
    viewBut.className='bdsBut but', bds()
    for(var h1=0;h1<10;h1++){
        let im=document.createElement('img')
        im.className='posterImg'
        im.src=`${imgUrl}${backdrops[h1%backdrops.length].file_path}`
        mediaCont.appendChild(im)
    }
})

vdo1.addEventListener('click', ()=>{
    mediaCont.innerHTML=''
    viewBut.className='vdoBut but', vdo()
    for(var h4=0;h4<3;h4++){
        mediaCont.innerHTML+=`
            <iframe src="${vdoUrl}${videos.results[h4%videos.results.length].key}" class="posterImg"></iframe>
        `
    }
})

function ps(){
    let psBut=document.querySelector('.psBut')
    psBut.addEventListener('click', ()=>{
        mediaCont.innerHTML=''
        for(var h2=0;h2<psCnt;h2++){
            let im=document.createElement('img')
            im.className='posterImg'
            im.src=`${imgUrl}${posters[h2].file_path}`
            mediaCont.appendChild(im)
        }
        psCnt+=10
    })
}

function bds(){
    let bdsBut=document.querySelector('.bdsBut')
    bdsBut.addEventListener('click', ()=>{
        mediaCont.innerHTML=''
        for(var h3=0;h3<bdsCnt;h3++){
            let im=document.createElement('img')
            im.className='posterImg'
            im.src=`${imgUrl}${backdrops[h3].file_path}`
            mediaCont.appendChild(im)
        }
        bdsCnt+=10
    })
}

function vdo(){
    let vdoBut=document.querySelector('.vdoBut')
    vdoBut.addEventListener('click', ()=>{
        mediaCont.innerHTML=''
        for(var h5=0;h5<vdoCnt;h5++){
            mediaCont.innerHTML+=`
                <iframe src="${vdoUrl}${videos.results[h5].key}" class="posterImg"></iframe>
            `
        }
        vdoCnt+=5
    })
}


