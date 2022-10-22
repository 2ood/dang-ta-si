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
console.log(maxScroll);

document.addEventListener("DOMContentLoaded",function(){
  document.addEventListener("scroll",(evt)=>{
    console.log("scrolled");
  });
  slidegroup.addEventListener("wheel", function(evt){
    const selectCurrent = function(target){
      const current = document.getElementsByClassName("current")[0];
      if(current && current!=target) current.classList.remove("current");

      target.classList.add("current");
    }

    if((currentScroll<maxScroll && evt.deltaY>0)||(currentScroll>0 && evt.deltaY<0) ) {
      currentScroll+=evt.deltaY;

      if (currentScroll < viewport_height * 0.5) selectCurrent(slides[0]);
      else if (currentScroll < viewport_height * 1.5) selectCurrent(slides[1]);
      else if (currentScroll < viewport_height * 2.5) selectCurrent(slides[2]);
      else if (currentScroll < viewport_height * 3.5) selectCurrent(slides[3]);
      else if (currentScroll < viewport_height * 4.5) selectCurrent(slides[4]);
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
