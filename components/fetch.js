

let getdata = async (url) =>{
    let res =await fetch(url)
    let data = await res.json()

    return data.meals
}



let append =  (data,container)=>{
                console.log(data)
            data.map(({strMealThumb,idMeal,strMeal,strCategory,strArea}) =>{

                let div = document.createElement("div")

                let pic= document.createElement("img")
                pic.src = strMealThumb

                let id = document.createElement("p")
                id.innerText=` ID : ${idMeal}`

                let name = document.createElement("h1")
                name.innerHTML=strMeal

                let cat = document.createElement("h3")
                cat.innerText=`category : ${strCategory}`

                let loc = document.createElement("h4")
                loc.innerText=`location : ${strArea}`

                div.append(name,id,cat,loc,pic)

                container.append(div)
            })
}

export {getdata,append}