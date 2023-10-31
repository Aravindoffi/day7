const url = "https://restcountries.com/v3.1/all"

const req = new XMLHttpRequest();
req.addEventListener("load", function () {
    const obj = JSON.parse(this.response)
    const result = obj.filter(count =>count.region === "Asia")
    console.log(result)
}
);
req.open("GET", url);
req.send();