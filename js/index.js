(function () {
  var revenue = {};
  //折線圖
  let canvas = document.getElementById('myChart');
  // let ctx = canvas.getContext('2d');
  let myChart = echarts.init(canvas);
  let option = {
    tooltip: {
      show: true,
      trigger: 'item',
    },
    legend: {
      data: [
        {
          name: 'TOTAL REVENUE',
          icon: 'circle'
        },
        {
          name: 'TOTAL COST',
          icon: 'circle'
        },
        {
          name: 'NET INCOME',
          icon: 'circle'
        }

      ],
      itemWidth: 10,
    },
    textStyle: {
      color: '#8da291',
      fontWeight: "bold",
      fontSize: 16,
    },
    xAxis: [{
      type: 'category',
      data: ['6 JUN', '7 JUN', '8 JUN', '9 JUN', '10 JUN', '11 JUN', '12 JUN', '13 JUN'],
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#8da291',
        fontWeight: 'bold',
        fontSize: 16
      }
    }],
    yAxis: [{
      type: 'value',
      boundaryGap: false,
      min: 0,

      axisLabel: {
        color: '#8da291',
        fontWeight: 'bold',
        fontSize: 16
      },
    }],
    series: [
      {
        name: 'TOTAL REVENUE',
        type: "line",
        color: '#7ed321',
        data: [7100, 4000, 5580, 3300, 3600, 2500, 3300, 1000],
        tooltip: {
          backgroundColor: '#7ed321',
          formatter: '{a}<br />{b} : {c}'
        },
        itemStyle: {
          opacity: 0,
        },
        emphasis: {
          itemStyle: {
            borderColor: '#7ed321',
            borderWidth: 4,
            opacity: 1,
          },
          label: {
            show: true,
            formatter: '{c}',
            color: '#7ed321'
          }
        },
      },
      {
        name: 'TOTAL COST',
        type: "line",
        color: '#d0021b',
        data: [1000, 6500, 3600, 2500, 580, 3300, 2500, 5555],
        tooltip: {
          backgroundColor: '#d0021b',
          formatter: '{a}<br />{b} : {c}'
        },
        itemStyle: {
          opacity: 0,
        },
        emphasis: {
          itemStyle: {
            borderColor: '#d0021b',
            borderWidth: 4,
            opacity: 1,
          },
          label: {
            show: true,
            formatter: '{c}',
            color: '#d0021b'
          }
        },
      },
      {
        name: 'NET INCOME',
        type: "line",
        color: '#4a90e2',
        data: [2500, 3333, 4520, 6666, 6500, 3600, 7777, 2500],
        tooltip: {
          backgroundColor: '#4a90e2',
          formatter: '{a}<br />{b} : {c}'
        },
        itemStyle: {
          opacity: 0,
        },
        markLine: {
          emphasis: {
            lineStyle: {
              width: 50,
              color: '#fff'
            }
          }
        },
        lineStyle: {
          emphasis: {
            width: 50,
            color: '#fff'
          }
        },
        emphasis: {
          itemStyle: {
            borderColor: '#4a90e2',
            borderWidth: 4,
            opacity: 1,
          },
          label: {
            show: true,
            formatter: '{c}',
            color: '#4a90e2'
          },
          lineStyle: {
            width: 10,
          }
        },
      },
    ]
  };


  var myLineChart = myChart.setOption(option);;

  window.onload = function () {
  };
})();




(function () {
  let changeOption = document.querySelector('.change_option');
  let selectMenu = document.querySelector('#select_menu');
  changeOption.addEventListener('click', () => {
    if (selectMenu.style.display === 'none') {
      selectMenu.style.display = 'flex';
    } else {
      selectMenu.style.display = 'none';
    }
  });

})();
