// setting the header color
let headerMain = document.querySelector('header');
let headerArticle = document.querySelector('header.home-article-header');
let headerBlog = document.querySelector('header.header-blog-maim');
let headerAboutUs = document.querySelector('header.header-menu-about-us');
let headerHome = document.querySelector('header.home'); 

addEventListener('scroll',checkBg);
checkCommunicationBg();
checkBg();

function checkBg () {
    if(headerBlog || headerArticle){
        headerMain.style.backgroundColor = '#161616';
    } else{
        if(window.scrollY >= 100){
            headerMain.style.backgroundColor = '#161616';
        }else {
            headerMain.style.backgroundColor = 'transparent'
        }
    }
}

// COMMUNICATION BACKGROUNDS

function checkCommunicationBg () {
    let allItems = document.querySelectorAll('.carousel-item-blog');
    allItems.forEach((element)=>{
        if (element.querySelector('img')){
        let src = element.querySelector('img').getAttribute('src');
        element.style.backgroundImage = `url(${src})`;
        }
       
    })
}



let navToggle = document.querySelector('.navbar-toggler');
navToggle.addEventListener('click',()=>{
    if(headerMain.style.backgroundColor != '#161616'){
        headerMain.style.backgroundColor = '#161616';
    }
})


// HOME small bars carousel right bottom

if(headerHome){
    let carouselItems = document.querySelectorAll('.home-carousel-item');
    for(i=0;i < carouselItems.length;i++){
        document.querySelector('.home-carousel .currentItem').innerHTML += '<div class="bars"></div>'
    }
}



//bars on carousel
if(headerHome){
    setInterval(()=>{
        let carouselItems = document.querySelectorAll('.carousel-item');
        carouselItems.forEach((el,idxx)=>{
            if(el.classList.contains('active')){
                document.querySelector('.current-item-text').innerHTML =`<span>0${idxx+1}</span> / 0${carouselItems.length}`;
                let barOn = document.querySelectorAll('.bars');
                barOn.forEach((e,idx)=>{
                    if(idx == idxx){
                        for(i=0; i < barOn.length; i++){
                            barOn[i].classList.remove('bar-on')
                        }
                        e.classList.add('bar-on')
                    }
                })
                
            }
        })
    },500)
}


// buttom next articles

let next = document.querySelector('.articles-btn-next span');
let prev = document.querySelector('.articles-btn-prev span');
let allArt = document.querySelectorAll('.article').length;
if(prev && next){
    prev.addEventListener('click', ()=>{
        let scrollWidth = document.querySelector('.articles').scrollWidth / allArt;
        if(window.innerWidth > 750){
            document.querySelector('.articles').scrollBy({top:0,left:('-'+scrollWidth *2),behavior:'smooth'});
        } else {
            document.querySelector('.articles').scrollBy({top:0,left:('-'+scrollWidth),behavior:'smooth'});
        }
    
});
next.addEventListener('click', ()=>{
    let scrollWidth = document.querySelector('.articles').scrollWidth / allArt;
    if(window.innerWidth > 751){
        document.querySelector('.articles').scrollBy({top:0,left:(scrollWidth *2),behavior:'smooth'});
    } else {
        document.querySelector('.articles').scrollBy({top:0,left:(scrollWidth),behavior:'smooth'});
    }
});
}



//bars below aticles

if(document.querySelector('.bar-articles')){
    let bars = document.querySelectorAll('.bar-articles');
    document.querySelector('.articles').addEventListener('scroll',(e)=>{
        //btn desapear 
        if(e.target.scrollLeft >= 5){
            document.querySelector('.articles-btn-prev').style.display = 'flex';
        } else {
            document.querySelector('.articles-btn-prev').style.display = 'none'
        }
        if(e.target.scrollLeft >= (e.target.scrollWidth - e.target.offsetWidth)){
            document.querySelector('.articles-btn-next').style.display = 'none';
        } else {
            document.querySelector('.articles-btn-next').style.display = 'flex';
        }
    

        //orientation bars
    
        let articleWidth = document.querySelector('.articles').scrollWidth;
        let offSet = document.querySelector('.articles').offsetWidth;
        articleWidth = articleWidth - offSet;
        if(document.querySelector('.articles').scrollLeft < (articleWidth / bars.length)){
            for(i=0 ; i < bars.length ; i++) {
                bars[i].classList.remove('bar-active');
            }
            bars[0].classList.add('bar-active');
        }
        if(document.querySelector('.articles').scrollLeft > (articleWidth / (bars.length -1))){
            for(i=0 ; i < bars.length ; i++) {
                bars[i].classList.remove('bar-active');
            }
            bars[1].classList.add('bar-active');
        }
        if(document.querySelector('.articles').scrollLeft > (articleWidth / (bars.length -2))){
            for(i=0 ; i < bars.length ; i++) {
                bars[i].classList.remove('bar-active');
            }
            bars[2].classList.add('bar-active');
        } 
        if(document.querySelector('.articles').scrollLeft == (articleWidth)){
            for(i=0 ; i < bars.length ; i++) {
                bars[i].classList.remove('bar-active');
            }
            bars[3].classList.add('bar-active');
        } 
    });

// bars click event 
    bars.forEach((e,idx)=>{
        e.addEventListener('click',()=>{
            for(i=0 ; i < bars.length ; i++) {
                bars[i].classList.remove('bar-active');
            }
            e.classList.add('bar-active');
            let articleWidth = document.querySelector('.articles').scrollWidth / bars.length;
        
            document.querySelector('.articles').scrollTo({top:0,left:((articleWidth +375)* idx),behavior:'smooth'});
        
        })
    });


}
