let cursur = document.querySelector(".cursur")
let cursurblr= document.querySelector(".cursur-blr")
document.addEventListener("mousemove",function(dets){
    cursur.style.left = dets.x+30+"px"
    cursur.style.top = dets.y+"px"
})
document.addEventListener("mousemove",function(dets){
    cursurblr.style.left = dets.x-200+"px"
    cursurblr.style.top = dets.y-200+"px"
})

gsap.to(".nav",{
    backgroundColor :"black",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
      
         start:"top -10%",
         end:"top -11%",
         scrub:"1"
    }
})


gsap.to(".main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
       
        start:"top -25%",
        end:"top -70% ",
        scrub:2
    }
})

var h4all = document.querySelectorAll(".nav h4");
console.log(h4all);
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursur.style.scale =2.5;
        cursur.style.border ="1px solid #fff";
        cursur.style.backgroundColor="transparent";
    })
})
h4all.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        cursur.style.scale =1;
        cursur.style.border ="0px solid #95c11e";
        cursur.style.backgroundColor="#95c11e";
    })
})
gsap.from(".about img ,.about-main",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger:".about",
        scroller:"body",
       
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
  })
  gsap.from(".cards",{
    
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
       
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
  })
  gsap.from(".colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:".colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 40%",
        scrub:4
    }
  })
  gsap.from(".colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:".colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 40%",
        scrub:4
    }
  })
gsap.from(".page4 h1",{
    y:50,
    scrollTrigger:{
         trigger:".page4 h1",
         scroll:"body",
         start:"top 75%",
         end:"top 70%",
         scrub:4,
        
    },
})
