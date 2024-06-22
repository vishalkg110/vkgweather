const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const real_temp_val = document.getElementById('real_temp_val');
const temp_status = document.getElementById('temp_status');


const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
event.preventDefault();
let cityval = cityName.value;
if(cityval=="") {
city_name.innerText='Plz write the name before search'; 
datahide.classList.add('data_hide'); 

}else {
try{

let url='https://api.openweathermap.org/data/2.5/weather?q='+cityval+'&units=metrics&appid=a0cbe8b710e96a6c020bb8ec0ee651b2';
const response = await fetch(url);
const data= await response.json();
const arrData = [data];

city_name.innerText = arrData[0].name+','+arrData[0].sys.country;
real_temp_val.innerText = (arrData[0].main.temp/10).toFixed(2);
temp_status.innerText = arrData[0].weather[0].main;
//condition to check sunny or cloudy
const temMod = arrData[0].weather[0].main;
if (temMod == "Clear") {
    temp_status.innerHTML =
      "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
  } else if (temMod == "Clouds") {
    temp_status.innerHTML =
      "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
  } else if (temMod == "Rain") {
    temp_status.innerHTML =
      "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
  } else {
    temp_status.innerHTML =
      "<i class='fas  fa-sun' style='color:#eccc68;'></i>";
  }
  datahide.classList.remove('data_hide');
}



catch {
    city_name.innerText = 'Plz write the city name Properly'; 
    datahide.classList.add('data_hide'); 
 
}

}
}

submitBtn.addEventListener('click',getInfo);