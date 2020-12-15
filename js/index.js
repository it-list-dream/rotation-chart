window.onload = function () {
    var wrap = document.getElementById('main'),
        pic = document.getElementsByClassName('swiper')[0].getElementsByTagName("li"),
        list = document.getElementsByClassName('swiper-content')[0].getElementsByTagName('li'),
        index = 0,
        timer = null;
    var prev = document.getElementsByClassName('prev')[0],
        next = document.getElementsByClassName('next')[0],
        content = document.getElementsByClassName('swiper-content')[0];
    //默认显示第一张图片
    function showFristPic() {
        if (index == 0) {
            changePic(index);
        }
    }
    // 鼠标划过整个容器时停止自动播放
    wrap.onmouseover = function () {
        clearInterval(timer);
    }
    // 鼠标离开整个容器时继续播放至下一张
    wrap.onmouseout = function () {
        timer = setInterval(autoPlay, 2000);
    }
    //自动播放
    timer = setInterval(autoPlay, 2000);
    showFristPic();

    function autoPlay() {
        if (++index >= pic.length) index = 0;
        changePic(index);

    }
    //循环判断是哪一张图片
    function changePic(curIndex) {
        for (var i = 0; i < pic.length; ++i) {
            pic[i].style.display = "none";
            list[i].className = "";
        }
        console.log(curIndex);
        pic[curIndex].style.display = "block";
        list[curIndex].className = "on";
    }
    prev.onclick = onPrev;
    next.onclick = onNext;
    //点击prev和next按钮是切换图片
    function onPrev() {
        if (index > 0) {
            index--;
            changePic(index);
        }
    }

    function onNext() {
        if (index < pic.length - 1) {
            index++;
            changePic(index);
        }

    }
    content.onclick = function (e) {
        if (e.target.tagName == 'LI') {
            var idx = 0;
            if (e.target.innerText > 0 && e.target.innerText < pic) {
                idx = e.target.innerText - 1;
                changePic(idx);
            }
        }
    }
}
