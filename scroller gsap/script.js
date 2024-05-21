// gsap.to("#page1 #box1",{
//     x: 200,
//     scale:0,
//     duration:1,
//     delay:1,
//     rotate:360,
//     scrollTrigger:"#page2 #box2"
// })
// gsap.to("#page2  #box2",{
//     scale:0,
//     duration:1,
//     delay:2,
//     rotate:360,
//     scrollTrigger:"#page3 #box3"
// })
// gsap.to("#page3 #box3",{ 
//     scale:0,
//     duration:3,
//     delay:2,
//     rotate:360
// // })
//  
// gsap.from("#page2 span",{
//     y:100,
//     scale:0,
//     duration:2,
//     delay:1,
// })
gsap.from("#page2 #box2",{
    x:100,
    scale:0,
    opacity:0,
    rotate:720,
    duration:4,
    scrollTrigger:{
        trigger:"#page2 #box2",
        scroller:body,
        markers:true,
        start:"top 60%",
        end:"bott 30%",
        scrub:true
    }
})


