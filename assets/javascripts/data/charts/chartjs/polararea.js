$(document).on("ready pjax:success", function () {
    var polarData = {
        datasets: [{
            data: [
                11,
                16,
                7,
                3,
                14
            ],
            backgroundColor: [
                "#FF6384",
                "#4BC0C0",
                "#FFCE56",
                "#E7E9ED",
                "#36A2EB"
            ],
            label: 'My dataset' // for legend
        }],
        labels: [
            "Red",
            "Green",
            "Yellow",
            "Grey",
            "Blue"
        ]
    };
    ;

    var polarOptions = {
        elements: {
            arc: {
                borderColor: "#000000"
            }
        }
    };

    var polarChart = new Chart($("#polarChart"), {
        type: 'polarArea',
        data: polarData,
        options: polarOptions,
    });
    
    $(document).on("pjax:start", function () {
        polarChart.destroy()
    });
});