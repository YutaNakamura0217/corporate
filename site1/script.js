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
const headerHeight = header.offsetHeight; //修正:ヘッダーの高さを取得

function stickyHeader() {
    if (window.pageYOffset >= headerHeight) { //修正:スクロール量がヘッダーの高さ以上
        header.classList.add("sticky");
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.left = "0";
        header.style.width = "100%";
        header.style.backgroundColor = "rgba(242, 237, 230, 0.95)"; // 透明度を調整
        header.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    } else {
        header.classList.remove("sticky");
        header.style.position = "relative";
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
    }
}

// ハンバーガーメニュー
const hamburgerMenu = document.querySelector(".hamburger-menu");
const spNav = document.querySelector(".sp-nav ul");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("open");
    spNav.classList.toggle("open");
});