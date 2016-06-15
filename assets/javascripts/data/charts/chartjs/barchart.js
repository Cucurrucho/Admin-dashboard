var barData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Example dataset 1",
            backgroundColor: "rgba(250,0,0,0.5)",
            borderColor: "rgba(250,0,0,1)",
            pointBorderColor: "rgba(250,0,0,1)",
            pointHoverBackgroundColor: "rgba(250,0,0,0.5)",
            pointHoverBorderColor: "rgba(250,0,0,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "Example dataset 2",
            backgroundColor: "rgba(76, 230, 235,0.5)",
            borderColor: "rgba(76, 230, 235,0.7)",
            pointBorderColor: "rgba(76, 230, 235,1)",
            pointHoverBackgroundColor: "rgba(76, 230, 235,0.5)",
            pointHoverBorderColor: "rgba(76, 230, 235,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};

var barOptions = {
    tooltips: {
        mode: 'label'
    },
    scales: {
        yAxes: [{
            ticks: {
                min: 0,
                max: 100
            }
        }]
    }
};

new Chart($("#barChart"),{
    type: 'bar',
    data: barData,
    options: barOptions,
});