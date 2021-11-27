const buttonEl = document.querySelector("#get-info-button");


buttonEl.addEventListener("click", function() {
  axios.get("http://api.coindesk.com/v1/bpi/historical/close.json")
    .then(function(bitcoinData) {
      console.log(bitcoinData)
      const labels = Object.keys(bitcoinData.data.bpi)
      const data = {
        labels: labels,
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: Object.values(bitcoinData.data.bpi),
        }]
      };
      
      const config = {
        type: 'line',
        data: data,
        options: {}
      };
      const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );



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
