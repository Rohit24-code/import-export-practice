import {nav} from "../components/nav.js"

document.getElementById("navbar").innerHTML=nav()



import {getdata,append} from "../components/fetch.js"

let box = document.getElementById("box")

let urlrandom="https://www.themealdb.com/api/json/v1/1/random.php"

getdata(urlrandom).then((res)=>{

    append(res,box)
})