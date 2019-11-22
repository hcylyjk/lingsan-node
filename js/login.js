 //轮播
 $(function () {
    var swiper = new Swiper('.swiper-containers', {
        speed: 300,
        // 自动播放
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        loop: true,//无限循环
        // 淡出
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        }
    });
});

//点击平台管理员登录弹出框
$(function () {
    $('.platform-Administrator').on('click',function(){
        $('.login-platform').css('display','block');
    });
    $('.platform-error').on('click',function(){
        $('.login-platform').css('display','none');
    })
});

//点击商家登录弹出框
$(function(){
    $('.platform-merchant').on('click',function(){
        $('.login-customer').css('display','block');
    });
    $('.h-platform-error').on('click',function(){
        $('.login-customer').css('display','none');
    })
});

