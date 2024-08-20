// 确保jQuery加载
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

document.addEventListener('DOMContentLoaded', function() {

    // 时间轴动画
    function animateTimeline() {
        const timelineBlocks = document.querySelectorAll(".VivaTimeline .event");
        timelineBlocks.forEach(function (block) {
            const rect = block.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
                block.classList.add("animated");
            } else {
                block.classList.remove("animated");
            }
        });
    }

    // 初始化花篮展示功能
    const flowerBasketButton = document.getElementById("show-flower-baskets");
    const flowerBasketGallery = document.getElementById("flower-basket-gallery");

    if (flowerBasketButton && flowerBasketGallery) {
        flowerBasketButton.addEventListener("click", function() {
            if (flowerBasketGallery.style.display === "none" || flowerBasketGallery.style.display === "") {
                flowerBasketGallery.style.display = "block";
            } else {
                flowerBasketGallery.style.display = "none";
            }
        });
    }

    // 初始化幻灯片
    $(document).ready(function(){
        $('.slideshow-container').slick({
            dots: true,          // 显示导航点
            infinite: true,      // 无限循环播放
            speed: 500,          // 动画速度
            slidesToShow: 1,     // 一次显示一个幻灯片
            adaptiveHeight: true // 自适应高度
        });
    });

    // 音乐自动播放
    window.onload = function() {
        const audio = document.getElementById('background-music');
        if (audio) {
            audio.muted = false; // 取消静音
            audio.play().catch(error => {
                console.log('Autoplay was prevented:', error);
            });
        }
    };

    // 渐显文本效果
    const fadeInTexts = document.querySelectorAll('.fade-in-text');
    fadeInTexts.forEach((text, index) => {
        setTimeout(() => {
            text.style.opacity = '1';
        }, index * 1500); // 每个段落延迟1.5秒逐个渐显
    });

    // 初始化动画并监听滚动事件
    animateTimeline();
    window.addEventListener('scroll', animateTimeline);
});
