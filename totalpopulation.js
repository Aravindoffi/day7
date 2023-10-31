const url = "https://restcountries.com/v3.1/all"

const req = new XMLHttpRequest();
req.addEventListener("load", function () {
    const obj = JSON.parse(this.response)
    const val = obj.reduce((add,acc)=>add+acc.population,0)
    console.log(val)
}
);
req.open("GET", url);
req.send();