const url = "https://restcountries.com/v3.1/all"

const req = new XMLHttpRequest();
req.addEventListener("load", function () {
    const obj = JSON.parse(this.response)
    const result = obj.filter(pop =>pop.population<200000)
    console.log(result)
}
);
req.open("GET", url);
req.send();