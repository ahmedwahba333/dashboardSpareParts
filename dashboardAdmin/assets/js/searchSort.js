// start searching object
export class mySearch {
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
      if(value != ""){
        document.getElementById("mainTable").classList.remove("table-striped");
      }else{
        document.getElementById("mainTable").classList.add("table-striped");
      }
    }
  }
  // end searching object
// start sorting object
export class mySort {
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
    