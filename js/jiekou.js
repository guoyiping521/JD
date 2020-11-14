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
    // uid:localStorage.getItem("uid"),
    pagesize:10,
  },data=>{
   // console.log(data);
    // let productDatas=data
    //  localStorage.setItem("data",JSON.stringify(productDatas));
    // let data1=JSON.parse(localStorage.getItem("productDatas"));
    str="";
    let data2=data.data
    //console.log(data2);
   // console.log(data2[0]);
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
// var id=location.search.split("=")[1];
// // var pid=location.search.replace("?","");
//  $.get("http://jx.xuzhixiang.top/ap/api/detail.php",{
//   id:id,
//  },res=>{
//     //  console.log(res);
//     //  let data1=res.data
//     // console.log(data1);
//     let str1="";
//     console.log(res.data)
//      $('.name').html(res.data.pname)
//      $('.price').html(res.data.pprice)
    
     

//  })


})