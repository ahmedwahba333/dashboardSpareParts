import { mySearch, mySort, searchmood,darkFun } from "./searchSort.js";
window.searchmood = searchmood;
window.darkFun = darkFun;

let myObj = new mySearch();
myObj.catBrandName = document.getElementsByClassName("catBrandName");
myObj.catModelName = document.getElementsByClassName("catModelName");
myObj.catYear = document.getElementsByClassName("catYear");
myObj.itemName = document.getElementsByClassName("itemName");
myObj.itemDesc = document.getElementsByClassName("itemDesc");
myObj.itemPrice = document.getElementsByClassName("itemPrice");
myObj.country = document.getElementsByClassName("country");
document.getElementById("catBrandNameIDSrch").addEventListener("click", () => {
  myObj.searchKeyUp(
    myObj.catBrandName,
    document.getElementById("search").value
  );
});
document.getElementById("catModelNameIDSrch").addEventListener("click", () => {
  myObj.searchKeyUp(
    myObj.catModelName,
    document.getElementById("search").value
  );
});
document.getElementById("catYearIDSrch").addEventListener("click", () => {
  myObj.searchKeyUp(myObj.catYear, document.getElementById("search").value);
});
document.getElementById("itemNameIDSrch").addEventListener("click", () => {
  myObj.searchKeyUp(myObj.itemName, document.getElementById("search").value);
});
document.getElementById("itemDescIDSrch").addEventListener("click", () => {
  myObj.searchKeyUp(myObj.itemDesc, document.getElementById("search").value);
});
document.getElementById("itemPriceIDSrch").addEventListener("click", () => {
  myObj.searchKeyUp(myObj.itemPrice, document.getElementById("search").value);
});
document.getElementById("countryIDSrch").addEventListener("click", () => {
  myObj.searchKeyUp(myObj.country, document.getElementById("search").value);
});

let sortObj = new mySort();

document.getElementById("idLowerToUpper").addEventListener("click", () => {
  sortObj.priceClass = document.getElementsByClassName("itemPrice");
  sortObj.sortPriceFun(sortObj.lowerToUpper, sortObj.priceClass);
});
document.getElementById("idUpperToLower").addEventListener("click", () => {
  sortObj.priceClass = document.getElementsByClassName("itemPrice");
  sortObj.sortPriceFun(sortObj.upperToLower, sortObj.priceClass);
});

document.getElementById("idLowerToUpperYear").addEventListener("click", () => {
  sortObj.priceClass = document.getElementsByClassName("catYear");
  sortObj.sortPriceFun(sortObj.lowerToUpper, sortObj.priceClass);
});
document.getElementById("idUpperToLowerYear").addEventListener("click", () => {
  sortObj.priceClass = document.getElementsByClassName("catYear");
  sortObj.sortPriceFun(sortObj.upperToLower, sortObj.priceClass);
});

document.getElementById("idAtOZ").addEventListener("click", () => {
  sortObj.catBrandNameClass = document.getElementsByClassName("catBrandName");
  sortObj.sortNameFun("AtoZ", sortObj.catBrandNameClass);
});

document.getElementById("idZtoA").addEventListener("click", () => {
  sortObj.catBrandNameClass = document.getElementsByClassName("catBrandName");
  sortObj.sortNameFun("ZtoA", sortObj.catBrandNameClass);
});

document.getElementById("idAtOZCatMod").addEventListener("click", () => {
  sortObj.catBrandNameClass = document.getElementsByClassName("catModelName");
  sortObj.sortNameFun("AtoZ", sortObj.catBrandNameClass);
});

document.getElementById("idZtoACatMod").addEventListener("click", () => {
  sortObj.catBrandNameClass = document.getElementsByClassName("catModelName");
  sortObj.sortNameFun("ZtoA", sortObj.catBrandNameClass);
});

document.getElementById("idAtOZItemName").addEventListener("click", () => {
  sortObj.catBrandNameClass = document.getElementsByClassName("itemName");
  sortObj.sortNameFun("AtoZ", sortObj.catBrandNameClass);
});

document.getElementById("idZtoAItemName").addEventListener("click", () => {
  sortObj.catBrandNameClass = document.getElementsByClassName("itemName");
  sortObj.sortNameFun("ZtoA", sortObj.catBrandNameClass);
});

document.getElementById("idAtOZICountry").addEventListener("click", () => {
  sortObj.catBrandNameClass = document.getElementsByClassName("country");
  sortObj.sortNameFun("AtoZ", sortObj.catBrandNameClass);
});

document.getElementById("idZtoACountry").addEventListener("click", () => {
  sortObj.catBrandNameClass = document.getElementsByClassName("country");
  sortObj.sortNameFun("ZtoA", sortObj.catBrandNameClass);
});

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

// dark mode buttun
// document.getElementById("darkBtn").addEventListener("click",()=>{
//   if (document.getElementById("myBody").hasAttribute("data-bs-theme")) {

//     document.getElementById("myBody").removeAttribute("data-bs-theme")
//   }else{
//     document.getElementById("myBody").setAttribute("data-bs-theme","dark")
//   }
//   console.log(document.getElementById("myBody").hasAttribute("data-bs-theme"));
// })
