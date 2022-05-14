const btns = document.querySelectorAll(".tipBtn");
const resetBtn = document.querySelector(".resetBtn");

const tipAmountScreen = document.getElementById("tipAmount");
const tipTotalScreen = document.getElementById("tipTotal");

const errorText = document.getElementById("errorText");
const btnCustom = document.querySelector(".custom");

let tip = 0;
let tipAmount = 0;
let total = 0;

//for tip buttons
btns.forEach(function(btn){
  btn.addEventListener("click", function() {
    const billValue = parseInt(document.querySelector(".billInput").value);
    const peopleValue = parseInt(document.querySelector(".numberPeopleInput").value);
    const numPeople = document.querySelector(".numberPeople");
    if (peopleValue != 0) {
      tip = parseInt(btn.innerHTML);
      let totalAll = (billValue + (billValue / 100) * tip);
      let tipAmountAll = (totalAll - billValue) ;

      tipAmount = "$" + (tipAmountAll / peopleValue).toFixed(1);
      total = "$" + (totalAll / peopleValue).toFixed(1);

      //toggling reset Btn
      resetBtn.classList.add("resetBtnActive");
      resetBtn.addEventListener("click", function() {
        window.location.reload();
      });

      tipAmountScreen.innerHTML = tipAmount;
      tipTotalScreen.innerHTML = total;

      numPeople.classList.remove("isZero");
      errorText.classList.add("hidden");
      errorText.classList.remove("isZeroText");

    } else {

      numPeople.classList.add("isZero");
      errorText.classList.remove("hidden");
      errorText.classList.add("isZeroText");
    }
  })
});

//for custom button
console.log()

  btnCustom.addEventListener("click", function(){
    const billValue = parseInt(document.querySelector(".billInput").value);
    const peopleValue = parseInt(document.querySelector(".numberPeopleInput").value);
    const numPeople = document.querySelector(".numberPeople");
    if (peopleValue != 0 ) {
      tip = parseInt(btnCustom.value);
      let totalAll = (billValue + (billValue / 100) * tip);
      let tipAmountAll = (totalAll - billValue) ;

      tipAmount = "$" + (tipAmountAll / peopleValue).toFixed(1);
      total = "$" + (totalAll / peopleValue).toFixed(1);

      //toggling reset Btn
      resetBtn.classList.add("resetBtnActive");
      resetBtn.addEventListener("click", function() {
        window.location.reload();
      });

      tipAmountScreen.innerHTML = tipAmount;
      tipTotalScreen.innerHTML = total;

      numPeople.classList.remove("isZero");
      errorText.classList.add("hidden");
      errorText.classList.remove("isZeroText");

    } else {

      numPeople.classList.add("isZero");
      errorText.classList.remove("hidden");
      errorText.classList.add("isZeroText");
    }
  });
