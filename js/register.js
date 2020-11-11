$(function(){
  $(".input").click(function(){
    $.get("http://jx.xuzhixiang.top/ap/api/reg.php",{
      username:$(".name input").val(),
      password:$(".pass input").val(),
    },data=>{
      console.log(data);
      if(data.code==1){
        // alert("注册成功"),
        location.href="login.html";
      }else{
        alert("用户名已存在")
       
      }
    })
  })
})