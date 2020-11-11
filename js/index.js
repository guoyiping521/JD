window.onload=function(){


  function $(param){
    if(arguments[1] == true){
      return document.querySelectorAll(param);
    }else{
      return document.querySelector(param);
    }
  }
  var $box = $(".box");
  var $box1 = $(".box-1 ul li",true);
  var $box2 = $(".box-2 ul");
  var $box3 = $(".box-3");
  var $length = $box1.length;
  
  var str = "";
  for(var i =0;i<$length;i++){
    if(i==0){
      str +="<li class='on'>"+(i+1)+"</li>";
    }else{
      str += "<li>"+(i+1)+"</li>";
    }
  }
  $box2.innerHTML = str;
  
  var current = 0;
  
  var timer;
  timer = setInterval(go,2000);
 
  function go(){
    for(var j =0;j<$length;j++){
      $box1[j].style.display = "none";
      $box2.children[j].className = "";
    }
    if($length == current){
      current = 0;
    }
    $box1[current].style.display = "block";
    $box2.children[current].className = "on";
    current++;
  }

  for(var k=0;k<$length;k++){
    
    $box1[k].onmouseover = function(){
      clearInterval(timer);
    }
    $box1[k].onmouseout = function(){
      timer = setInterval(go,2000);
    }
  }
  for(var p=0;p<$box3.children.length;p++){
    $box3.children[p].onmouseover = function(){
      clearInterval(timer);
    };
    $box3.children[p].onmouseout = function(){
      timer = setInterval(go,2000);
    }
  }
  
  for(var u =0;u<$length;u++){
    $box2.children[u].index  = u;
    $box2.children[u].onmouseover = function(){
      clearInterval(timer);
      for(var j=0;j<$length;j++){
        $box1[j].style.display = "none";
        $box2.children[j].className = "";
      }
      this.className = "on";
      $box1[this.index].style.display = "block";
      current = this.index +1;
    }
    $box2.children[u].onmouseout = function(){
      timer = setInterval(go,2000);
    }
  }
  
  $box3.children[0].onclick = function(){
    back();
  }
  $box3.children[1].onclick = function(){
    go();
  }
  function back(){
    for(var j =0;j<$length;j++){
      $box1[j].style.display = "none";
      $box2.children[j].className = "";
    }
    if(current == 0){
      current = $length;
    }
    $box1[current-1].style.display = "block";
    $box2.children[current-1].className = "on";
    current--;
  }
  let flag;
if(flag=false){
  
  $("box").onmouseover();
}
}
//第二个轮播




$(function(){


  $(".navimgx").click(function(){
    location.href = "https://pro.jd.com/mall/active/7P8nSbxpPbTXJxvTSobyGWSjHAM/index.html?babelChannel=ttt3";
  })

  var otime=document.getElementsByClassName("time")[0]
  var otime1=document.getElementsByClassName("time1")[0]
  var otime2=document.getElementsByClassName("time2")[0]
  var otime3=document.getElementsByClassName("time3")[0]
  var otime4=document.getElementsByClassName("time4")[0]
  var timer = setInterval(function () {
  var flag;
  var date2 = new Date("2020/11/8 21:09:00");
  var date1 = new Date();
  var ss = Math.abs((date2 - date1) / 1000); //秒
   day = Math.floor(ss / 24 / 3600);
   hour = Math.floor(ss / 3600 % 24);
   minute = Math.floor(ss / 60 % 60);
   second = Math.floor(ss % 60);
   hour = hour < 10 ? "0" + hour : hour;
   day = day < 10 ? "0" + day : day;
   minute = minute < 10 ? "0" + minute : minute;
   second = second < 10 ? "0" + second : second;
      otime1.innerText=day;
      otime2.innerText=hour;
      otime3.innerText=minute;
      otime4.innerText=second;
    if(hour == 0 && minute == 0 && second == 0){
      clearInterval(timer);
                otime.innerText = "秒杀结束";
                flag=false;
    }
  }, 1000);

//第二个轮播

  var swiper  = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 0,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination:{
      el:'.swiper-pagination',
      clickable:true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });



  var swiper = new Swiper('.foo-swiper-container', {
    spaceBetween: 30,
    loop:true,
    autoplay:true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
  });


})





//
// window.onload=function(){

// }