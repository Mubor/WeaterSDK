function Weather (city) {
    this.city = city;
    this.init = fetch("http://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=Kiev&aqi=no")
        .then(response => response.json());
}

