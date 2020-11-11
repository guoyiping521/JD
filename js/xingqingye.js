$(function(){


  

  //详情页商品接口
var id=location.search.split("=")[1];
// var pid=location.search.replace("?","");
 $.get("http://jx.xuzhixiang.top/ap/api/detail.php",{
  id:id,
 },res=>{
    //  console.log(res);
    //  let data1=res.data
    // console.log(data1);
    let str1="";
    console.log(res.data)
    str1+=`
     <div class="banner_l">
    <div class="product-intro">
      <div class="center">
      
          <div class="product-left">
           <div class="box" id="box">
               <div class="smallbox">
                   <img src="${res.data.pimg}">
                   <span class="i_box"></span>
                   <div class="search"></div>
               </div>
               <div class="bigbox">
                   <img src="${res.data.pimg}" style="position: absolute;left: 0;top:0;">
               </div>
           </div>
      
              <div class="listimg">
              <a href="javascript:;" >
              <i class="sprite-arrow-prev" id="spec-forward"></i>
              </a>
              <a href="javascript:;" >
              <i class="sprite-arrow-next" id="spec-backward"></i>
              </a>
      
                 <div class="list_center" id="list_center">
                  <ul style="position: absolute;top: 0;left: 0;">
                      <li><img src="${res.data.pimg}"/></li>
                      <li><img src="${res.data.pimg}"/></li>
                      <li><img src="${res.data.pimg}"/></li>
                      <li><img src="${res.data.pimg}"/></li>
                      <li><img src="${res.data.pimg}"/></li>
                  </ul>
                 </div>
             </div>
          </div>
      </div>
      </div>
      
   </div> 



   <div class="banner_r">
      <div class="name">${res.data.pname}</div>
     <div class="navimg"><img src="http://m.360buyimg.com/cc/jfs/t1/131760/40/12813/34661/5f8d5e9aEafe475c8/42e7f0669a582bd1.png" alt=""></div>
     <div class="price">
      <div class="price_r">
        <span class="span1">累计评价</span>
        <span class="span2">378万+</span>
      </div>
       <div class="price_t">
         <h5>京东价</h5>
         <i>￥</i>
         <span class="span1">${res.data.pprice}</span>
         <span class="span2">降价通知</span>
       </div>
       <div class="price_b">
        <h5>促销</h5>
        <span class="span1">换购</span>
        <span class="span2">购买一件可优惠换购热销商品 立即换购&gt;&gt;</span>
      </div>
     </div>
     <div class="xiaoliang">
       <span class="span1">销量榜</span>
       <span class="span2">手机销量排名 第1名</span>
       <span class="span3"> 查看榜单&gt;</span>
     </div>
     <div class="addcart">
       <span class="add">+</span>
       <p class="num">1</p>
       <span class="jian">-</span>
     </div>
     <div class="jiaru">加入购物车</div>  
    </div>  

    `;
    $(".banner").html(str1);
 }).then(function(){

//

var box = document.getElementById("box");
var smallbox = box.children[0];
var bigbox = box.children[1];
var bigimg = bigbox.children[0];
var smallpic = smallbox.children[0];
var i_box = smallbox.children[1];
var list_img = document.getElementById("list_center");
var list_ul=list_img.getElementsByTagName("ul")[0];
var list_li=list_img.getElementsByTagName("li");
var leftpre=document.getElementById("spec-forward");
var rightpre=document.getElementById("spec-backward");




smallbox.onmouseover = function () {

    i_box.style.display="block";
    bigbox.style.display="block";

    smallbox.onmousemove = function (event) {
        var event = event || window.event;

        var pinX = event.clientX - smallbox.offsetParent.offsetLeft - i_box.offsetWidth / 2;
        var pinY = event.clientY - smallbox.offsetParent.offsetTop - i_box.offsetHeight / 2;

        if (pinX < 0) {
            pinX = 0;
        }
        if (pinX >= smallbox.offsetWidth - i_box.offsetWidth) {
            pinX = smallbox.offsetWidth - i_box.offsetWidth;

        }

        if (pinY < 0) {
            pinY = 0;
        }
        if (pinY >= smallbox.offsetHeight - i_box.offsetHeight) {
            pinY = smallbox.offsetHeight - i_box.offsetHeight;

        }


        i_box.style.left = pinX + "px";
        i_box.style.top = pinY + "px";


        bigimg.style.left = -pinX / (smallbox.offsetWidth / bigbox.offsetWidth) + "px";
        bigimg.style.top = -pinY / (smallbox.offsetHeight / bigbox.offsetHeight) + "px";





    }

}

smallbox.onmouseout=function () {
    i_box.style.display="none";
    bigbox.style.display="none";
}


for (var i=0;i<list_li.length;i++)
{

    (
        function (i) {

            var img= list_li[i];
            img.onmouseover=function()
            {
                smallpic.src="../img/"+(i+1)+".jpg";
                bigimg.src="../img/"+"big"+(i+1)+".jpg";

            }



        }

    )(i)


}
list_ul.style.width=58*list_li.length+"px";
var i=list_li.length-5;
var index=0;
var indexon=-58;
var leftindex=parseInt(list_ul.style.left);

leftpre.onclick=function () {
var leftindex=parseInt(list_ul.style.left);
   console.log(i*index);
   console.log(leftindex);
    if(leftindex>i*indexon)
    {
        index=index+(-58);
        list_ul.style.left=index+"px";


    }


}

rightpre.onclick=function () {
    var leftindex=parseInt(list_ul.style.left);

    if(leftindex<0)
    {
        index=index-(-58);
        list_ul.style.left=index+"px";

    }

}

 })





})
