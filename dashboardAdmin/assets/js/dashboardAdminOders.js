import { mySearch, mySort, searchmood,darkFun } from "./searchSort.js";
window.searchmood = searchmood;
window.darkFun = darkFun;

let myObj = new mySearch();
myObj.merchantName = document.getElementsByClassName("merchantName");
myObj.merchantNID = document.getElementsByClassName("merchantNID");
myObj.orderName = document.getElementsByClassName("orderName");
myObj.orderType = document.getElementsByClassName("orderType");
myObj.orderPrice = document.getElementsByClassName("orderPrice");

document.getElementById("merchNameBTn").addEventListener("click", () => {
  myObj.searchKeyUp(
    myObj.merchantName,
    document.getElementById("search").value
  );
});
document.getElementById("merchNIDBTn").addEventListener("click", () => {
  myObj.searchKeyUp(myObj.merchantNID, document.getElementById("search").value);
});
document.getElementById("merchOrderNameBTn").addEventListener("click", () => {
  myObj.searchKeyUp(myObj.orderName, document.getElementById("search").value);
});
document.getElementById("merchOrderTypeBTn").addEventListener("click", () => {
  myObj.searchKeyUp(myObj.orderType, document.getElementById("search").value);
});
document.getElementById("merchOrderPriceBTn").addEventListener("click", () => {
  myObj.searchKeyUp(myObj.orderPrice, document.getElementById("search").value);
});

let sortObj = new mySort();
sortObj.priceClass = document.getElementsByClassName("orderPrice");
sortObj.merchantNameClass = document.getElementsByClassName("merchantName");
sortObj.orderName = document.getElementsByClassName("orderName");
sortObj.orderType = document.getElementsByClassName("orderType");

document.getElementById("idLowerToUpper").addEventListener("click", () => {
  sortObj.sortPriceFun(sortObj.lowerToUpper, sortObj.priceClass);
});
document.getElementById("idUpperToLower").addEventListener("click", () => {
  sortObj.sortPriceFun(sortObj.upperToLower, sortObj.priceClass);
});
document.getElementById("idAtOZ").addEventListener("click", () => {
  sortObj.sortNameFun("AtoZ", sortObj.merchantNameClass);
});

document.getElementById("idZtoA").addEventListener("click", () => {
  sortObj.sortNameFun("ZtoA", sortObj.merchantNameClass);
});
document.getElementById("idAtOZCatMod").addEventListener("click", () => {
  sortObj.sortNameFun("AtoZ", sortObj.orderName);
});

document.getElementById("idZtoACatMod").addEventListener("click", () => {
  sortObj.sortNameFun("ZtoA", sortObj.orderName);
});
document.getElementById("idAtOZItemName").addEventListener("click", () => {
  sortObj.sortNameFun("AtoZ", sortObj.orderType);
});

document.getElementById("idZtoAItemName").addEventListener("click", () => {
  sortObj.sortNameFun("ZtoA", sortObj.orderType);
});



// dark mode buttun
// document.getElementById("darkBtn").addEventListener("click",()=>{
//   if (document.getElementById("myBody").hasAttribute("data-bs-theme")) {

//     document.getElementById("myBody").removeAttribute("data-bs-theme")
//   }else{
//     document.getElementById("myBody").setAttribute("data-bs-theme","dark")
//   }
//   console.log(document.getElementById("myBody").hasAttribute("data-bs-theme"));
// })

// jquery logic for label list and unorderd list
$(document).ready(function () {
  $("#priceBtnLabelId").click(function () {
    $("#priceBtnLabelIdToggle").slideToggle();
  });

  $("#yearBtnLabelId").click(function () {
    $("#yearBtnLabelIdToggle").slideToggle();
  });

  $("#AtoZBtnId").click(function () {
    $("#AtoZBtnIdToggle").slideToggle();
  });

  $("#ZtoABtnId").click(function () {
    $("#ZtoABtnIdToggle").slideToggle();
  });

  $("#sortBtnToggle").click(function () {
    $("#sortBtnToggleChild").slideToggle();
  });

  $(".itemNodeClass").click(function () {
    $(".itemNodeClassParent").fadeOut();
  });
});
