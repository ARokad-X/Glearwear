// image animation Start
const imgs = ["imgs/slide-1.webp","imgs/slide-2.webp"];
let img = document.querySelector("#slider-img");
let div = document.querySelector(".w-img");
let index = 0;

function nextImg(){
    index = (index+1)%imgs.length;
    div.style.transition = "2s";
    img.src = imgs[index];
}

setInterval(nextImg, 1500);
// image animation end


// Scroll to top start
document.addEventListener("DOMContentLoaded", function () {
    let scrollTopBtn = document.getElementById("scroll-to-top");

    window.onscroll = function () {
        if (document.documentElement.scrollTop > 100) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
// Scroll to top end