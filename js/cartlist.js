
$.get("http://jx.xuzhixiang.top/ap/api/cart-list.php",{
  id:localStorage.getItem("id"),
},res=>{
//  console.log(res);
  var data1=res.data;
   var str="";
  for(let i in data1){
    // console.log(data1[i])

    str+=`
    <div class="jtshop" data-id="${data1[i].pid}">
    <div class="p-checkbox"><input type="checkbox" class="ck"> </div>
    <div class="jdsp">
      <div class="jdspimg"><img src="${data1[i].pimg}"></div>
      <div class="jdsptxt">${data1[i].pname}</div>
    </div>
    <div class="chicun">
    
    </div>
    <div class="price">
      ${data1[i].pprice}
    </div>
    <div class="aj">
      <button class="minus" data-id="${data1[i].pid}">-</button>
      <div class="num">
        <input type="text" value="${data1[i].pnum}" class="nums">
      </div>
      <button class="plus" data-id="${data1[i].pid}">+</button>
    </div>
    <div class="danprice">${data1[i].pprice*data1[i].pnum}</div>
    <div class="delete">
      <span class="del" data-id="${data1[i].pid}">删除</span>
      <span class="guanzhu">移入关注</span>
    </div>
    </div>
    `;

  }
  $(".maxbox").html(str);
 // location.reload();
//全选
// $("quan .checkall").change(function(){
//   console.log($(this).prop("checked"));
//   $(".p-checkbox input").prop("checked",$(this).prop("checkded"));
// });
// $("div input").click(function(){
//   if($(".maxboxp .checkbox input").length==$("p-checkbox input:checked").length){
//     $("quan .checkbox").prop("checked",true);
//   }else{
//     $(".quan .checkbox").prop("checked",false)
//   }
// })

//


// //
let checkAll=document.querySelector("#checkall");
this.list=document.querySelectorAll(".jtshop");
this.cks=document.querySelectorAll(".ck");
this.perprice=document.querySelectorAll(".price");
this.pertotalprice=document.querySelectorAll(".danprice");
this.del=document.querySelectorAll(".del");
let totalPrice=document.querySelector(".totalprice");
console.log(totalPrice);
checkAll.onclick = ()=>{
  //让所有单个复选框的选中状态和全选复选框的状态一致
  for (let i = 0; i <this.cks.length; i++) {
    this.cks[i].checked = checkAll.checked;
  }
}
//点击单个判断数量是否相同
for(let i=0;i<this.cks.length;i++){
  this.cks[i].onclick=()=>{
    var count=0;//计算
    for(let j=0;j<this.cks.length;j++){
      if(this.cks[j].checked){
        count++;
      }
    }
    if(count==this.cks.length){
      checkAll.checked=true;
    }else{
      checkAll.checked=false;
    }
  //计算总价
  let prices=0;
  for(let i=0;i<this.cks.length;i++){
    if(this.cks[i].checked){
      prices+=this.pertotalprice[i].innerText;
    }
  }
  totalPrice.innerText=prices;
  }
}
// 删除
$(".del").click(function(){
  // let pid=$(this).attr(data-id);
    $.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php",{
      uid:localStorage.getItem("id"),
      pid:$(this).attr("data-id"),
    },data=>{
      console.log(data)
      $(this).parent().parent().parent().remove();
    })
    
    location.reload();
})
//自增自减

this.snum=$(".num input");
this.minus = $(".minus");
this.plus = $(".plus");
this.perprice=$(".danprice");
this.price=$(".price")
// console.log(this.plus)
// console.log(this.snum.length)

let prices=0;
    for(let i=0;i<this.cks.length;i++){
      if(this.cks[i].checked){
        prices+=+this.pertotalprice[i].innerText;
      }
       totalPrice.innerText=Number(prices);
    }
   
    

for(let i = 0;i<this.snum.length;i++){
  this.minus[i].onclick=()=>{
  if(this.snum[i].value<1){
    this.snum[i].value=1;
  }
  this.snum[i].value--;
  this.perprice[i].innerHTML=this.price[i].innerText*this.snum[i].value;


  //
  let prices=0;
    for(let i=0;i<this.cks.length;i++){
      if(this.cks[i].checked){
        prices+=+this.pertotalprice[i].innerText;
      }
    }
    totalPrice.innerText=Number(prices);
  // $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php",{
  // uid:localStorage.setItem(data1[i].pid),
  // pid:localStorage.setItem(pid),
  // pnum:data1[id].pnum
  // },res=>{
  //   console.log(res);
  // })
}
this.plus[i].onclick=()=>{
  this.snum[i].value++;
this.perprice[i].innerHTML=this.price[i].innerText*this.snum[i].value;
console.log(this.perprice);

let prices=0;
    for(let i=0;i<this.cks.length;i++){
      if(this.cks[i].checked){
        prices+=+this.pertotalprice[i].innerText;
      }
    }
    totalPrice.innerText=Number(prices);
}

}

})

