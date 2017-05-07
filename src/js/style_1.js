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

    series: [{
        name: 'names',
        type: 'graph',
        layout: 'circular',
        width: clientWidth/1.5,
        height: clientHeight/1.5,
        data: [{
          "name": 'Tesla',
          "symbolSize": 40,
          "category": 'Tesla',
          'label': {
              normal: {
                   show: true,
              }
          }
        }, {
          "name": 'Adidas',
          "symbolSize": 40,
          "category": 'Adidas',
          'label': {
              normal: {
                   show: true,
              }
          }
        },  {
          "name": 'McDonald',
          "symbolSize": 40,
          "category": 'McDonald',
          'label': {
              normal: {
                   show: true,
              }
          }
        },  {
          "name": 'USA',
          "symbolSize": 40,
          "category": 'USA',
          'label': {
              normal: {
                   show: true,
              }
          }
        }, {
          "name": 'KFC',
          "symbolSize": 40,
          "category": 'KFC',
          'label': {
              normal: {
                   show: true,
              }
          }
        }, {
          "name": 'Nike',
          "symbolSize": 40,
          "category": 'Nike',
          'label': {
              normal: {
                   show: true,
              }
          }
        }, {
          "name": 'Apple',
          "symbolSize": 40,
          "category": 'Apple',
          'label': {
              normal: {
                   show: true,
              }
          }
        },{
          "name": 'Alibaba',
          "symbolSize": 40,
          "category": 'Alibaba',
          'label': {
              normal: {
                   show: true,
              }
          }
        }, {
          "name": 'JD.com',
          "symbolSize": 40,
          "category": 'JD.com',
          'label': {
              normal: {
                   show: true,
              }
          }
        }, {
          "name": 'Tencent',
          "symbolSize": 40,
          "category": 'Tencent',
          'label': {
              normal: {
                   show: true,
              }
          }
        }, {
          "name": 'Adidas China',
          "symbolSize": 40,
          "category": 'Adidas China',
          'label': {
              normal: {
                   show: true,
              }
          }
        }, {
          "name": 'China',
          "symbolSize": 40,
          "category": 'China',
          'label': {
              normal: {
                   show: true,
              }
          }
        }, {
          "name": 'Geely',
          "symbolSize": 40,
          "category": 'Geely',
          'label': {
              normal: {
                   show: true,
              }
          }
        }, {
          "name": 'KFC China',
          "symbolSize": 40,
          "category": 'KFC China',
          'label': {
              normal: {
                   show: true,
              }
          }
        },{
          "name": 'ToyoTa',
          "symbolSize": 40,
          "category": 'ToyoTa',
          'label': {
              normal: {
                   show: true,
              }
          }
        }, {
          "name": 'Samsung',
          "symbolSize": 40,
          "category": 'Samsung',
          'label': {
              normal: {
                   show: true,
              }
          }
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
        label: {
            normal: {
                position: 'right',
                formatter: '{b}'
            }
        },
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
