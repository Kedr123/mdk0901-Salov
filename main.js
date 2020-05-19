/*Салов Артм Владимирович*/
const pleiSlider =() =>{
    const portfolioItem = document.querySelectorAll(".portfolio-item");
    
    const portfolioDots=document.querySelector(".portfolio-dots");
    
    let dot = document.querySelectorAll(".dot");
    const portfolio = document.getElementById("portfolio");
    const portfolioContent = document.querySelector(".portfolio-content");
    

    const addClass = (Itam, index, classStyle)=>{Itam[index].classList.add(classStyle);}
    const removeClass = (Itam, index, classStyle)=>{Itam[index].classList.remove(classStyle);}
    let caont = 0;

    
    
    const addLi = (kol)=>{
            for (let i = 0; i < kol.length; i++) {
                let li = document.createElement('li');
                li.classList.add("dot");
                if(i==0)li.classList.add("dot-active");
                portfolioDots.append(li); 
            } 
             
        }
    const delLi=()=>{
        for (let i = 0; i < dot.length; i++) 
        {
            dot[i].remove();
        }
    }
    delLi();
    addLi(portfolioItem);
    dot = document.querySelectorAll(".dot");

    const removeClasss=()=>{
        removeClass(portfolioItem,caont,"portfolio-item-active");
        removeClass(dot,caont,"dot-active");
    }
    const addClasss=()=>{
        addClass(portfolioItem,caont,"portfolio-item-active");
        addClass(dot,caont,"dot-active");
    }
    function AnimeSlider(){
        removeClasss();
        caont++;
        if(caont==portfolioItem.length) caont=0;
        addClasss();
    }

    portfolio.addEventListener('click',(event) =>{
        event.preventDefault();
        let target = event.target;
        if(!target.matches(".portfolio-btn, .dot"))return;

        if(target.matches(".prev")){
            console.log("1");
            removeClasss();
            if(caont==0)caont = portfolioItem.length;
            caont= caont-1;
            addClasss();
            
        }
        if(target.matches(".next")){
            AnimeSlider();
        }
        if(target.matches(".dot")){
            removeClasss();
            target.classList.add("dot-active");
            for (let index = 0; index < dot.length; index++) {
                if(dot[index].classList=="dot dot-active"){
                    addClass(portfolioItem, index, "portfolio-item-active");
                    caont = index;
                    break;
                } 
            }
        }
    })
    portfolioContent.addEventListener('mouseover',(event)=>{ clearInterval(idAnime);});
    
    portfolioContent.addEventListener('mouseout',(event)=>{idAnime = setInterval(AnimeSlider,1000);});

    

    let idAnime = setInterval(AnimeSlider,1000);

}
pleiSlider();