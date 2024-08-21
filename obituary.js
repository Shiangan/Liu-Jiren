<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
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
                flowerBasketGallery.style.display = flowerBasketGallery.style.display === "none" || flowerBasketGallery.style.display === "" ? "block" : "none";
            });
        }

        // 幻灯片播放功能
        let slideIndex = 0;

        function showSlides() {
            const slides = document.querySelectorAll("#slideshow .mySlides");
            slides.forEach(slide => slide.style.display = "none");
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1; }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 3000); // 每隔3秒切换幻灯片
        }

        function plusSlides(n) {
            slideIndex += n;
            if (slideIndex > slides.length) { slideIndex = 1; }
            if (slideIndex < 1) { slideIndex = slides.length; }
            showSlides();
        }

        showSlides(); // 初次调用以显示第一张幻灯片

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
            }, index * 1500); // 每段延迟1.5秒
        });

        // 初始化动画并监听滚动事件
        animateTimeline();
        window.addEventListener('scroll', animateTimeline);
    });
</script>
