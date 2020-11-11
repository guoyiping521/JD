$(function () {

  $(".bjma_warp_l").click(function () {
      $(".yao").show().next(".denglu").hide()
  })


  $(".bjma_warp_r").click(function () {
      $(".yao").hide().next(".denglu").show();
  })


$(".input").click(function(){
    let zhang=$(".name input").val();
    let mi=$(".pass input").val();
    $.get("http://jx.xuzhixiang.top/ap/api/login.php",{
        "username":"zhang",
        "password":"mi"
    },data=>{
        console.log(data);
        if(data.code==1){
        //   console.log(1);
          localStorage.setItem("username",data.data["username"]);
          localStorage.setItem("id",data.data["id"]);
          localStorage.setItem("login",1)
          location.href="index.html";
        }
        else{
            alert(data.msg);
        }
    })
})


})
