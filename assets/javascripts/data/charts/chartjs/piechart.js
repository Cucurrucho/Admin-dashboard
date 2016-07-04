$(document).on("ready pjax:success", function () {
    var pieData = {
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

    var pieOptions = {};

    var pieChart = new Chart($("#pieChart"), {
        type: 'pie',
        data: pieData,
        options: pieOptions,
        animation: {
            animateScale: true
        }
    });
    $(document).on("pjax:start", function () {
        pieChart.destroy()
    });
});