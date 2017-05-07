// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
//Company Names
var companyNames = ['Nike', 'Apple', 'Adidas', 'McDonald', 'KFC', 'Alibaba', 'Tencent', 'ToyoTa', 'Geely', 'USA', 'Samsung', 'Adidas China', 'KFC China', 'China', 'JD.com', 'Tesla'];

//screen position
var clientWidth = document.documentElement.clientWidth;
var clientHeight = document.documentElement.clientHeight;
console.log(clientWidth);

//categories
var categories = [];
(function() {
    for (var i = 0; i < companyNames.length; i++) {
        categories[i] = {
            name: companyNames[i]
        };
    }
}());

//data
// var data = [];
// (function() {
//     for (var i = 0; i < companyNames.length; i++) {
//         data[i] = {
//             "itemStyle": 'null',
//             "name": companyNames[i],
//             "value": 3,
//             "symbolSize": 30,
//             "category": companyNames[i],
//             "draggable": "true",
//             "x": clientWidth/2 + (Math.random()),
//             "y": clientHeight/2 + (Math.random())
//         };
//     }
// }());

// 指定图表的配置项和数据
var option = {
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
        // formatter: function(name) {
        //     return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
        // },
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
    animationDuration: 1500,
    animationEasingUpdate: 'quinticInOut',
    geo: [
        {
            name: 'USA PopEstimates',
            type: 'map',
            map: 'USA',
            roam: false,
            selectedMode : false,
            aspectScale: 0.7
        }
    ],
    series: [{
        name: 'names',
        type: 'graph',
        layout: 'none',
        width: 700,
        data: [{
          "name": 'KFC',
          "value": 3,
          "symbolSize": 30,
          "category": 'KFC',
          'label': {
              normal: {
                   show: true,
              }
          },
          "x": 300,
          "y": -30
        }, {
          "name": 'Adidas',
          "value": 3,
          "symbolSize": 30,
          "category": 'Adidas',
          'label': {
              normal: {
                   show: true,
              }
          },
          "x": 260,
          "y": -10
        }, {
          "name": 'USA',
          "value": 3,
          "symbolSize": 60,
          "category": 'USA',
          'label': {
              normal: {
                   show: true,
              }
          },
          "x": 300,
          "y": 40
        }, {
          "name": 'KFC China',
          "value": 3,
          "symbolSize": 30,
          "category": 'KFC China',
          'label': {
              normal: {
                   show: true,
              }
          },
          "x": 0,
          "y": -30
        }, {
          "name": 'McDonald',
          "value": 3,
          "symbolSize": 30,
          "category": 'McDonald',
          'label': {
              normal: {
                   show: true,
              }
          },
          "x": 225,
          "y": 85
        }, {
          "name": 'Nike',
          "value": 3,
          "symbolSize": 30,
          "category": 'Nike',
          'label': {
              normal: {
                   show: true,
              }
          },
          "x": 225,
          "y": 15
        }, {
          "name": 'Adidas China',
          "value": 3,
          "symbolSize": 30,
          "category": 'Adidas China',
          'label': {
              normal: {
                   show: true,
              }
          },
          "x": 40,
          "y": -10
        }, {
          "name": 'China',
          "value": 3,
          "symbolSize": 60,
          "category": 'China',
          'label': {
              normal: {
                   show: true,
              }
          },
          "x": 0,
          "y": 40
        }, {
          "name": 'JD.com',
          "value": 3,
          "symbolSize": 30,
          "category": 'JD.com',
          'label': {
              normal: {
                   show: true,
              }
          },
          "x": 75,
          "y": 15
        }, {
          "name": 'Tencent',
          "value": 3,
          "symbolSize": 30,
          "category": 'Tencent',
          'label': {
              normal: {
                   show: true,
              }
          },
          "x": 90,
          "y": 50
        },  {
          "name": 'Apple',
          "value": 3,
          "symbolSize": 30,
          "category": 'Apple',
          'label': {
              normal: {
                   show: true,
              }
          },
          "x": 210,
          "y": 50
        }, {
          "name": 'Alibaba',
          "value": 3,
          "symbolSize": 30,
          "category": 'Alibaba',
          'label': {
              normal: {
                   show: true,
              }
          },
          "x": 75,
          "y": 85
        }, {
          "name": 'Geely',
          "value": 3,
          "symbolSize": 30,
          "category": 'Geely',
          'label': {
              normal: {
                   show: true,
              }
          },
          "x": 40,
          "y": 115
        }, {
          "name": 'Tesla',
          "value": 3,
          "symbolSize": 30,
          "category": 'Tesla',
          'label': {
              normal: {
                   show: true,
              }
          },
          "x": 260,
          "y": 115
        }, {
          "name": 'ToyoTa',
          "value": 3,
          "symbolSize": 30,
          "category": 'ToyoTa',
          'label': {
              normal: {
                   show: true,
              }
          },
          "x": 150,
          "y": 115
        }, {
          "name": 'Samsung',
          "value": 3,
          "symbolSize": 30,
          "category": 'Samsung',
          'label': {
              normal: {
                   show: true,
              }
          },
          "x": 150,
          "y": 165
        }],
        links: [{
            "source": "Nike",
            "target": "USA",
        }, {
            "source": "Apple",
            "target": "Samsung",
        }, {
          "source": "Adidas",
          "target": "Nike",
        }, {
          "source": "Adidas",
          "target": "Adidas China",
        }, {
          "source": "McDonald",
          "target": "USA",
        }, {
          "source": "KFC",
          "target": "KFC China",
        }, {
          "source": "Alibaba",
          "target": "China",
        }, {
          "source": "Tencent",
          "target": "JD.com",
        }, {
          "source": "ToyoTa",
          "target": "Tesla",
        }, {
          "source": "Geely",
          "target": "Tesla",
        }],
        categories: categories,
        focusNodeAdjacency: true,
        // roam: true,
        // label: {
        //     normal: {
        //
        //         show: true,
        //         position: 'top',
        //
        //     }
        // },
        label: {
            normal: {
                position: 'right',
                formatter: '{b}'
            }
        },
        // lineStyle: {
        //     normal: {
        //         color: 'source',
        //         curveness: 0,
        //         type: "solid"
        //     }
        // }
        lineStyle: {
            normal: {
                color: 'source',
                curveness: 0.2
            }
        }
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
