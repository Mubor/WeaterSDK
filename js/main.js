let kyiv = new Weather("Kyiv");
let a = kyiv.init.then( data => {
    document.body.innerHTML = `${data.temp}<br>${data.pressure}<br>${data.wind}<br>${data.humidity}`;
});