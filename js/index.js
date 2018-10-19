(function() {
  let revenue = [7100, 4000, 5580, 3300, 3600, 2500, 3300, 1000];
  let cost = [1000, 6500, 3600, 2500, 580, 3300, 2500, 5555];
  let income = [2500, 3333, 4520, 6666, 6500, 3600, 7777, 2500];

  //求總合
  let getSum = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  };
  let revenueTotal = document.querySelector('#revenue_total');
  let costTotal = document.querySelector('#cost_total');
  let incomeTotal = document.querySelector('#income_total');

  revenueTotal.textContent = getSum(revenue);
  costTotal.textContent = getSum(cost);
  incomeTotal.textContent = getSum(income);

  //折線圖
  let canvas = document.getElementById('myChart');
  // let ctx = canvas.getContext('2d');
  let myChart = echarts.init(canvas);
  let option = {
    tooltip: {
      show: true,
      trigger: 'item'
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
      itemWidth: 10
    },
    textStyle: {
      color: '#8da291',
      fontWeight: 'bold',
      fontSize: 16
    },
    xAxis: [
      {
        type: 'category',
        data: [
          '6 JUN',
          '7 JUN',
          '8 JUN',
          '9 JUN',
          '10 JUN',
          '11 JUN',
          '12 JUN',
          '13 JUN'
        ],
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#8da291',
          fontWeight: 'bold',
          fontSize: 16
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        boundaryGap: false,
        min: 0,

        axisLabel: {
          color: '#8da291',
          fontWeight: 'bold',
          fontSize: 16
        }
      }
    ],
    series: [
      {
        name: 'TOTAL REVENUE',
        type: 'line',
        color: '#7ed321',
        data: revenue,
        tooltip: {
          backgroundColor: '#7ed321',
          formatter: '{a}<br />{b} : {c}'
        },
        itemStyle: {
          opacity: 0
        },
        emphasis: {
          itemStyle: {
            borderColor: '#7ed321',
            borderWidth: 4,
            opacity: 1
          },
          label: {
            show: true,
            formatter: '{c}',
            color: '#7ed321'
          }
        }
      },
      {
        name: 'TOTAL COST',
        type: 'line',
        color: '#d0021b',
        data: cost,
        tooltip: {
          backgroundColor: '#d0021b',
          formatter: '{a}<br />{b} : {c}'
        },
        itemStyle: {
          opacity: 0
        },
        emphasis: {
          itemStyle: {
            borderColor: '#d0021b',
            borderWidth: 4,
            opacity: 1
          },
          label: {
            show: true,
            formatter: '{c}',
            color: '#d0021b'
          }
        }
      },
      {
        name: 'NET INCOME',
        type: 'line',
        color: '#4a90e2',
        data: income,
        tooltip: {
          backgroundColor: '#4a90e2',
          formatter: '{a}<br />{b} : {c}'
        },
        itemStyle: {
          opacity: 0
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
            opacity: 1
          },
          label: {
            show: true,
            formatter: '{c}',
            color: '#4a90e2'
          },
          lineStyle: {
            width: 10
          }
        }
      }
    ]
  };

  var myLineChart = myChart.setOption(option);

  window.onload = function() {};
})();

(function() {
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

(function() {
  let desert = [
    {
      id: 1,
      name: '焦糖馬卡龍',
      src:
        'https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c376ffa487bcd258df29dc881b10703&auto=format&fit=crop&w=634&q=80'
    },
    {
      id: 2,
      name: '初戀的滋味',
      src:
        'https://images.unsplash.com/photo-1525203135335-74d272fc8d9c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=61b27d2cefd0dd094b5439f897b43bb7&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: 3,
      name: '馬卡佐咖啡',
      src: 'https://bit.ly/2R5tqwD'
    },
    {
      id: 4,
      name: '野莓有百香',
      src: 'https://bit.ly/2QbVsVR'
    },
    {
      id: 6,
      name: '聖誕蘋果塔',
      src: 'https://bit.ly/2Qodh3Z'
    },
    {
      id: 7,
      name: '奶油橘香塔',
      src: 'https://bit.ly/2Dwoxd7'
    },
    {
      id: 5,
      name: '奇異交響曲',
      src: 'https://bit.ly/2QiWeQW'
    }
  ];

  new Vue({
    el: '#app',
    data: {
      order: '',
      desert: desert
    },
    methods: {
      getDate: () => {
        moment.locale('zh-tw');
        return moment().format('L');
      },
      getTime: () => {
        moment.locale('zh-tw');
        return moment().format('LT');
      }
    },
    mounted() {
      axios
        .get(' http://localhost:3000/customers')
        .then(res => {
          let data = res.data;
          for (let i = 0; i < data.length; i++) {
            return (this.order = res.data);
          }
        })
        .catch(error => console.log(error));
    }
  });
})();
