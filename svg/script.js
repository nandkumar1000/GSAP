// var initialpath="M 10 100 Q 500 100 990 100"
var initialpath = "M 10 100 Q 500 100 990 100";
var finalpath = "M 10 100 Q 500 100 990 100";
var string = document.querySelector("#string");

string.addEventListener("mousemove", function(dets) {
    var path = `M 10 100 Q ${dets.clientX} ${dets.clientY} 990 100`;
    gsap.to("svg path", {
        attr: { d: path },  // Use `attr` instead of `Attr`
        duration: 0.3,
        ease: "power3.out"
    });
});

string.addEventListener("mouseleave", function() {
    gsap.to("svg path", {
        attr: { d: finalpath },  // Use `attr` instead of `Attr`
        duration: 1.5,
        ease: "elastic.out(1, 0.2)"
    });
});


    // string.addEventListener("mouseenter",function(dets){
//     console.log("enter");
//     console.log(dets.x);
// });
// string.addEventListener("mouseleave",function(){
//     console.log("leave");
// });
// string.addEventListener("mousemove",function(){
//     console.log("move");
// });