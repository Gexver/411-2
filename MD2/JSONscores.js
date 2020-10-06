window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: "Scores"
        },
        axisX: {
            title:"X axis"
        },
        axisY: {
            title:"Y axis"
        },
        legend:{
            horizontalAlign: "left"
        },
        data: [{
            type: "bubble",
            showInLegend: false,
            toolTipContent: "<b>{name}</b><br/>X axis: {x}<br/> Y axis: {y}<br/>",
            dataPoints: [
                { x: 1, y: 77, z: 100, name: "a" },
                { x: 2, y: 46, z: 100, name: "b" },
                { x: 3, y: 91, z: 100, name: "c" },
            ]
        }]
    });
    chart.render();
    
    }