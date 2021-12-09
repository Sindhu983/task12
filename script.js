const inputs=document.querySelectorAll(".angle-input")
// console.log(inputs)
const isTriangleBtn=document.querySelector("#is-triangle-btn")
const outputE1=document.querySelector("#output")


function calculateSumOfAngles(angle1,angle2,angle3){
    
    const sumOfAngles=angle1+angle2+angle3;
    // console.log(sumOfAngles);
    return sumOfAngles;

}


function isTriangle(){
    const sumOfAngles=calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value))
    // console.log(sumOfAngles);
    if (sumOfAngles===180){
        // console.log("yeah! The angles form a triangle");
        outputE1.innerText="yeah! The angles form a triangle"
    }
    else{
        // console.log("No! The angles not form a triangle")
        outputE1.innerText="No! The angles not form a triangle"
    }
    


}
isTriangleBtn.addEventListener("click",isTriangle)