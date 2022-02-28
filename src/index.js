const APIkey = `3657d31a4906ecbe312c7747420a1b53`
const buttonCity = document.getElementById('sendCity')

//Consultar Ciudad desde la Api

async function fetchCity(){
    const inputCity  =  document.getElementById('inputCity') 
    let cityName = inputCity.value
    cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1)

    const URLCity = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=2&appid=${APIkey}&lang=es`
    const reqCity = await fetch(URLCity)
    const cityJson = await reqCity.json()
    let dataCity = [cityJson[1].lat, cityJson[1].lon]
    // console.log(cityJson)
    // console.log(cityJson[1].country)
    // console.log(dataCity)

    //Consultar Clima
    const lat = dataCity[0]
    const lon = dataCity[1]
    const URLApi = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&lang=es`
    const reqWeather = await fetch(URLApi)
    const weatherJson = await reqWeather.json()
    // console.log(weatherJson)

    //presentar informacion en pantalla

    const main = document.getElementById('root')
    const container = document.createElement('div')
    const imgWheater = document.createElement('img')
    const nCity = document.createElement('h3')
    const temp = document.createElement('p')

    container.className = 'cardWeather'
    imgWheater.className = 'imgWeather'
    nCity.className = 'nameCity'
    temp.className = 'weatherValue'

    nCity.textContent = `Ciudad: ${weatherJson.name}`
    imgWheater.src = `http://openweathermap.org/img/wn/${weatherJson.weather[0].icon}@2x.png`
    temp.textContent = `temperatura: ${parseInt(weatherJson.main.temp - 273.15)}° C`

    main.replaceChildren('')
    container.append(imgWheater, nCity, temp)
    main.appendChild(container)
    // container.textContent= 'Hola'
    
}

buttonCity.addEventListener('click', fetchCity)
// const URL = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`