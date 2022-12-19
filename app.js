let sendInfo = document.getElementById("sendInfo")
let cityInfo = document.getElementById("cityInfo")
let myBox = document.getElementById("myBox")
myBox.style.display = "none"



sendInfo.addEventListener('click', () => {
    let wind = document.getElementById("wind")
    let titleCity = document.getElementById("titleCity")
    let lonCity = document.getElementById("lonCity")
    let latCity = document.getElementById("latCity")
    let description = document.getElementById("description")
    let humidity = document.getElementById("humidity")
    let rotateWind = document.getElementById("rotateWind")
    let tempMin = document.getElementById("tempMin")
    let tempMax = document.getElementById("tempMax")
    let clouds = document.getElementById("clouds")
    let country = document.getElementById("country")
    let sealevel = document.getElementById("sealevel")



    myBox.style.display = "flex"
    const requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInfo.value}&units=metric&lang=fr&appid=d4dea9030ec58f50a3a25b2158bbca02`;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", requestURL);
    xhr.responseType = "json";

    xhr.onload = function(){
        if(xhr.status === 404){
            alert("Ville non trouver..");
            return;
        }else if(xhr.status === 401){
            alert("Erreur d'authentification");
            return;
        }else if(xhr.status === 500){
            alert("Erreur sur l'api");
            return;
        }
        let response = xhr.response;
        console.log(response)

        titleCity.innerHTML = "🌏 Localisation : " + response.name;
        wind.innerHTML = "🌀 Vitesse du vent : " + response.wind.speed + "m/s";
        lonCity.innerHTML = "🔷 Longitude : " + response.coord.lon;
        latCity.innerHTML = "🔷 Latitude : " + response.coord.lat;
        description.innerHTML = "🔷 Le ciel est  : " + response.weather[0].description;
        humidity.innerHTML = `⚠️L'humidité est de : ${response.main.humidity} %`;
        rotateWind.innerHTML = `🌡️ Degrès du vent : ${response.wind.deg} deg`;
        tempMin.innerHTML = `📉 Température minimum : ${response.main.temp_min}`;
        tempMax.innerHTML = `📈 Température maximal : ${response.main.temp_max}`;
        country.innerHTML = ` 🗺️ Pays  : ${response.sys.country}`;
        clouds.innerHTML = `☁️Il y a actuellement  : ${response.clouds.all} % de  Nuages`;


        switch (response.clouds.all){
            case clouds.value = 0:
                clouds.innerHTML = `☁️il y a actuellement 0% Nuages `;
                break;
            default:
        }
    }
    xhr.send();
});