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


//先判断再ajax请求
$(function(){
    $('#btn-platform').on('click',function(){
        //用户名：只能包括数字字母的组合，长度为2-6位
        // var name = /^[A-Za-z][A-Za-z0-9]{2,6}$/;
        // var pass = /^[a-zA-Z0-9]{2,20}$/;
        // var boo1 = name.test($('#userName').val())
        // var boo2 = pass.test($('#password').val())
        // console.log(boo1);
        

    })
})

