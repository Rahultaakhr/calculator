// console.log("Rahul");

// let num_input=document.querySelector('.num_input')
// let numeric=document.getElementsByClassName("numeric")
// let input_sec=document.querySelector('.result_section input')
// let resultBtn=document.getElementsByClassName("equal")

// function mainfun(){
//     Array.from(numeric).forEach((el,i)=>{
//         el.addEventListener("click",()=>{
//             input_sec.value=`${input_sec.value+el.innerHTML}`
            
//             // console.log(result)
            
//             let result = eval(input_sec.value)
//             console.log(result);
//             return eval(input_sec.value);
//         })
        
//     })
//     // console.log(result);
// }
// mainfun()
// // resultBtn.addEventListener('click',()=>{
// //     console.log('hello rahul');
// // })
let input=document.getElementsByClassName("input")[0]

let numeric=document.querySelectorAll(".numeric")
Array.from(numeric).forEach((el)=>{
el.addEventListener('click',(e)=>{
    // console.log(el);
    if(e.target.innerHTML=="="){
        input.value=  eval(input.value)
        input.value= (`${input.value}`)
        console.log(input.value);
    //   console.log(e.target);
          
    }
    else if(e.target.innerHTML=="c"){
        let string=input.value.toString().slice(0, -1);
        // input.value=input.value.toS
        input.value=string
    }
    else{
        input.value=`${input.value+el.textContent}`
    }
})
})


// object oriented programming

class RailwayForm{
    submit(){
        alert(this.name+" form submitted")
    }
    cancel(){
        alert(this.name +" your form is cancel")
    }
    fill(givenName){
        this.name=givenName
    }
}


class MertoRailwayForm extends RailwayForm{
    constructor(name){
        // this.fill()
        super(name)
        this.name=name
        this.submit()
        this.reservation()
        this.cancel()
    }
    reservation(){
        confirm(this.name+" Confirm Your Reservation")
    }
}
let RahulForm =new MertoRailwayForm("Rahul")
// RahulForm.fill("Rahul")
let SakshiForm=new MertoRailwayForm("Sakshi")
// SakshiForm.fill("Sakshi")

// SakshiForm.submit()
// SakshiForm.reservation()
// RahulForm.submit()
// RahulForm.reservation()
// SakshiForm.cancel()











































