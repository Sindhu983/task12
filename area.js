const side=document.querySelectorAll(".input")
const submitBtn=document.querySelector("#submit-btn")
const outputE1=document.querySelector("#output")

function calculateMultiplyOfTwo(base,height){
    const areaOfTriangle=1/2*(base*height)
    return areaOfTriangle;
}

function calculateAreaOfTriangle(){
    const areaOfTriangle = calculateMultiplyOfTwo(Number(side[0].value),Number(side[1].value))
    outputE1.innerText= "Areas of Trinagle is " + areaOfTriangle + "㎠"



}

submitBtn.addEventListener("click", calculateAreaOfTriangle);