

let searchMood = "title";
function searchmood(id) {
  let searchLabel = document.getElementById("search");
  if (id == "catBrandNameIDSrch") {
    searchLabel.placeholder = "Search By Category Brand Name";
  } else if (id == "catModelNameIDSrch") {
    searchLabel.placeholder = "Search By Category Model Name";
  } else if (id == "catYearIDSrch") {
    searchLabel.placeholder = "Search By Category Year";
  } else if (id == "itemNameIDSrch") {
    searchLabel.placeholder = "Search By Item Name";
  } else if (id == "itemDescIDSrch") {
    searchLabel.placeholder = "Search By Item Description";
  }
  else if (id == "itemPriceIDSrch") {
    searchLabel.placeholder = "Search By Item Price";
  }
  else if (id == "countryIDSrch") {
    searchLabel.placeholder = "Search By Item Country";
  }
  searchLabel.focus();
}

// start searching object
class mySearch {
  constructor(catBrandName, catModelName, catYear, itemName, itemDesc, itemPrice, country) {
    this.catBrandName = catBrandName;
    this.catModelName = catModelName;
    this.catYear = catYear;
    this.itemName = itemName;
    this.itemDesc = itemDesc;
    this.itemPrice = itemPrice;
    this.country = country;
  }
  searchKeyUp(myElement, value) {
    for (let i = 0; i < myElement.length; i++) {
      myElement[i].parentElement.classList.add("dispNone");
      if (
        myElement[i].innerHTML
          .toLocaleLowerCase()
          .includes(value.toLocaleLowerCase())
      ) {
        myElement[i].parentElement.classList.remove("dispNone");

        myElement[i].style.color = "#30a4bc";
        myElement[i].style.fontWeight = "bold";
      }
    }
    if(value != ""){
      document.getElementById("mainTable").classList.remove("table-striped");
    }else{
      document.getElementById("mainTable").classList.add("table-striped");
    }
  }
}
// end searching object

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
  myObj.searchKeyUp(myObj.catModelName, document.getElementById("search").value);
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

// start sorting object
class mySort {
  constructor(priceClass, catBrandNameClass) {
    this.priceClass = priceClass;
    this.catBrandNameClass = catBrandNameClass;
  }
  lowerToUpper(a, b) {
    return a - b;
  }
  upperToLower(a, b) {
    return b - a;
  }

  sortPriceFun(myFunSort, myElements) {
    let priceArr = [];
    for (let i = 0; i < myElements.length; i++) {
      priceArr.push(myElements[i].innerText);
    }
    for (let i = 0; i < myElements.length; i++) {
      for (let x = 0; x < myElements.length; x++) {
        if (priceArr.sort(myFunSort)[i] == myElements[x].innerText) {
          document
            .getElementById("tableBody")
            .appendChild(myElements[x].parentElement);
        }
      }
    }
    this.sortColorFun(myElements, "#30a4bc", "bold");
  }

  sortNameFun(sortType, myElements) {
    let priceArr = [];
    for (let i = 0; i < myElements.length; i++) {
      priceArr.push(myElements[i].innerText);
    }
    if (sortType == "AtoZ") {
      priceArr.sort();
    } else if (sortType == "ZtoA") {
      priceArr.reverse();
    }
    for (let i = 0; i < myElements.length; i++) {
      for (let x = 0; x < myElements.length; x++) {
        if (priceArr[i] == myElements[x].innerText) {
          document
            .getElementById("tableBody")
            .appendChild(myElements[x].parentElement);
        }
      }
    }
    this.sortColorFun(myElements, "#30a4bc", "bold");
  }

  sortColorFun(myElements, myColor, myFontWeight) {
    for (let i = 0; i < myElements.length; i++) {
      myElements[i].style.color = myColor;
      myElements[i].style.fontWeight = myFontWeight;
    }
  }
}
// end sorting object

let sortObj = new mySort();

// sortObj.priceClass = document.getElementsByClassName("itemPrice");


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
$(document).ready(function(){
$("#priceBtnLabelId").click(function(){
  $("#priceBtnLabelIdToggle").slideToggle();
});



$("#yearBtnLabelId").click(function(){
  $("#yearBtnLabelIdToggle").slideToggle();
});


$("#AtoZBtnId").click(function(){
  $("#AtoZBtnIdToggle").slideToggle();
});

$("#ZtoABtnId").click(function(){
  $("#ZtoABtnIdToggle").slideToggle();
});


$("#sortBtnToggle").click(function(){
  $("#sortBtnToggleChild").slideToggle();
});

$(".itemNodeClass").click(function(){
  $(".itemNodeClassParent").fadeOut();
});





});









// document.getElementById("idAtOZ").addEventListener("click", () => {
//   sortObj.catBrandNameClass = document.getElementsByClassName("catBrandName");
//   sortObj.sortNameFun("AtoZ", sortObj.catBrandNameClass);
// });

// document.getElementById("idZtoA").addEventListener("click", () => {
//   sortObj.catBrandNameClass = document.getElementsByClassName("catBrandName");
//   sortObj.sortNameFun("ZtoA", sortObj.catBrandNameClass);
// });
// document.getElementById("idZtoA").addEventListener("click", () => {
//   sortObj.catBrandNameClass = document.getElementsByClassName("catBrandName");
//   sortObj.sortNameFun("ZtoA", sortObj.catBrandNameClass);
// });


// dark mode buttun
// document.getElementById("darkBtn").addEventListener("click",()=>{
//   if (document.getElementById("myBody").hasAttribute("data-bs-theme")) {
    
//     document.getElementById("myBody").removeAttribute("data-bs-theme")
//   }else{
//     document.getElementById("myBody").setAttribute("data-bs-theme","dark") 
//   }
//   console.log(document.getElementById("myBody").hasAttribute("data-bs-theme"));
// })
