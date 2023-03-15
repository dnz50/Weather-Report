const url="https://api.openweathermap.org/data/2.5/";
const key="5d5395709b8325027441073d7ee03acc"



const input = document.getElementById("searchBar");
input.addEventListener("keyup", e=>{
    if(e.key == "Enter" && input.value !=""){
        getResult(input.value)
    }
    
})

    const getResult=(cityName)=>{
        
        let query=`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
        console.log(query)
        fetch(query)
        .then(weather=>{
            return weather.json()

        })
        .then(displayResult)
    }
    const displayResult=(result)=>{
        let city=document.querySelector(".city")
        city.innerText=`${result.name}, ${result.sys.country}`

        let temp=document.querySelector(".temp")
        temp.innerText=`${Math.round(result.main.temp)} °C`

        let desc = document.querySelector(".desc")
        desc.innerText=result.weather[0].description

        
            let durum=desc.textContent
           
            let icons =document.querySelector("i")

            if (durum =="açık"){
                icons.className=`bi bi-sun`
                
            }
            else if(durum =="kapalı"){
                icons.className="bi bi-clouds"
            }
            else if(durum.includes("bulutlu")){
                icons.className=`bi bi-cloud-sun`
            }
            
            else if(durum.includes("kar")){
                icons.className="bi bi-snow"
            }
            else if(durum.includes("sisli")){
                icons.className="bi bi-water"
            }
            else{
                icons.className="bi bi-cloud-rain-heavy"
            }
        let minmax= document.querySelector(".minmax")
        minmax.innerText=`Hissedilen sıcaklık: ${Math.round(result.main.feels_like)} °C
         Nem oranı: ${Math.round(result.main.humidity)} % 
         Rüzgar hızı: ${ Math.round(result.wind.speed)} km/h`
         
         input.value=""
    }

    