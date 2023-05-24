//import rect class from rectangle module
import { rect } from "./rectangle";


//get form data into DOM for API handling
let calculateButton=window.document.getElementById("calculate-btn")
let clearButton=window.document.getElementById("clear-btn")
let areaContainer=window.document.getElementById("area-container")
let periContainer=window.document.getElementById("perimeter-container")

//Hide area and perimeter input boxes
areaContainer.hidden=true
periContainer.hidden=true

//create click event procedure for 'Calculate' button
calculateButton.addEventListener("click",(e)=>{
    e.preventDefault()

//Hide area and perimeter input boxes
areaContainer.hidden=false
periContainer.hidden=false

    //get form data into DOM for API handling
let L=window.document.getElementById("length")
let B=window.document.getElementById("breadth")
let area=window.document.getElementById("area")
let perimeter=window.document.getElementById("perimeter")


//throwing exception (control) for user entering negative values of length and breath

const error="Sorry!, only positive values are allowed. Click on browser refresh button and try again."
if (L.value<0 || B.value<0) {
alert(error)
window.location.reload()
}

//assign user length and breadth values(arguments) to 'len' and 'bre' parameters of the 'rect' methods
L=L.value
B=B.value
let myrect=new rect(L,B)


//  area result-spitting values of area and perimeter to the HTML form 'Area' and 'Perimeter' input controls
area.value=myrect.getArea(L,B)

//  perimeter result
perimeter.value=myrect.getPerimeter(L,B)
})

//create click event procedure for 'Clear' button
clearButton.addEventListener("click",(e)=>{
    e.preventDefault()

//get form data into DOM for API handling
let L=window.document.getElementById("length")
let B=window.document.getElementById("breadth")

//Hide area and perimeter input boxes
areaContainer.hidden=true
periContainer.hidden=true

//assign blank values (null) to length and breadth input boxes in the user form
L.value=" "
B.value=" "
})