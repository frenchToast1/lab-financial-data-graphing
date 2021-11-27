const buttonEl = document.querySelector("#get-info-button");


buttonEl.addEventListener("click", function() {
  axios.get("http://api.coindesk.com/v1/bpi/historical/close.json")
    .then(function(bitcoinData) {
      console.log(bitcoinData)
    })
    .catch(err => console.log(err))
});


document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("lab-financial-data-graphing JS imported successfully!");
  },
  false
);
