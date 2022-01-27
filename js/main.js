let kyiv = new Weather("Kiev", "b677082ac19f45aca07212645220401");
kyiv.init.then( data => {
    document.body.innerHTML = `${data.temp}<br>${data.pressure}<br>${data.wind}<br>${data.humidity}`;
});