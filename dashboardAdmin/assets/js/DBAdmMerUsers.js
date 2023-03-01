import { mySearch, mySort, searchmood,darkFun } from "./searchSort.js";
window.searchmood = searchmood;
window.darkFun = darkFun;



let myObj = new mySearch();
myObj.merchantName = document.getElementsByClassName("merchantName");
myObj.merchantNID = document.getElementsByClassName("merchantNID");
myObj.merchantStatus = document.getElementsByClassName("merchantStatus");


document.getElementById("catBrandNameIDSrch").addEventListener("click", () => {
  myObj.searchKeyUp(
    myObj.merchantName,
    document.getElementById("search").value
  );
});
document.getElementById("catYearIDSrch").addEventListener("click", () => {
  myObj.searchKeyUp(
    myObj.merchantNID,
    document.getElementById("search").value
  );
});
document.getElementById("itemNameIDSrch").addEventListener("click", () => {
  myObj.searchKeyUp(myObj.merchantStatus, document.getElementById("search").value);
});






let sortObj = new mySort();

document.getElementById("idAtOZ").addEventListener("click", () => {
  sortObj.merchantName = document.getElementsByClassName("merchantName");
  sortObj.sortNameFun("AtoZ", sortObj.merchantName);
});

document.getElementById("idZtoA").addEventListener("click", () => {
  sortObj.merchantName = document.getElementsByClassName("merchantName");
  sortObj.sortNameFun("ZtoA", sortObj.merchantName);
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
  