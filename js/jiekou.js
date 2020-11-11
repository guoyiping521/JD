$(function(){
    //商品接口
// $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php",{
//   pimg:"//img14.360buyimg.com/jdcms/s300x300_jfs/t1/59022/28/10293/141808/5d78088fEf6e7862d/68836f52ffaaad96.jpg",
//   pname:"Apple iPhone 11 (A2223) 128GB 黑色 移动联通电信4G手机 双卡双待",
//   pprice:"4790.00",
//   uid:43997
// },data=>{
//   console.log(data);
// })



// //
// $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php",{
//   pimg:"//img20.360buyimg.com/jdcms/s300x300_jfs/t1/121809/32/17392/111264/5fa163cdE0211249f/e1693d7e2f415c8d.jpg",
//   pname:"沃野发光静音游戏鼠标有线笔记本台式机电脑家用办公 LOL吃鸡CF绝地求生宏电竞非无声加重 机械蛇磨砂黑(静音升级版)",
//   pprice:"200.00",
//   uid:43997
// },data=>{
//   console.log(data);
// })

  // 商品列表接口
  $.get("http://jx.xuzhixiang.top/ap/api/productlist.php",{
    uid:43997,
    pagesize:10,
  },data=>{
    console.log(data);
    // let productDatas=data
    //  localStorage.setItem("data",JSON.stringify(productDatas));
    // let data1=JSON.parse(localStorage.getItem("productDatas"));
    str="";
    let data2=data.data
    console.log(data2);
    console.log(data2[0]);
    // for(var item in data2){
      for(let i=0;i<data2.length;i++){
     
    // console.log(data2[i].pid);
      str+=`
      <div class="list" data-id="${data2[i].pid}">
      <a href="xiangqing.html?id=${data2[i].pid}"><img src="${data2[i].pimg}" alt="" class="img"></a>
      <p class="name">${data2[i].pname}</p>
      <div class="ogw">
        <p class="price"><span>￥</span>${data2[i].pprice}</p>
        <p class="jiaru" data-id="${data2[i].pid}" >加入购物车</p>
      </div>  
    </div>
      `;
    }
    // console.log(str);
    $(".shuju").html(str)
  })

  

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
     $.each(res,function(index,item){
         str1+=`
      
   
          <div class="name">${item.pname}</div>
          <div class="navimg"><img src="http://m.360buyimg.com/cc/jfs/t1/131760/40/12813/34661/5f8d5e9aEafe475c8/42e7f0669a582bd1.png" alt=""></div>
          <div class="price">
           <div class="price_r">
             <span class="span1">累计评价</span>
             <span class="span2">378万+</span>
           </div>
            <div class="price_t">
              <h5>京东价</h5>
              <i>￥</i>
              <span class="span1">${item.pprice}</span>
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
     
        
         `;
     })
     $(".banner_r").html(str1);
 })


})