function Weather (city, token) {
    this.init = fetch(`http://api.weatherapi.com/v1/current.json?key=${token}&q=${city}&aqi=no`)
        .then( response => response.json() )
        .then( data => {
            this.temp = data.current.temp_c;
            this.pressure = data.current.pressure_mb;
            this.wind = data.current.wind_kph;
            this.humidity = data.current.humidity;
            return this;
        });
}

