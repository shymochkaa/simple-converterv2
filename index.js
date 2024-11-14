const inputField = document.querySelector("#input-field")
const convertBtn = document.querySelector("#convert-btn")
const metersEl = document.querySelector("#meters-feet-el")
const litersEl = document.querySelector("#liters-gallons-el")
const kilogramsEl = document.querySelector("#kilograms-pounds-el")

const meter = 3.281
const liter = 0.264 
const kilogram = 2.204

convertBtn.addEventListener("click", ()=>{
    if (inputField.value === "" || inputField.value === "0" ) {
        alert("Please enter a value to convert.");
        return;
    }
    metersEl.textContent = `${inputField.value} meters = ${(inputField.value*meter).toFixed(3)} feet | ${inputField.value} feet = ${(inputField.value/meter).toFixed(3)} meters`
    litersEl.textContent = `${inputField.value} liters = ${(inputField.value*liter).toFixed(3)}  gallons | ${inputField.value} gallons = ${(inputField.value/liter).toFixed(3)} liters`
    kilogramsEl.textContent = `${inputField.value} kilos = ${(inputField.value*kilogram).toFixed(3)} pounds | ${inputField.value} pounds = ${(inputField.value/kilogram).toFixed(3)} kilos`
})




