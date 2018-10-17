var revenue ={};






//折線圖
var canvas = document.getElementById('myChart');
var ctx = canvas.getContext('2d');
var data = {
    labels:['6 JUN','7Jun','8 Jun','9 JUN','10 Jun','11 Jun','12 Jun','13 Jun'],
    datasets:[{
        label:'asdds',
        data:[54540,12660,41880],
    }]
}
var options= {
    title:{
        text: 'test'
    },
    scales:{
        yAxes:[{
            ticks:{
                beginAtZero: true,
                max: 8000,
                stepSize:2000
            } 
        }],
        xAxes:[{
            gridLines:{
                display: false
            },
        }]
    },
    
    backgroundColor:'#000',
    elements: {
        line: {
            tension: 0, // disables bezier curves
        }
    }
};

var content ={
    type:'line',
    data: data,
    options:options
}
var myLineChart = new Chart(ctx,content);

window.onload = function(){
    myLineChart.update();
}