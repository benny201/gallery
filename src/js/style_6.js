// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        text: "Relations Between Companies",
        subtext: "From 2011 to 2017",
        top: "0",
        left: "center",
        textStyle: {
            fontStyle: 'italic',
            fontSize: 30
        }
    },
    // tooltip for nodes
    tooltip: {
        trigger: 'item',
        formatter: function(a) {
            var tip = a.name;
            var res = '';
            //increase
            var increase = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:15px;height:15px;background-color:#303F9F"></span>';
            //Decrease
            var decrease = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:15px;height:15px;background-color:#61a0a8"></span>';
            //sue
            var sue = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:15px;height:15px;background-color:#3498DB"></span>';
            //Acquire
            var acquire = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:15px;height:15px;background-color:#ff8f00"></span>';
            //cooperate
            var cooperate = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:15px;height:15px;background-color:#FF1744"></span>';


            switch(tip) {
              case 'Events from 2011-2017':
                res += 'Events from 2011-2017<br>';
                res += sue;
                res += 'Sue Events<br>';
                res += acquire;
                res += 'Acquire Events<br>';
                res += increase;
                res += 'Increase Stake Events<br>';
                res += decrease;
                res += 'Decrease Stake Events<br>';
                res += cooperate;
                res += 'Cooperation Events<br>';
                break;
              case 'Nike':
                res += 'Nike<br>';
                res += acquire;
                res += '2011: Nike acquired USA<br>';
                res += sue;
                res += '2012: Sued by Adidas';
                break;
              default:
                res = tip;
            }
            return res ? res : 'Loading';
        }
    },
    legend: [{
        tooltip: {
            show: true
        },
        selectedMode: 'false',
        right: 80,
        top:'center',
        orient: 'vertical',
        data: ['Sue', 'Acquire', 'Decrease Stake', 'Increase Stake', 'Cooperation']
    }],
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    animationDuration: 3000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: 'Billboard Year End——2007-2016 Top 5',
        type: 'graph',
        layout: 'force',

        force: {
            repulsion: 300,
            edgeLength: [180, 70],
            gravity: 0.1
        },
        data: [{
            "name": "Events from 2011-2017",
            // "x": 0,
            // y: 0,
            "symbolSize": 60,
            "draggable": "true",
            "value": 27,
            "label": {
              "normal": {
                // "position": "inside"
                "textStyle": {
                  "fontSize": 15
                }
              }
            }

        }, {
            "name": "Sue Events",
            "value": 6,
            "symbolSize": 80,
            "category": "Sue",
            "draggable": "true",
            "label": {
              "normal": {
                // "position": "inside"
                "textStyle": {
                  "fontSize": 15
                }
              }
            }
        }, {
            "name": "Apple -> Samsung",
            "symbolSize": 40,
            "category": "Sue",
            "draggable": "true",
            "value": 30
        }, {
            "name": "Adidas -> Nike",
            "symbolSize": 40,
            "category": "Sue",
            "draggable": "true",
            "value": 3
        }, {
            "name": "Decrease Stake Events",
            "value": 6,
            "symbolSize": 80,
            "category": "Decrease Stake",
            "draggable": "true",
            "label": {
              "normal": {
                // "position": "inside"
                "textStyle": {
                  "fontSize": 15
                }
              }
            }
        }, {
            "name": "Adidas -> Adidas China",
            "symbolSize": 40,
            "category": "Decrease Stake",
            "draggable": "true",
            "value": 3
        }, {
            "name": "KFC -> KFC China",
            "symbolSize": 40,
            "category": "Decrease Stake",
            "draggable": "true",
            "value": 3
        }, {
            "name": "Increase Stake Events",
            "value": 6,
            "symbolSize": 80,
            "category": "Increase Stake",
            "draggable": "true",
            "label": {
              "normal": {
                // "position": "inside"
                "textStyle": {
                  "fontSize": 15
                }
              }
            }
        }, {
            "name": "McDonald -> USA",
            "symbolSize": 40,
            "category": "Increase Stake",
            "draggable": "true",
            "value": 3
        }, {
            "name": "Alibaba -> China",
            "symbolSize": 40,
            "category": "Increase Stake",
            "draggable": "true",
            "value": 3
        }, {
            "name": "Tencent -> JD.com",
            "symbolSize": 40,
            "category": "Increase Stake",
            "draggable": "true",
            "value": 3
        }, {
            "name": "Acquire Events",
            "value": 6,
            "symbolSize": 80,
            "category": "Acquire",
            "draggable": "true",
            "label": {
              "normal": {
                // "position": "inside"
                "textStyle": {
                  "fontSize": 15
                }
              }
            }
        }, {
            "name": "Nike -> USA",
            "symbolSize": 40,
            "category": "Acquire",
            "draggable": "true",
            "value": 3
        }, {
            "name": "Geely -> Tesla",
            "symbolSize": 40,
            "category": "Acquire",
            "draggable": "true",
            "value": 3
        }, {
            "name": "Cooperation Events",
            "value": 6,
            "symbolSize": 80,
            "category": "Cooperation",
            "draggable": "true",
            "label": {
              "normal": {
                // "position": "inside"
                "textStyle": {
                  "fontSize": 15
                }
              }
            }
        }, {
            "name": "Toyota -> Tesla",
            "symbolSize": 40,
            "category": "Cooperation",
            "draggable": "true",
            "value": 3
        }],
        links: [{
            "source": "Events from 2011-2017",
            "target": "Sue Events",
            "value": 100
        }, {
            "source": "Events from 2011-2017",
            "target": "Decrease Stake Events",
            "value": 70
        }, {
            "source": "Events from 2011-2017",
            "target": "Increase Stake Events",
            "value": 100
        }, {
            "source": "Events from 2011-2017",
            "target": "Acquire Events",
            "value": 70
        }, {
            "source": "Events from 2011-2017",
            "target": "Cooperation Events",
            "value": 70
        }, {
            "source": "Sue Events",
            "target": "Apple -> Samsung",
            "value": 5
        }, {
            "source": "Sue Events",
            "target": "Adidas -> Nike",
            "value": 5
        }, {
            "source": "Decrease Stake Events",
            "target": "Adidas -> Adidas China",
            "value": 5
        }, {
            "source": "Decrease Stake Events",
            "target": "KFC -> KFC China",
            "value": 5
        }, {
            "source": "Increase Stake Events",
            "target": "McDonald -> USA",
            "value": 5
        }, {
            "source": "Increase Stake Events",
            "target": "Alibaba -> China",
            "value": 5
        }, {
            "source": "Increase Stake Events",
            "target": "Tencent -> JD.com",
            "value": 5
        }, {
            "source": "Acquire Events",
            "target": "Nike -> USA",
            "value": 5
        }, {
            "source": "Acquire Events",
            "target": "Geely -> Tesla",
            "value": 5
        }, {
            "source": "Cooperation Events",
            "target": "Toyota -> Tesla",
            "value": 5
        }],
        categories: [{
            'name': 'Sue'
        }, {
            'name': 'Acquire'
        }, {
            'name': 'Decrease Stake'
        }, {
            'name': 'Increase Stake'
        }, {
            'name': 'Cooperation'
        }],
        focusNodeAdjacency: true,
        roam: true,
        label: {
            normal: {
                show: true,
                position: 'top',
            }
        },
        tooltip: {
          backgroundColor: '#212121'
        },
        color: ["#3498DB", "#ff8f00", "#61a0a8", "#303F9F", "#FF1744"],
        lineStyle: {
            normal: {
                color: 'source',
                curveness: 0,
                type: "solid"
            }
        }
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
// //添加点击事件
// myChart.on('click', function(params) {
//     if (params.dataType == "node") {
//         // alert("机器属性："+params.name);
//         if (params.name == "Tesla") {
//
//         };
//     }
// });

//resize
window.onresize = function() {
    myChart.resize();
};
