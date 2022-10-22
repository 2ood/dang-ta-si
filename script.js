const KR_ADDRESS="https://2ood.github.io/dang-ta-si/index.html";
const EN_ADDRESS="https://2ood.github.io/dang-ta-si/en/index.html";

const curtain = document.getElementById("curtain");
const slidegroup = document.getElementById('content-slidegroup');
const slides = [].slice.call(document.getElementsByTagName("slide"));
const viewport_height = window.innerHeight;
const select_language = document.getElementById("language");
const current_lang = document.getElementsByTagName('html')[0].getAttribute("lang");

let currentScroll = 0;
const maxScroll=window.innerHeight*(slides.length-0.5);
let seen_til = 1;

document.addEventListener("DOMContentLoaded",function(){
  slidegroup.addEventListener("wheel", function(evt){
    if((currentScroll<maxScroll && evt.deltaY>0)||(currentScroll>0 && evt.deltaY<0) ) {
      currentScroll+=evt.deltaY;
    }
    //console.log(`currentscroll is ${currentScroll}`);
    //console.log(`seen til is ${seen_til}`);
    const current = document.getElementsByClassName("current")[0];

    let new_seen;
    let flag=false;
    let newCurrent=0;

    seeing = Math.round((currentScroll)/window.innerHeight)+1;
    //console.log(`seeing is ${seeing}`);
    if(seeing > seen_til) {
      //console.log("changing");
      seen_til = seeing;
      switch(seeing){
        case 1 : break;
        case 2 : {newCurrent = slides[1]; flag=true; break;}
        case 3 : {newCurrent = slides[2]; flag=true; break;}
        case 4 : {newCurrent = slides[3]; flag=true; break;}
        case 5 : {newCurrent = slides[4]; flag=true; break;}
      }
      if(flag) newCurrent.classList.add("seen");
    }
  });

  select_language.addEventListener("change",function(evt){
    console.log("changed");
    if(current_lang==evt.srcElement.value) return ;
    else {
      switch(evt.srcElement.value){
        case 'ko' : window.location.href=KR_ADDRESS; break;
        case 'en' : window.location.href=EN_ADDRESS;
      }
    }
  });

  slides[0].classList.add("current");
});
