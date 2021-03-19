// api.openweathermap.org/data/2.weather/?q={city name}&appid={API key}
// b4b478c7779eb49f650f36de4665b751
const api={
    key:"b4b478c7779eb49f650f36de4665b751",
    url:"https://api.openweathermap.org/data/2.5/weather"
}
var input=document.getElementById("searchBox");
input.addEventListener('keypress',(event)=>{
    if (event.keyCode==13){
        getReport(input.value)
        document.querySelector(".display").style.display="block";
    }
})

function getReport(city){ 
    fetch(`${api.url}?q=${city}&appid=${api.key}&units=metric`).then((weather)=>{
        return weather.json();
    })
    .then(showWeather)
}
function showWeather(weather){
    console.log(weather)

    var city=document.getElementById("city");
    city.innerText=`${weather.name}, ${weather.sys.country}`;

    var tempreture=document.getElementById("tempreture");
    tempreture.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

    var max=document.getElementById("min-max");
    max.innerHTML=`${Math.round(weather.main.temp_min)}&deg;C(min),${Math.round(weather.main.temp_max)}&deg;C(max)`

    var catagory=document.getElementById("catagory");
    catagory.innerText=`${weather.weather[0].main}`;

    var date=document.getElementById("date");
    var todayDate=new Date();
    date.innerText=curDate(todayDate);

    if (catagory.textContent=="Clear"){
        document.body.style. backgroundImage = "url('images/clear.jpg')";
    }
    else if (catagory.textContent=="Haze"){
        document.body.style. backgroundImage = "url('images/fog.jpg')";
    }
    else if (catagory.textContent=="Clouds"){
        document.body.style. backgroundImage = "url('images/cloudy.jpg')";
    }
    else if (catagory.textContent=="Sunny"){
        document.body.style. backgroundImage = "url('images/sunny.jpg')";
    }
    else if (catagory.textContent=="Stormy"){
        document.body.style. backgroundImage = "url('images/thunder.jpg')";
    }
    


}

function curDate(data){
    var days=["sunday","monday","wednesday","thursday","friday","saturday"]
    var months=["january","february","march","april","may","june","july","augest","september","octeber","november","december"];
    var year=data.getFullYear();
    var date=data.getDate();
    var month=months[data.getMonth()];
    var day=days[data.getDay()];

    return `${date} ${month}(${day}),${year}`;
}







