// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
//Company Names
var companyNames = ['USA', 'Nike', 'Apple', 'Adidas', 'McDonald', 'KFC', 'Tesla', 'China', 'Alibaba', 'Tencent', 'Geely', 'Adidas China', 'KFC China', 'JD.com', 'ToyoTa', 'Samsung'];

//screen position
var clientWidth = document.documentElement.clientWidth;
var clientHeight = document.documentElement.clientHeight;
// console.log(clientWidth);

//categories
var categories = [];
(function() {
    for (var i = 0; i < companyNames.length; i++) {
        categories[i] = {
            name: companyNames[i]
        };
    }
}());

//All data
var data = [
    // 0
    {
        "name": 'Tesla',
        "symbolSize": 40,
        "category": 'Tesla',
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //1
        "name": 'Apple',
        "symbolSize": 40,
        "category": 'Apple',
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //2
        "name": 'McDonald',
        "symbolSize": 40,
        "category": 'McDonald',
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //3
        "name": 'USA',
        "symbolSize": 60,
        "category": 'USA',
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //4
        "name": 'KFC',
        "symbolSize": 40,
        "category": 'KFC',
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //5
        "name": 'Nike',
        "symbolSize": 40,
        "category": 'Nike',
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //6
        "name": 'Adidas',
        "symbolSize": 40,
        "category": 'Adidas',
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //7
        "name": 'KFC China',
        "symbolSize": 40,
        "category": 'KFC China',
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //8
        "name": 'Adidas China',
        "symbolSize": 40,
        "category": 'Adidas China',
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //9
        "name": 'Tencent',
        "symbolSize": 40,
        "category": 'Tencent',
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //10
        "name": 'JD.com',
        "symbolSize": 40,
        "category": 'JD.com',
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //11
        "name": 'China',
        "symbolSize": 60,
        "category": 'China',
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //12
        "name": 'Alibaba',
        "symbolSize": 40,
        "category": 'Alibaba',
        'label': {
            normal: {
                show: true,
            }
        }
    },{ //13
        "name": 'Geely',
        "symbolSize": 40,
        "category": 'Geely',
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //14
        "name": 'ToyoTa',
        "symbolSize": 40,
        "category": 'ToyoTa',
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //15
        "name": 'Samsung',
        "symbolSize": 40,
        "category": 'Samsung',
        'label': {
            normal: {
                show: true,
            }
        }
    }
]


var links = [{ //0 2011
    "source": "Nike",
    "target": "USA",
    "value": "acquired",
    "label": {
        "normal": {
            "show": true,
            // "textStyle": {
            //   "color": "#D50000"
            // }

        }
    }
}, { //1 2012
    "source": "Apple",
    "target": "Samsung",
    "value": "sued",
    "label": {
        "normal": {
            "show": true,
            // "textStyle": {
            //   "color": "#000000"
            // }

        }
    }
}, { //2 2012
    "source": "Adidas",
    "target": "Nike",
    "value": "sued",
    "label": {
      "normal": {
          "show": true,
          // "textStyle": {
          //   "color": "#000000"
          // }
      }
    }
}, { //3 2014
    "source": "Adidas",
    "target": "Adidas China",
    "value": "decreased stake",
    "label": {
      "normal": {
          "show": true,
          // "textStyle": {
          //   "color": "#4CAF50"
          // }
      }
    }
}, { //4 2014
    "source": "McDonald",
    "target": "USA",
    "value": "increased stake",
    "label": {
      "normal": {
          "show": true,
          // "textStyle": {
          //   "color": "#FF1744"
          // }
      }
    }
}, { //5 2015
    "source": "KFC",
    "target": "KFC China",
    "value": "decreased stake",
    "label": {
      "normal": {
          "show": true,
          // "textStyle": {
          //   "color": "#4CAF50"
          // }
      }
    }
}, { //6 2105
    "source": "Alibaba",
    "target": "China",
    "value": "increased stake",
    "label": {
      "normal": {
          "show": true,
          // "textStyle": {
          //   "color": "#FF1744"
          // }
      }
    }
}, { //7 2016
    "source": "Tencent",
    "target": "JD.com",
    "value": "increased stake",
    "label": {
      "normal": {
          "show": true,
          // "textStyle": {
          //   "color": "#FF1744"
          // }
      }
    }
}, { //8 2016
    "source": "ToyoTa",
    "target": "Tesla",
    "value": "cooperated",
    "label": {
      "normal": {
          "show": true,
          // "textStyle": {
          //   "color": "#F4FF81"
          // }
      }
    }
}, { //9 2017
    "source": "Geely",
    "target": "Tesla",
    "value": "acquired",
    "label": {
      "normal": {
          "show": true,
          // "textStyle": {
          //   "color": "#D50000"
          // }
      }
    }
}]

// 指定图表的配置项和数据
var option = {
    baseOption: {
        timeline: {
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 3000,
            loop:false,
            data: ['2011', '2012', '2014', '2015', '2016', '2017', 'all']
        },
        backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
            offset: 0,
            color: '#f7f8fa'
        }, {
            offset: 1,
            color: '#cdd0d5'
        }]),
        title: {
            text: "Relations",
            subtext: "version-1",
            top: "top",
            left: "center"
        },
        tooltip: {},
        legend: [{
            tooltip: {
                show: true
            },
            selectedMode: 'false',
            right: 80,
            // // bottom: 20,
            top: 'center',
            orient: 'vertical',
            data: companyNames
        }],
        animationDuration: 2000,
        animationEasingUpdate: 'quinticInOut',
        series: [{ // 系列一的一些其他配置
                name: 'names',
                type: 'graph',
                layout: 'circular',
                categories: categories,
                focusNodeAdjacency: true,
                animation: true,
                label: {
                    normal: {
                        position: 'right',
                        formatter: '{b}',
                        textStyle: {
                            fontSize: 13
                        }
                    }
                },
                edgeSymbol: ['circle', 'arrow'],
                edgeLabel: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 20
                        },
                        formatter: "{c}"
                    }
                },
                lineStyle: {
                    normal: {
                        color:'source',
                        width: 3,
                        curveness: 0.2
                    }
                },
                color: ['#0D47A1', '#1976D2', '#1E88E5', '#2196F3', '#42A5F5', '#64B5F6', '#90CAF9','#B71C1C', '#C62828', '#D32F2F', '#E53935', '#F44336', '#EF5350', '#E57373', '#d48265', '#91c7ae']
            },

        ]
    },
    options: [{
            series: [{
                data: [data[5], data[3]],
                links: [links[0]],
                width: clientWidth / 4,
                height: clientHeight / 4,
            }]
        },
        {
            series: [{
                data: [data[6], data[15], data[1], data[5]],
                links: [links[1], links[2]],
                width: clientWidth / 3,
                height: clientHeight / 3,
            }]
        },
        {
            series: [{
                data: [data[6], data[8], data[2], data[3]],
                links: [links[3], links[4]],

                width: clientWidth / 2,
                height: clientHeight / 2,
            }]
        },
        {
            series: [{
                data: [data[4], data[7], data[12], data[11]],
                links: [links[5], links[6]],
                width: clientWidth / 2,
                height: clientHeight / 2,

            }]
        },
        {
            series: [{
                data: [data[0], data[14], data[10], data[9]],
                links: [links[7], links[8]],
                width: clientWidth / 2,
                height: clientHeight / 2,

            }]
        },
        {
            series: [{
                data: [data[13], data[0]],
                links: [links[9]],
                width: clientWidth / 3,
                height: clientHeight / 3,
            }]
        },
        {
            series: [{
                data: data,
                links: links,
                width: clientWidth / 1.5,
                height: clientHeight / 1.5,

            }]
        }
    ]



};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
