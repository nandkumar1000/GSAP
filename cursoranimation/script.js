var main = document.getElementById("main");
var cursor = document.getElementById("cursor");
var imagediv = document.querySelector("#image");

main.addEventListener("click", function() {
    console.log("event performed");
});

main.addEventListener("mousemove", function(dets) {
    console.log(dets.x);
    console.log(dets.y);
    console.log(dets);

    gsap.to(cursor, {
        x: dets.clientX,
        y: dets.clientY,
        duration: 1,
        ease: "back.out"
    });
});

imagediv.addEventListener("mouseenter", function() {
    gsap.to(cursor, {
        scale: 1.5,
        backgroundColor: "rgba(255, 0, 0, 0.5)"
    });
});

imagediv.addEventListener("mouseleave", function() {
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "rgb(255, 98, 0)"
    });
});