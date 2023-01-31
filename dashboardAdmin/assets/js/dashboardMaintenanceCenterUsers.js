import { mySearch, mySort, searchmood, darkFun } from "./searchSort.js";
window.searchmood = searchmood;
window.darkFun = darkFun;

let myObj = new mySearch();
myObj.maintenanceName = document.getElementsByClassName("maintenanceName");
myObj.maintenanceNID = document.getElementsByClassName("maintenanceNID");
myObj.maintenancePhone = document.getElementsByClassName("maintenancePhone");
myObj.maintenanceEmail = document.getElementsByClassName("maintenanceEmail");
myObj.maintenanceAddress =
  document.getElementsByClassName("maintenanceAddress");
myObj.maintenanceCity = document.getElementsByClassName("maintenanceCity");
myObj.maintenanceStatus = document.getElementsByClassName("maintenanceStatus");

document.getElementById("merchNameBTn").addEventListener("click", () => {
  myObj.searchKeyUp(
    myObj.maintenanceName,
    document.getElementById("search").value
  );
});
document.getElementById("merchNIDBTn").addEventListener("click", () => {
  myObj.searchKeyUp(
    myObj.maintenanceNID,
    document.getElementById("search").value
  );
});
document.getElementById("merchPhoneBTn").addEventListener("click", () => {
  myObj.searchKeyUp(
    myObj.maintenancePhone,
    document.getElementById("search").value
  );
});

document.getElementById("merchEmailBTn").addEventListener("click", () => {
  myObj.searchKeyUp(
    myObj.maintenanceEmail,
    document.getElementById("search").value
  );
});
document.getElementById("merchAddressBTn").addEventListener("click", () => {
  myObj.searchKeyUp(
    myObj.maintenanceAddress,
    document.getElementById("search").value
  );
});
document.getElementById("merchCityBTn").addEventListener("click", () => {
  myObj.searchKeyUp(
    myObj.maintenanceCity,
    document.getElementById("search").value
  );
});
document.getElementById("merchStatusBTn").addEventListener("click", () => {
  myObj.searchKeyUp(
    myObj.maintenanceStatus,
    document.getElementById("search").value
  );
});

let sortObj = new mySort();
sortObj.maintenanceName = document.getElementsByClassName("maintenanceName");
sortObj.maintenanceEmail = document.getElementsByClassName("maintenanceEmail");
sortObj.maintenanceAddress = document.getElementsByClassName("maintenanceAddress");
sortObj.maintenanceCity = document.getElementsByClassName("maintenanceCity");

document.getElementById("idAtOZ").addEventListener("click", () => {
  sortObj.sortNameFun("AtoZ", sortObj.maintenanceName);
});

document.getElementById("idZtoA").addEventListener("click", () => {
  sortObj.sortNameFun("ZtoA", sortObj.maintenanceName);
});

document.getElementById("idAtOZCatMod").addEventListener("click", () => {
  sortObj.sortNameFun("AtoZ", sortObj.maintenanceEmail);
});

document.getElementById("idZtoACatMod").addEventListener("click", () => {
  sortObj.sortNameFun("ZtoA", sortObj.maintenanceEmail);
});

document.getElementById("idAtOZItemName").addEventListener("click", () => {
  sortObj.sortNameFun("AtoZ", sortObj.maintenanceAddress);
});

document.getElementById("idZtOAItemName").addEventListener("click", () => {
  sortObj.sortNameFun("ZtoA", sortObj.maintenanceAddress);
});

document.getElementById("idAtOZCountry").addEventListener("click", () => {
  sortObj.sortNameFun("AtoZ", sortObj.maintenanceCity);
});

document.getElementById("idZtOAICountry").addEventListener("click", () => {
  sortObj.sortNameFun("ZtoA", sortObj.maintenanceCity);
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
