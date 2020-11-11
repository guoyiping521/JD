
$.get("http://jx.xuzhixiang.top/ap/api/cart-list.php",{
  id:localStorage.getItem("id"),
},res=>{
 // console.log(res);
  var data1=res.data;
   var str="";
  for(let i in data1){
    console.log(data1[i])

    str+=`
    <div class="jtshop">
    <div class="p-checkbox"><input type="checkbox"> </div>
    <div class="jdsp">
      <div class="jdspimg"><img src="${data1[i].pimg}"></div>
      <div class="jdsptxt">${data1[i].pname}</div>
    </div>
    <div class="chicun">
    
    </div>
    <div class="price">
      ${data1[i].pprice}
      <div class="xian">限购5件</div>
    </div>
    <div class="aj">
      <button class="minus" data-id="${data1[i].pid}">-</button>
      <div class="num">
        <input type="text" value="${data1[i].pnum}">
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
$(".quan input").click(function(){
  //让所有的单个复选框都和选中的状态和全选复选框的状态一致
  $(".p-checkbox input").prop("checked",$(".quan input").prop("checked"));
  data1.forEach(item => {
    item.checked=$(".quan input").prop("checked");
  });
})
})