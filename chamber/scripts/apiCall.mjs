const apiKey = "7c26a1bc63ac639c950056e0f8dd59a9";
const lat = "40.00749517532001";
const long = "-105.29457021873681";
const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`
const forecast = `//api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`

events = document.getElementById('events');
weather = document.getElementById('weather');




/*https://api.openweathermap.org/data/2.5/weather?lat=40.00749517532001&lon=-105.29457021873681&appid=7c26a1bc63ac639c950056e0f8dd59a9&units=metric*/

/*https://api.openweathermap.org/data/2.5/forecast?lat=40.00749517532001&lon=-105.29457021873681&appid=7c26a1bc63ac639c950056e0f8dd59a9&units=metric*/


async function apiFetch(){
    try {
        const response = await fetch(forecast);
        if (response.ok) {
            const data = await response.json();
            document.getElementById('events').innerHTML = `
            <h2>Events</h2>
            <p>Main: &emsp; &emsp;&ensp; <b>${data.list[0].weather[0].main}</b></p>
            <p>Description: <b>${data.list[0].weather[0].description}</b></p>
            `;
            document.getElementById('weather').innerHTML = `
            <h2>Current Weather</h2>
            <p>Temp: &emsp; &nbsp; &emsp;<b>${data.list[0].main.temp} &deg;C </b></p>
            <p>Feels Like: &emsp;<b>${data.list[0].main.feels_like} &deg;C </b></p>
            <p>Pressure: &ensp;&emsp;<b>${data.list[0].main.pressure} hPa </b></p>
            `;
            document.getElementById('forecast').innerHTML = `
            <h2>Weather Forecast</h2>
            <div class="first-day" id="first-day">
            <p>${ new Date(data.list[0].dt*1000).toDateString()}: <b>&nbsp;Temp</b>: ${data.list[0].main.temp} &deg;C</p>            
            </div>
            <div class="second-day" id="second-day">
            <p>${ new Date(data.list[5].dt*1000).toDateString()}: <b>Temp</b>: ${data.list[5].main.temp} &deg;C</p>            
            </div>
            <div class="second-day" id="second-day">
            <p>${ new Date(data.list[12].dt*1000).toDateString()}: <b>Temp</b>: ${data.list[12].main.temp} &deg;C</p>            
            </div>
            
            `
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();


// current temperature
// current weather description
// temperature forecast