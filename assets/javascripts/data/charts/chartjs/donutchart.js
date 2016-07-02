$(document).on("ready pjax:success", function () {
    var donutData = {
        labels: [
            "Red",
            "Blue",
            "Yellow"
        ],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }
        ]
    };
    ;

    var donutOptions = {};

    var donutChart = new Chart($("#donutChart"), {
        type: 'doughnut',
        data: donutData,
        options: donutOptions,
        animation: {
            animateScale: true
        }
    });

    $(document).on("pjax:start", function () {
        donutChart.destroy()
    });
});