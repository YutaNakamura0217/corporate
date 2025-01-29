// スライダーの動作
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "flex";
    setTimeout(showSlides, 5000); // 5秒ごとに切り替え
}

// スティッキーヘッダー
window.onscroll = function() {
    stickyHeader()
};

const header = document.querySelector("header");
const headerTop = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > headerTop) {
        header.classList.add("sticky");
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.left = "0";
        header.style.width = "100%";
        header.style.backgroundColor = "rgba(255, 255, 255, 0.95)"; // 透明度を追加
        header.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    } else {
        header.classList.remove("sticky");
        header.style.position = "relative";
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
    }
}

// パララックス効果用の背景画像切り替え
const headerBg = document.querySelector(".parallax-bg");
const bgImages = ["header-bg.jpg", "header-bg2.jpg", "header-bg3.jpg"]; // 画像のパスを適宜変更
let bgIndex = 0;

setInterval(() => {
    bgIndex = (bgIndex + 1) % bgImages.length;
    headerBg.style.backgroundImage = `url(${bgImages[bgIndex]})`;
}, 10000); // 10秒ごとに切り替え