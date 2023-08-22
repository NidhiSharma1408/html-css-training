const base_url:string="https://api.weatherapi.com/v1/forecast.json?key=042b8e0f68ba49ffaeb102131232208&days=5&aqi=no&alerts=no";
let city;
let api_url;
const input = document.querySelector("#input") as HTMLInputElement | null;
const button = document.querySelector("#button");
const tbody = document.querySelector("tbody");

button?.addEventListener('click', getForecast);
type Forecast = {
    'date':Date,
    'ctmp':number,
    'mntmp':number,
    'mxtmp':number,
    'hum':number
}

function getData(url:string){
    fetch(url)
        .then((result)=>{
            console.log("result string:", result);
            return result.json();
        })
        .then((data)=>{ 
            parseData(data);
        })
        .catch((err)=>{
            throw err;
        });
}

function getForecast(){
    city = input?.value;
    if(!city) return;
    api_url=base_url+"&q="+city;
    getData(api_url);
}


function parseData(data){
    // console.log("Data:", data);
    // console.log("forecast:", data.forecast);
    // console.log("forecastday", data.forecast.forecastday);
    const mydata = data.forecast.forecastday;
    let f:Forecast[]=[];
    for(let d of mydata){
        const day:Forecast = {
            date: d.date,
            mxtmp: d.day.maxtemp_c,
            mntmp: d.day.mintemp_c,
            ctmp: 0,
            hum: d.day.avghumidity
        };
        f = [...f, day];
    }  
    f[0].ctmp = data.current.temp_c;
    displayData(f);
}

function displayData(data:Forecast[]){
    let trows:string="";
    let first:boolean = true;
    for(let f of data){
        if(first)
            trows+="<tr id='today'>";
        else
            trows+="<tr>";
        trows+="<td class='date'>"+f.date+"</td><td class='ctmp'>"+f.ctmp+"</td><td class='hum'>"+f.hum+"</td><td class='mntmp'>"+f.mntmp+"</td><td class='mxtmp'>"+f.mxtmp+"</td></tr>";
        first = false;
    }
    if(tbody != null) tbody.innerHTML = trows;
}
