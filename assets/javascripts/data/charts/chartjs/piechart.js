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
};;

var pieOptions = {

};

new Chart($("#pieChart"),{
    type: 'pie',
    data: pieData,
    options: pieOptions,
    animation:{
        animateScale:true
    }
});