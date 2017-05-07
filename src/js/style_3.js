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
        "name": 'Adidas',
        "symbolSize": 40,
        "category": 'Adidas',
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
        "symbolSize": 40,
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
        "name": 'Apple',
        "symbolSize": 40,
        "category": 'Apple',
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //7
        "name": 'Alibaba',
        "symbolSize": 40,
        "category": 'Alibaba',
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //8
        "name": 'JD.com',
        "symbolSize": 40,
        "category": 'JD.com',
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
        "name": 'Adidas China',
        "symbolSize": 40,
        "category": 'Adidas China',
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //11
        "name": 'China',
        "symbolSize": 40,
        "category": 'China',
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //12
        "name": 'Geely',
        "symbolSize": 40,
        "category": 'Geely',
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //13
        "name": 'KFC China',
        "symbolSize": 40,
        "category": 'KFC China',
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
    "value": "acquired"
}, { //1 2012
    "source": "Apple",
    "target": "Samsung",
    "value": "sued"
}, { //2 2012
    "source": "Adidas",
    "target": "Nike",
    "value": "sued",
    "label": {
        "normal": {
            "show": true
        }
    }
}, { //3 2014
    "source": "Adidas",
    "target": "Adidas China",
    "value": "decreased stake of",
    "label": {
        "normal": {
            "show": true
        }
    }
}, { //4 2014
    "source": "McDonald",
    "target": "USA",
    "value": "increased stake of",
    "label": {
        "normal": {
            "show": true
        }
    }
}, { //5 2015
    "source": "KFC",
    "target": "KFC China",
    "value": "decreased stake of",
    "label": {
        "normal": {
            "show": true
        }
    }
}, { //6 2105
    "source": "Alibaba",
    "target": "China",
    "value": "increased stake of",
    "label": {
        "normal": {
            "show": true
        }
    }
}, { //7 2016
    "source": "Tencent",
    "target": "JD.com",
    "value": "increased stake of",
    "label": {
        "normal": {
            "show": true
        }
    }
}, { //8 2016
    "source": "ToyoTa",
    "target": "Tesla",
    "value": "cooperated with",
    "label": {
        "normal": {
            "show": true
        }
    }
}, { //9 2017
    "source": "Geely",
    "target": "Tesla",
    "value": "acquired",
    "label": {
        "normal": {
            "show": true
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
            label: {
                normal: {
                    position: 'right',
                    formatter: '{b}'
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
        }]
    },
    options: [{
            series: [{
                data: [data[5], data[3]],
                links: [links[0]],
                width: clientWidth / 4,
                height: clientHeight / 4,
                lineStyle: {
                    normal: {
                        color: 'source',
                        curveness: 0.2
                    }
                }
            }]
        },
        {
            series: [{
                data: [data[6], data[15], data[1], data[5]],
                links: [links[1], links[2]],
                width: clientWidth / 3,
                height: clientHeight / 3,
                lineStyle: {
                    normal: {
                        color: 'source',
                        curveness: 0.2
                    }
                },
            }]
        },
        {
            series: [{
                data: [data[2], data[10], data[1], data[3]],
                links: [links[3], links[4]],
                lineStyle: {
                    normal: {
                        color: 'source',
                        curveness: 0.2
                    }
                },
                width: clientWidth / 2,
                height: clientHeight / 2,
            }]
        },
        {
            series: [{
                data: [data[4], data[13], data[7], data[11]],
                links: [links[5], links[6]],
                width: clientWidth / 2,
                height: clientHeight / 2,
                lineStyle: {
                    normal: {
                        color: 'source',
                        curveness: 0.2
                    }
                },
            }]
        },
        {
            series: [{
                data: [data[9], data[14], data[8], data[0]],
                links: [links[7], links[8]],
                width: clientWidth / 2,
                height: clientHeight / 2,
                lineStyle: {
                    normal: {
                        color: 'source',
                        curveness: 0.2
                    }
                },
            }]
        },
        {
            series: [{
                data: [data[0], data[12]],
                links: [links[9]],
                width: clientWidth / 3,
                height: clientHeight / 3,
                lineStyle: {
                    normal: {
                        color: 'source',
                        curveness: 0.2
                    }
                },
            }]
        },
        {
            series: [{
                data: data,
                links: links,
                lineStyle: {
                    normal: {
                        color: 'source',
                        curveness: 0.2
                    }
                },
                width: clientWidth / 1.5,
                height: clientHeight / 1.5,
            }]
        }
    ]



};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);