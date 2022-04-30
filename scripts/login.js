import {nav} from "../components/nav.js"

document.getElementById("navbar").innerHTML=nav()


let login= async ()=>{
    let user_data ={
        username:document.getElementById("username").value,
        password:document.getElementById("password").value
    }

    user_data = JSON.stringify(user_data)

    //line 15-22 we have send it to the server
    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
        method:"POST",
        body:user_data,

        headers:{
            "Content-Type":"application/json"
        }
    })


    //lets check what data we are getting. we are getting res value from line 15.
    let data = await res.json()

    let username= document.getElementById("username").value;
    getuserdetails(username, data.token)
}
document.getElementById("submit").addEventListener("click",login)



//server has send you a token so using that token we get values
let getuserdetails= async (username,token) =>{

    // we are working as per the documentation over here.
    let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
        //we are 
        headers:{
            Authorization : `Bearer ${token}`
        }
    })

    let data =await res.json();
   console.log(data)  
   return data
}

// export{getuserdetails}