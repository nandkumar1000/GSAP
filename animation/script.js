// animation applying on h1;
gsap.from("h1",{
    opacity:0,
    duration:1,
    x:30,
    delay:1,
    // stageer:0.3
    stagger:-1,
    // stagger:0.5
    // for infnity use yoyo and repeat:-1
    repeat:-1,
    yoyo:true
})

// animation applying on box
var tl=gsap.timeline();
tl.to("#box",{
 x:1000,
 duration:2,
 delay:2,
 rotate:360,
repeat:2, 
 backgroundColor:"black",
 borderRadius:"50%"
 

})
tl.to("#box2",{
    x:1000,
    y:500,
    duration:1,
    repeat:1,
    // yoyo:true,
    // delay:2
   })
   tl.from("#box3",{
    // x:1000,
    y:500,
    duration:3,
    // delay:2
   })
   gsap.from("#box4",{
    x:1000,
    y:500,
    duration:3,
    delay:2
   })