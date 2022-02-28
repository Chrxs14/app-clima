import fetchCity from './index'
async function consultWeaether(city){
    const lat = city[0]
    const lon = city[1]
    const URLApi = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&lang=es`
    const reqWeather = await fetch(URLApi)
    const weatherJson = reqWeather.json()

    console.log(weatherJson)
}