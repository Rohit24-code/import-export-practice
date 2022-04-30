import {nav} from "../components/nav.js"
// import{ getuserdetails} from "./login.js"
document.getElementById("navbar").innerHTML=nav()
// document.getElementById("usernamee").innerText= getuserdetails()

let id;
let url;
let valued;



document.getElementById("input").addEventListener("input",ani)

import{getdata, append} from "../components/fetch.js"


  
function ani(){

  valued=  document.getElementById("input").value
  
  url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${valued}`


let container= document.getElementById("icontainer")



getdata(url).then((res)=>{

  container.innerHTML=""

    if(res===undefined){
      return false
    }else{
      append(res,container)
    }

})

}
// let userdetails = document.getElementById("userdetails")
// userdetails.innerHTML=getuserdetails()
// console.log(userdetails)
