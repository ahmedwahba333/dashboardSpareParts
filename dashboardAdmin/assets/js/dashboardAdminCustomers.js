import { mySearch, mySort, searchmood, darkFun } from "./searchSort.js";
window.searchmood = searchmood;
window.darkFun = darkFun;

let myObj = new mySearch();
myObj.customerName = document.getElementsByClassName("customerName");
myObj.customerNID = document.getElementsByClassName("customerNID");
myObj.customerPhone = document.getElementsByClassName("customerPhone");
myObj.customerEmail = document.getElementsByClassName("customerEmail");
myObj.customerAddress = document.getElementsByClassName("customerAddress");
myObj.customerCity = document.getElementsByClassName("customerCity");
myObj.carBrand = document.getElementsByClassName("carBrand");
myObj.carModel = document.getElementsByClassName("carModel");
myObj.carYear = document.getElementsByClassName("carYear");
myObj.customerGender = document.getElementsByClassName("customerGender");
myObj.customerStatus = document.getElementsByClassName("customerStatus");

document.getElementById("merchNameBTn").addEventListener("click", () => {
  myObj.searchKeyUp(
    myObj.customerName,
    document.getElementById("search").value
  );
});
document.getElementById("merchNIDBTn").addEventListener("click", () => {
  myObj.searchKeyUp(myObj.customerNID, document.getElementById("search").value);
});
document.getElementById("merchPhoneBTn").addEventListener("click", () => {
  myObj.searchKeyUp(
    myObj.customerPhone,
    document.getElementById("search").value
  );
});

document.getElementById("merchEmailBTn").addEventListener("click", () => {
  myObj.searchKeyUp(
    myObj.customerEmail,
    document.getElementById("search").value
  );
});
document.getElementById("merchAddressBTn").addEventListener("click", () => {
  myObj.searchKeyUp(
    myObj.customerAddress,
    document.getElementById("search").value
  );
});
document.getElementById("merchCityBTn").addEventListener("click", () => {
  myObj.searchKeyUp(
    myObj.customerCity,
    document.getElementById("search").value
  );
});

document.getElementById("carBrandBTn").addEventListener("click", () => {
  myObj.searchKeyUp(myObj.carBrand, document.getElementById("search").value);
});

document.getElementById("carModelBTn").addEventListener("click", () => {
  myObj.searchKeyUp(myObj.carModel, document.getElementById("search").value);
});
document.getElementById("yearBTn").addEventListener("click", () => {
  myObj.searchKeyUp(myObj.carYear, document.getElementById("search").value);
});
document.getElementById("genderBTn").addEventListener("click", () => {
  myObj.searchKeyUp(
    myObj.customerGender,
    document.getElementById("search").value
  );
});

document.getElementById("merchStatusBTn").addEventListener("click", () => {
  myObj.searchKeyUp(
    myObj.customerStatus,
    document.getElementById("search").value
  );
});

let sortObj = new mySort();
sortObj.customerName = document.getElementsByClassName("customerName");
sortObj.customerEmail = document.getElementsByClassName("customerEmail");
sortObj.customerAddress = document.getElementsByClassName("customerAddress");
sortObj.customerCity = document.getElementsByClassName("customerCity");
sortObj.carYear = document.getElementsByClassName("carYear");
sortObj.carBrand = document.getElementsByClassName("carBrand");
sortObj.carModel = document.getElementsByClassName("carModel");

document.getElementById("idAtOZ").addEventListener("click", () => {
  sortObj.sortNameFun("AtoZ", sortObj.customerName);
});

document.getElementById("idZtoA").addEventListener("click", () => {
  sortObj.sortNameFun("ZtoA", sortObj.customerName);
});



document.getElementById("idAtOZCatMod").addEventListener("click", () => {
  sortObj.sortNameFun("AtoZ", sortObj.customerEmail);
});

document.getElementById("idZtoACatMod").addEventListener("click", () => {
  sortObj.sortNameFun("ZtoA", sortObj.customerEmail);
});



document.getElementById("idAtOZItemName").addEventListener("click", () => {
  sortObj.sortNameFun("AtoZ", sortObj.customerAddress);
});

document.getElementById("idZtOAItemName").addEventListener("click", () => {
  sortObj.sortNameFun("ZtoA", sortObj.customerAddress);
});




document.getElementById("idAtOZCountry").addEventListener("click", () => {
  sortObj.sortNameFun("AtoZ", sortObj.customerCity);
});

document.getElementById("idZtOAICountry").addEventListener("click", () => {
  sortObj.sortNameFun("ZtoA", sortObj.customerCity);
});












document.getElementById("idLowerToUpper").addEventListener("click", () => {
    sortObj.sortPriceFun(sortObj.lowerToUpper, sortObj.carYear);
  });
  document.getElementById("idUpperToLower").addEventListener("click", () => {
    sortObj.sortPriceFun(sortObj.upperToLower, sortObj.carYear);
  });











  document.getElementById("idAtOZBrand").addEventListener("click", () => {
    sortObj.sortNameFun("AtoZ", sortObj.carBrand);
  });
  
  document.getElementById("idZtOABrand").addEventListener("click", () => {
    sortObj.sortNameFun("ZtoA", sortObj.carBrand);
  });


















  document.getElementById("idAtOZModel").addEventListener("click", () => {
    sortObj.sortNameFun("AtoZ", sortObj.carModel);
  });
  
  document.getElementById("idZtOAModel").addEventListener("click", () => {
    sortObj.sortNameFun("ZtoA", sortObj.carModel);
  });





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
