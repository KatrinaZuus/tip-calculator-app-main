const bill = document.getElementById("bill")
const tip = Array.from(document.getElementsByClassName("tip"))
const people = document.getElementById("people")
const tipAmount = document.getElementById("tip-amount")
const totalAmount = document.getElementById("total-amount")
const resetButton = document.getElementsByClassName("reset")
const custom = document.getElementById("inputTip")




let billValue = 0
let tipValue = 0
let peopleInput = 0
let customInput = 0


custom.addEventListener("input", (event) => {
    tipValue = Number(event.target.value)
})

bill.addEventListener("input", (event) => {
  
    billValue = Number(event.target.value)
    event.preventDefault()
    // console.log (typeof billValue)
    tipAmaount()
})



tip.forEach((button)=>{ 
   
    
button.addEventListener("click", (event)=>{
tipValue = parseInt(event.target.innerText)
// console.log(tipValue)

})
})



people.addEventListener("input", (event)=>{
    peopleInput = Number(event.target.value)
    // console.log(peopleInput)
    tipAmaount()
})

function tipAmaount(){
    if (peopleInput !=0) {
        
        let resulTip = (billValue * tipValue/100)/peopleInput
        let resulrTotal = resulTip+billValue/peopleInput
        
        tipAmount.innerText = `${resulTip.toFixed(2)}`;
        totalAmount.innerText = `${resulrTotal.toFixed(2)}`;
    } 
    
    else {
        tipAmount.innerText = "0.00";
        totalAmount.innerText = "0.00";
    }
}





resetButton[0].addEventListener("click", ()=>{

    tipAmount.innerText = "0.00";
    totalAmount.innerText = "0.00";

    bill.value = "";
    people.value = "";
    tipValue.value = "";
})


