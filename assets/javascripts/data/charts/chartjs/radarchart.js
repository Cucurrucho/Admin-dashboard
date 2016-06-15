var radarData = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgba(250,0,0,0.5)",
            borderColor: "rgba(250,0,0,1)",
            pointBackgroundColor: "rgba(250,0,0,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(250,0,0,1)",
            data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            backgroundColor: "rgba(76, 230, 235,0.5)",
            borderColor: "rgba(76, 230, 235,1)",
            pointBackgroundColor: "rgba(76, 230, 235,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(76, 230, 235,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
};

var radarOptions = {
    tooltips: {
        mode: 'label'
    },
    scales: {
        ticks: {
            min: 0,
            max: 100
        }
    }
};

new Chart($("#radarChart"),{
    type: 'radar',
    data: radarData,
    options: radarOptions,
});