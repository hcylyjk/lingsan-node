
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
    $('.platform-Administrator').on('click', function () {
        $('.login-platform').css('display', 'block');
    });
    $('.platform-error').on('click', function () {
        $('.login-platform').css('display', 'none');
    })
});

//点击商家登录弹出框
$(function () {
    $('.platform-merchant').on('click', function () {
        $('.login-customer').css('display', 'block');
    });
    $('.h-platform-error').on('click', function () {
        $('.login-customer').css('display', 'none');
    })
});


//先判断再ajax请求
$(function () {
    //设置cookie
    $('#platform-check').on('click', (e)=>{
       var ev = e || event;
       var target = ev.target || ev.srcElement;
       console.log(target.checked);
       if(target.checked){
            cookie.setCookie($('#userName').val(),$('#password').val(),7);
            return
       }
       if(!target.checked){
           console.log(888);
           
           cookie.delCookie($('#userName').val())
       }
    })
    $(function(){
       cookie.getCookie();
    })

    $('#btn-platform').on('click', () => {
        //用户名：只能包括数字字母的组合，长度为2-6位
        // var name = /^[A-Za-z][A-Za-z0-9]{2,6}$/;
        // var pass = /^[a-zA-Z0-9]{2,20}$/;
        // var boo1 = name.test($('#userName').val())
        // var boo2 = pass.test($('#password').val())
        // console.log(boo1);
        axios.post(' http://127.0.0.1:9090/platformLogin ', {
            username: $('#userName').val(),
            password: $('#password').val()
        }).then(res => {
            if (res.data.code === '0') {
                console.log('666')
                return false
            }
            if (res.data.code === '1') {
                $('#platform-err').text(res.data.msg)
                setTimeout(() => {
                    $('#platform-err').text('')
                }, 1000)
                $('#password').val('')
            }
        }).catch(err => {
            console.log(err);
        })

    })
})

