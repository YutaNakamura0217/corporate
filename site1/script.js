// スライダーの動作
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.opacity = 0; // 透明度をリセット
    }
    slides[slideIndex - 1].style.display = "flex";
    // フェードインのアニメーションを追加
    gsap.to(slides[slideIndex - 1], {
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut"
    });
}

// スティッキーヘッダー
window.onscroll = function () {
    stickyHeader()
};

const header = document.querySelector("header");
const headerHeight = header.offsetHeight;

function stickyHeader() {
    if (window.pageYOffset >= headerHeight) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// ハンバーガーメニュー
const hamburgerMenu = document.querySelector(".hamburger-menu");
const spNav = document.querySelector(".sp-nav ul");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("open");
    spNav.classList.toggle("open");
});

// スクロールアニメーション
AOS.init({
    duration: 800, // アニメーションの時間
    easing: 'ease-in-out', // イージング
    once: true // 一度だけアニメーションを実行
});

// GSAPを使った背景グラデーションのアニメーション化
gsap.to("body", {
    background: "linear-gradient(to bottom, #E0FFFF, #CCFFCC)",
    duration: 5,
    repeat: -1, // 無限に繰り返す
    yoyo: true, // 反転再生
    ease: "power1.inOut"
});

// ページ読み込み時のローディングアニメーション
window.addEventListener('load', () => {
  const loadingAnimation = document.getElementById('loading-animation');
  loadingAnimation.classList.add('loaded');
});