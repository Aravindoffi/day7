const url = "https://restcountries.com/v3.1/all";

const req = new XMLHttpRequest();
req.addEventListener("load", function () {
  const obj = JSON.parse(this.responseText);

  // Use the filter method to filter countries by currency name
  const result = obj.filter(country => {
    const currencies = country.currencies;

    // Check if "currencies" is an object and contains a currency with the name "United States dollar"
    if (typeof currencies === 'object' && currencies !== null) {
      return Object.values(currencies).some(currency => currency.name === "United States dollar");
    }
    return false;
  });

  console.log(result);
});
req.open("GET", url);
req.send();