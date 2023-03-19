let search = document.querySelector("button");
search.addEventListener("click", () => {
  let input = document.querySelector("input");
  weatherInfo(input.value);
});

async function weatherInfo(city) {
  let image = document.querySelector("img");
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=36143b0eae6f712413f40588b8b3c002&units=metric`;
  const response = await fetch(url);
  let data = await response.json();
  document.getElementById("city").innerText = data.name;
  document.getElementById("temp").innerText =
    Math.round(data.main.temp) + "°C";
  document.querySelector(".wind-percentage").innerText =
    data.wind.speed + "km/h";
  document.querySelector(".hum-percentage").innerText =
    data.main.humidity + "%";

  if (data[0].main == "Clouds") image.src = "images/clouds.png";
  else if (data[0].main == "Drizzle") image.src = "images/drizzle.png";
  else if (data[0].main == "Clear") image.src = "images/clear.png";
  else if (data[0].main == "Mist") image.src = "images/mist.png";
  else if (data[0].main == "Humidity") image.src = "images/humidity.png";
}

weatherInfo("davangere");