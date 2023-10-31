const url = "https://restcountries.com/v3.1/all"

const req = new XMLHttpRequest();
req.addEventListener("load", function () {
    const obj = JSON.parse(this.response)
    obj.forEach((val) => console.log(val.name, val.flags,val.capital))
}
);
req.open("GET", url);
req.send();