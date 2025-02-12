/* Sales Card Chart */
let options1 = {
  series: [{
    data: [0, 32, 18, 58]
  }],
  chart: {
    height: 115,
    width: 180,
    type: 'area',
    fontFamily: 'Poppins, Arial, sans-serif',
    foreColor: '#5d6162',
    zoom: {
      enabled: false
    },
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    enabled: true,
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: undefined,
  },
  grid: {
    borderColor: 'transparent',
  },
  xaxis: {
    crosshairs: {
      show: false,
    }
  },
  colors: ["var(--primary-color)"],
  stroke: {
    width: [1],
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
      colorStops: [
        [
          {
            offset: 0,
            color: 'var(--primary02)',
            opacity: 1
          },
          {
            offset: 60,
            color: 'var(--primary02)',
            opacity: 0.1
          }
        ],
      ]
    }
  },
};
const chart = new ApexCharts(document.querySelector("#sales-card"), options1);
chart.render();
/* Sales Card Chart */

/* Revenue Card Chart */
let options2 = {
  series: [{
    data: [0, 32, 18, 58]
  }],
  chart: {
    height: 115,
    width: 180,
    type: 'area',
    fontFamily: 'Roboto, Arial, sans-serif',
    foreColor: '#5d6162',
    zoom: {
      enabled: false
    },
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    enabled: true,
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: undefined,
  },
  grid: {
    borderColor: 'transparent',
  },
  xaxis: {
    crosshairs: {
      show: false,
    }
  },
  colors: ["rgb(231, 76, 60)"],
  stroke: {
    width: [1],
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
      colorStops: [
        [
          {
            offset: 0,
            color: 'rgba(231, 76, 60, 0.2)',
            opacity: 1
          },
          {
            offset: 60,
            color: 'rgba(231, 76, 60, 0.2)',
            opacity: 0.1
          }
        ],
      ]
    }
  },
};
var chart1 = new ApexCharts(document.querySelector("#revenue-card"), options2);
chart1.render();
/* Revenue Card Chart */

/* New Customers Card Chart */
let options3 = {
  series: [{
    data: [0, 32, 18, 58]
  }],
  chart: {
    height: 115,
    width: 180,
    type: 'area',
    fontFamily: 'Roboto, Arial, sans-serif',
    foreColor: '#5d6162',
    zoom: {
      enabled: false
    },
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    enabled: true,
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: undefined,
  },
  grid: {
    borderColor: 'transparent',
  },
  xaxis: {
    crosshairs: {
      show: false,
    }
  },
  colors: ["rgb(69, 214, 91)"],
  stroke: {
    width: [1],
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
    }
  },
};
var chart2 = new ApexCharts(document.querySelector("#customers-card"), options3);
chart2.render();
/* New Customers Card Chart */

/* Orders Card Chart */
let options4 = {
  series: [{
    data: [0, 32, 18, 58]
  }],
  chart: {
    height: 115,
    width: 180,
    type: 'area',
    fontFamily: 'Roboto, Arial, sans-serif',
    foreColor: '#5d6162',
    zoom: {
      enabled: false
    },
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    enabled: true,
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: undefined,
  },
  grid: {
    borderColor: 'transparent',
  },
  xaxis: {
    crosshairs: {
      show: false,
    }
  },
  colors: ["rgb(52, 152, 219)"],
  stroke: {
    width: [1],
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
    }
  },
};
var chart3 = new ApexCharts(document.querySelector("#orders-card"), options4);
chart3.render();
/* Orders Card Chart */
