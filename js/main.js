let kyiv = new Weather("Kyiv");
kyiv.init.then((data) => {
    document.body.innerHTML = data.current.temp_c;
});