//要实现的效果：点击按钮时，对应图片切换
const spanEle = $('#buttons span')
const length = spanEle.length
for(let i = 0; i < length; i++) {
    spanEle.eq(i).on('click', function () {
        changeImage(i)
        changeColor($(this))
        n = i
    })
}

//实现自动轮播
let n = 0
let timer
swiperAuto()

//实现鼠标进入时暂停，鼠标出来后过一定时间了继续开始轮播
$('.window').on('mouseenter', function () {
    clearInterval(timer)
})
$('.window').on('mouseleave', function () {
    setTime()
})

function changeImage(n) {
    $('#images').css({'transform': `translateX(${n*(-100)}%)`})
}

function changeColor(that) {
    that.addClass('red').siblings('.red').removeClass('red')
}

function swiperAuto() {
    spanEle.eq(0).trigger('click')
    n++
    setTime()
}

function setTime() {
    timer = setInterval(function () {
        spanEle.eq(n%length).trigger('click')
        n++
    }, 3000)
}
