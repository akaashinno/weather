// console.log("hello")
const button =document.getElementById("get-location")
const input =document.getElementById("input-city")
const subWeather = document.querySelector(".sub-weather");

const apiKey = "82005d27a116c2880c8f0fcb866998a0";

button.addEventListener("click", ()=>{
    const value = input.value;
    getData(value)
    // const result = await getData(value);
    // console.log(value)
    // navigator.geolocation.(gotLocation, failedToGet);
})

async function getData(city){
    subWeather.innerHTML=`<h3>Loading...</h3>`;
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    const data = await response.json();
    return showWeather(data);
}

let showWeather=(data)=>{
    
    // console.log(data.cod);
    if(data.cod == "404"){
        subWeather.innerHTML=`<h3>City not found</h3>`;
        // console.log("city not found")
        return;
    }
    // console.log(data);

    const dataIcon = data.weather[0].icon
    // console.log(dataIcon);
    
    if(dataIcon == "01d"){
        image = "icons/01d.png"
    }
    else if(dataIcon == "01n"){
        image = "icons/01n.png"
    }
    else if(dataIcon == "02d"){
        image = "icons/02d.png"
    }
    else if(dataIcon == "02n"){
        image = "icons/02n.png"
    }
    else if(dataIcon == "03d"){
        image = "icons/03d.png"
    }
    else if(dataIcon == "03n"){
        image = "icons/03n.png"
    }
    else if(dataIcon == "04d"){
        image = "icons/04d.png"
    }
    else if(dataIcon == "04n"){
        image = "icons/04n.png"
    }
    else if(dataIcon == "09d"){
        image = "icons/09d.png"
    }
    else if(dataIcon == "09n"){
        image = "icons/09n.png"
    }
    else if(dataIcon == "10d"){
        image = "icons/10d.png"
    }
    else if(dataIcon == "10n"){
        image = "icons/10n.png"
    }
    else if(dataIcon == "11d"){
        image = "icons/11d.png"
    }
    else if(dataIcon == "11n"){
        image = "icons/11n.png"
    }
    else if(dataIcon == "13d"){
        image = "icons/13d.png"
    }
    else if(dataIcon == "13n"){
        image = "icons/13n.png"
    }
    else if(dataIcon == "50d"){
        image = "icons/50d.png"
    }
    else if(dataIcon == "50n"){
        image = "icons/50n.png"
    }
    else if(dataIcon == "unknown"){
        image = "icons/unknown.png"
    }
    
    // <div class="icon"><img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt=""></div>

    subWeather.innerHTML = `
    <div class="icon"><img src=${image} alt=""></div>
    <div class="temp">${parseInt(data.main.temp-273)} &#8451</div>
    <div class="type">${data.weather[0].description}</div>
    <div class="location">${data.name + ", " + data.sys.country}</div>
    `;
}
function abc(){
 navigator.geolocation.getCurrentPosition(gotLocation,failedToGet)
}
abc();
async function gotLocation(position){
    // console.log(position);
    const result = await getLoc(
        position.coords.latitude,
        position.coords.longitude,
        console.log(position.coords.latitude),
        console.log(position.coords.longitude)
    );
}

function failedToGet(){
    console.log("There was some issue.")
}

async function getLoc(latitude,longitude){
    console.log(latitude,longitude);
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
    const locData = await promise.json();
    console.log(locData);
    return show(locData); 
}
function show(locData){
    const dataIcon = locData.weather[0].icon
    // console.log(dataIcon);
    
    if(dataIcon == "01d"){
        image = "icons/01d.png"
    }
    else if(dataIcon == "01n"){
        image = "icons/01n.png"
    }
    else if(dataIcon == "02d"){
        image = "icons/02d.png"
    }
    else if(dataIcon == "02n"){
        image = "icons/02n.png"
    }
    else if(dataIcon == "03d"){
        image = "icons/03d.png"
    }
    else if(dataIcon == "03n"){
        image = "icons/03n.png"
    }
    else if(dataIcon == "04d"){
        image = "icons/04d.png"
    }
    else if(dataIcon == "04n"){
        image = "icons/04n.png"
    }
    else if(dataIcon == "09d"){
        image = "icons/09d.png"
    }
    else if(dataIcon == "09n"){
        image = "icons/09n.png"
    }
    else if(dataIcon == "10d"){
        image = "icons/10d.png"
    }
    else if(dataIcon == "10n"){
        image = "icons/10n.png"
    }
    else if(dataIcon == "11d"){
        image = "icons/11d.png"
    }
    else if(dataIcon == "11n"){
        image = "icons/11n.png"
    }
    else if(dataIcon == "13d"){
        image = "icons/13d.png"
    }
    else if(dataIcon == "13n"){
        image = "icons/13n.png"
    }
    else if(dataIcon == "50d"){
        image = "icons/50d.png"
    }
    else if(dataIcon == "50n"){
        image = "icons/50n.png"
    }
    else if(dataIcon == "unknown"){
        image = "icons/unknown.png"
    }

    subWeather.innerHTML = `
    <div class="icon"><img src=${image} alt=""></div>
    <div class="temp">${parseInt(locData.main.temp-273)} &#8451</div>
    <div class="type">${locData.weather[0].description}</div>
    <div class="location">${locData.name + ", " + locData.sys.country}</div>
    `;
}