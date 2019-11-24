var cookie = {
    //设置cookie
    setCookie: function (username, value, day) {
        if (day !== 0) {
            var d = new Date();
            d.setTime(d.getTime() + (day * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toGMTString();
            document.cookie = (username) + "=" + (value) + ";" + expires;
        } else {
            document.cookie = (username) + "=" + (value)
        }
    },
    //获取cookie
    getCookie: function () {
         var username =document.cookie;
         var getU = username.split('=')[0];
         var getP = username.split('=')[1];
         if(!username){
            return
        }
        if(username){
            $('#userName').val(getU);
            $('#password').val(getP);
            $('#platform-check').attr('checked','checked')
        }
        //  console.log(username)
        //  var getName = username.split(';');
        //  var user = getName.map((item)=>{
        //      return item.split('=')[0]
        //  })
        //  var pass = getName.map((item)=>{
        //     return item.split('=')[1]
        // })
        // var getn = user.filter(item=>{
        //     return item == name ? item : ''
        // })
        // var getp = pass.filter(item=>{
        //     return item == value? item : ''
        // })
        // return {
        //     "getn":getn,
        //     "getp":getp
        // }
    },
    //删除cookie
    delCookie:function(name){
        this.setCookie(name,'',-1)
    }
}
