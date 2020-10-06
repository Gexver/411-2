window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "DATA"
        },
        axisX: {
            title:"X axis"
        },
        axisY: {
            title: "Y axis"
        },
        data: [{        
            type: "column",  
            showInLegend: false, 
            dataPoints: [      
                { y: 11,  label: "2" },
                { y: 22,  label: "4" },
                { y: 33,  label: "1" },
                { y: 44,  label: "5" },
            ]
        }]
    });
    chart.render();
}