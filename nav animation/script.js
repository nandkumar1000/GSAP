var menu=document.querySelector("#nav i");
var cross=document.querySelector("full i");
let tl=gsap.timeline();
tl.to("#full",{
    right:0,
    duration:0.6,
    
})
tl.from("#full h4",{
    y:500,
    duration:0.8,
    stagger:0.28,
    opacity:0
})
tl.from("#full i",{
    opacity:0
})
// 1st method is paused:true in decleration phase It means when user wants to play this animation.
// 2nd method in last :- we use tl.pause()
tl.pause()

// for play this animation;
menu.addEventListener("click",function(){
    tl.play()
})
cross.addEventListener("click",function(){
    tl.reverse()
})