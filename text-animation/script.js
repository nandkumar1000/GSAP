function breakTheText() {
    var h1 = document.querySelector("h1");
    var h1text = h1.textContent;
    var splittedtext = h1text.split("");
    var culutter = "";
    var halfvalue = Math.floor(splittedtext.length / 2);

    splittedtext.forEach(function(elem, idx) {
        if (idx < halfvalue) {
            culutter += `<span class="a">${elem}</span>`;
        } else {
            culutter += `<span class="b">${elem}</span>`;
        }
    });

    h1.innerHTML = culutter;
}

breakTheText();

gsap.from("h1 .a", {
    y: 100,
    duration: 0.5,
    delay: 0.6,
    stagger: 0.2,
    opacity: 0,
});
gsap.from("h1 .b", {
    y: 100,
    duration: 0.5,
    delay: 0.6,
    stagger: -0.26,
    opacity: 0,
});
// gsap.from("h1 span",{
//     y:100,
//     opacity:0,
//     duration:0.6,
//     delay:0.5,
//     stagger:0.18,
// })
