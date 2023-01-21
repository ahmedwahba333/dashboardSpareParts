let searchMood = "title";
function searchmood(id) {
  let searchLabel = document.getElementById("search");
  if (id == "merchNameBTn") {
    searchLabel.placeholder = "Search By Merchant Name";
  } else if (id == "merchNIDBTn") {
    searchLabel.placeholder = "Search By Merchant National Id";
  } else if (id == "merchOrderNameBTn") {
    searchLabel.placeholder = "Search By Order Name";
  } else if (id == "merchOrderTypeBTn") {
    searchLabel.placeholder = "Search By Order Type";
  } else if (id == "merchOrderPriceBTn") {
    searchLabel.placeholder = "Search By Order Price";
  }
  searchLabel.focus();
}
// start searching object
class mySearch {
  constructor(merchantName, merchantNID, orderName, orderType, orderPrice) {
    this.merchantName = merchantName;
    this.merchantNID = merchantNID;
    this.orderName = orderName;
    this.orderType = orderType;
    this.orderPrice = orderPrice;
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
  }
}
// end searching object
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
// start sorting object
class mySort {
  constructor(priceClass, merchantNameClass) {
    this.priceClass = priceClass;
    this.merchantNameClass = merchantNameClass;
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
sortObj.priceClass = document.getElementsByClassName("orderPrice");
sortObj.merchantNameClass = document.getElementsByClassName("merchantName");

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
