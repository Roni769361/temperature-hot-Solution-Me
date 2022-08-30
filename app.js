function searchbox(){
    const city = document.getElementById("inputtext").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c1df8e9bc924ac36f435ab141f7c226d&units=metric`


    fetch(url)
    .then(res => res.json())
    .then(data => temp(data))
    function temp(tempdata){
        // console.log(tempdata.coord)
        const cityName = tempdata.name;
        document.getElementById("cityname").innerText = cityName;
        console.log(cityName);
        const tempareture = tempdata.main.temp;
        document.getElementById("tempa-data").innerText = tempareture;
        // console.log(tempareture);
        const condition = tempdata.weather[0].main;
        document.getElementById("condition").innerText = condition;
        // console.log(condition);
        const imgeSet = tempdata.weather[0].icon;
        console.log(imgeSet);
        const urlimage = `https://openweathermap.org/img/wn/${imgeSet}@2x.png`
        const ImageIcon = document.getElementById("weather-icon");
        ImageIcon.setAttribute('src',urlimage);
    }
}