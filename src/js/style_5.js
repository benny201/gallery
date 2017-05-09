// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
//Company Names
var companyNames = ['USA', 'Nike', 'Apple', 'Adidas', 'McDonald', 'KFC', 'Tesla', 'China', 'Alibaba', 'Tencent', 'Geely', 'Adidas China', 'KFC China', 'JD.com', 'Toyota', 'Samsung'];

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
        // "value": "2011",
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
        "name": 'Nike',
        "symbolSize": 40,
        "category": 'Nike',
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //5
        "name": 'Adidas',
        "symbolSize": 40,
        "category": 'Adidas',
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //6
        "name": 'KFC',
        "symbolSize": 40,
        "category": 'KFC',
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
    }, { //13
        "name": 'Geely',
        "symbolSize": 40,
        "category": 'Geely',
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //14
        "name": 'Toyota',
        "symbolSize": 40,
        "category": 'Toyota',
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
    "lineStyle": {
        "normal": {
            "color": "#ff8f00"
        }
    }

}, { //1 2012
    "source": "Apple",
    "target": "Samsung",
    "value": "sued",
    "lineStyle": {
        "normal": {
            "color": "#3498DB"
        }
    }
}, { //2 2012
    "source": "Adidas",
    "target": "Nike",
    "value": "sued",
    "lineStyle": {
        "normal": {
            "color": "#3498DB"
        }
    }
}, { //3 2014
    "source": "Adidas",
    "target": "Adidas China",
    "value": "decreased stake",
    "lineStyle": {
        "normal": {
            "color": "#fdd835",
        }
    }
}, { //4 2014
    "source": "McDonald",
    "target": "USA",
    "value": "increased stake",
    "lineStyle": {
        "normal": {
            "color": "#303F9F"
        }
    }
}, { //5 2015
    "source": "KFC",
    "target": "KFC China",
    "value": "decreased stake",
    "lineStyle": {
        "normal": {
            "color": "#fdd835",
        }
    }
}, { //6 2105
    "source": "Alibaba",
    "target": "China",
    "value": "increased stake",
    "lineStyle": {
        "normal": {
            "color": "#303F9F"
        }
    }
}, { //7 2016
    "source": "Tencent",
    "target": "JD.com",
    "value": "increased stake",
    "lineStyle": {
        "normal": {
            "color": "#303F9F"
        }
    }
}, { //8 2016
    "source": "Toyota",
    "target": "Tesla",
    "value": "cooperated",
    "lineStyle": {
        "normal": {
            "color": "#FF1744"
        }
    }
}, { //9 2017
    "source": "Geely",
    "target": "Tesla",
    "value": "acquired",
    "lineStyle": {
        "normal": {
            "color": "#ff8f00"
        }
    }
}]

//force data
var forceData = [
    // 0
    {
        "name": 'Tesla',
        "symbolSize": 30,
        "category": 'Tesla',
        "value": 3,
        // "value": "2011",
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //1
        "name": 'Apple',
        "symbolSize": 30,
        "category": 'Apple',
        "value": 3,
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //2
        "name": 'McDonald',
        "symbolSize": 30,
        "category": 'McDonald',
        "value": 3,
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //3
        "name": 'USA',
        "symbolSize": 50,
        "category": 'USA',
        "value": 100,
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //4
        "name": 'Nike',
        "symbolSize": 30,
        "category": 'Nike',
        "value": 3,
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //5
        "name": 'Adidas',
        "symbolSize": 30,
        "category": 'Adidas',
        "value": 3,
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //6
        "name": 'KFC',
        "symbolSize": 30,
        "category": 'KFC',
        "value": 3,
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //7
        "name": 'KFC China',
        "symbolSize": 30,
        "category": 'KFC China',
        "value": 3,
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //8
        "name": 'Adidas China',
        "symbolSize": 30,
        "category": 'Adidas China',
        "value": 3,
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //9
        "name": 'Tencent',
        "symbolSize": 30,
        "category": 'Tencent',
        "value": 3,
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //10
        "name": 'JD.com',
        "symbolSize": 30,
        "category": 'JD.com',
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //11
        "name": 'China',
        "symbolSize": 50,
        "category": 'China',
        "value": 100,
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //12
        "name": 'Alibaba',
        "symbolSize": 30,
        "category": 'Alibaba',
        "value": 3,
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //13
        "name": 'Geely',
        "symbolSize": 30,
        "category": 'Geely',
        "value": 3,
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //14
        "name": 'Toyota',
        "symbolSize": 30,
        "category": 'Toyota',
        "value": 3,
        'label': {
            normal: {
                show: true,
            }
        }
    }, { //15
        "name": 'Samsung',
        "symbolSize": 30,
        "category": 'Samsung',
        "value": 3,
        'label': {
            normal: {
                show: true,
            }
        }
    },
      { //event_sue
          "name": 'Sue Events',
          "symbolSize": 70,
          // "category": 'Sue',
          "value": 200,
          'label': {
              normal: {
                  show: true,
              }
          }
    }, { //event_Stake
        "name": 'Stake Events',
        "symbolSize": 70,
        // "category": 'stake',
        "value": 200,
        'label': {
            normal: {
                show: true,
            }
        }
  }, { //event_Acquire
      "name": 'Acquire Events',
      "symbolSize": 70,
      // "category": 'acquire',
      "value": 200,
      'label': {
          normal: {
              show: true,
          }
      }
  }, { //event_cooperate
      "name": 'Cooperate Events',
      "symbolSize": 70,
      // "category": 'cooperate',
      "value": 200,
      'label': {
          normal: {
              show: true,
          }
      }
  }, {//events
    "name": 'Events',
    "symbolSize": 100,
    // "category": 'cooperate',
    "value": 300,
    'label': {
        normal: {
            show: true,
        }
    }
  }
]


var forcelinks = [{ //0 2011
    "source": "Nike",
    "target": "USA",
    "value": "acquired",
    "lineStyle": {
        "normal": {
            "color": "#ff8f00"
        }
    }

}, { //1 2012
    "source": "Apple",
    "target": "Samsung",
    "value": "sued",
    "lineStyle": {
        "normal": {
            "color": "#3498DB"
        }
    }
}, { //2 2012
    "source": "Adidas",
    "target": "Nike",
    "value": "sued",
    "lineStyle": {
        "normal": {
            "color": "#3498DB"
        }
    }
}, { //3 2014
    "source": "Adidas",
    "target": "Adidas China",
    "value": "decreased stake",
    "lineStyle": {
        "normal": {
            "color": "#fdd835",
        }
    }
}, { //4 2014
    "source": "McDonald",
    "target": "USA",
    "value": "increased stake",
    "lineStyle": {
        "normal": {
            "color": "#303F9F"
        }
    }
}, { //5 2015
    "source": "KFC",
    "target": "KFC China",
    "value": "decreased stake",
    "lineStyle": {
        "normal": {
            "color": "#fdd835",
        }
    }
}, { //6 2105
    "source": "Alibaba",
    "target": "China",
    "value": "increased stake",
    "lineStyle": {
        "normal": {
            "color": "#303F9F"
        }
    }
}, { //7 2016
    "source": "Tencent",
    "target": "JD.com",
    "value": "increased stake",
    "lineStyle": {
        "normal": {
            "color": "#303F9F"
        }
    }
}, { //8 2016
    "source": "Toyota",
    "target": "Tesla",
    "value": "cooperated",
    "lineStyle": {
        "normal": {
            "color": "#FF1744"
        }
    }
}, { //9 2017
    "source": "Geely",
    "target": "Tesla",
    "value": "acquired",
    "lineStyle": {
        "normal": {
            "color": "#ff8f00"
        }
    }
}, {
  "source": "Events",
  "target": "Cooperate Events",
  "lineStyle": {
      "normal": {
          "color": "transparent"
      }
  }
},{
  "source": "Events",
  "target": "Sue Events",
  "lineStyle": {
      "normal": {
          "color": "transparent"
      }
  }
},
{
  "source": "Events",
  "target": "Acquire Events",
  "lineStyle": {
      "normal": {
          "color": "transparent"
      }
  }
},{
  "source": "Events",
  "target": "Stake Events",
  "lineStyle": {
      "normal": {
          "color": "transparent"
      }
  }
},

// {
//   "source": "Cooperate Events",
//   "target": "Tesla",
//   "lineStyle": {
//       "normal": {
//           "color": "transparent"
//       }
//   }
// },
{
  "source": "Cooperate Events",
  "target": "Toyota",
  // "value": "acquired",
  "lineStyle": {
      "normal": {
          "color": "transparent"
      }
  },
},
{
  "source": "Acquire Events",
  "target": "Geely",
  // "value": "acquired",
  "lineStyle": {
      "normal": {
          "color": "transparent"
      }
  },
},
{
  "source": "Acquire Events",
  "target": "Nike",
  // "value": "acquired",
  "lineStyle": {
      "normal": {
          "color": "transparent"
      }
  },
},
{
  "source": "Stake Events",
  "target": "Alibaba",
  // "value": "acquired",
  "lineStyle": {
      "normal": {
          "color": "transparent"
      }
  },
},
{
  "source": "Stake Events",
  "target": "Tencent",
  // "value": "acquired",
  "lineStyle": {
      "normal": {
          "color": "transparent"
      }
  },
},
{
  "source": "Stake Events",
  "target": "McDonald",
  // "value": "acquired",
  "lineStyle": {
      "normal": {
          "color": "transparent"
      }
  },
},
{
  "source": "Stake Events",
  "target": "KFC",
  // "value": "acquired",
  "lineStyle": {
      "normal": {
          "color": "transparent"
      }
  },
},
{
  "source": "Stake Events",
  "target": "Adidas",
  // "value": "acquired",
  "lineStyle": {
      "normal": {
          "color": "transparent"
      }
  },
},
{
  "source": "Sue Events",
  "target": "Adidas",
  // "value": "acquired",
  "lineStyle": {
      "normal": {
          "color": "transparent"
      }
  },
},
{
  "source": "Stake Events",
  "target": "Apple",
  // "value": "acquired",
  "lineStyle": {
      "normal": {
          "color": "transparent"
      }
  },
},
// ,{
//   "source": "China",
//   "target": "Geely",
//   "lineStyle": {
//       "normal": {
//           "color": "transparent"
//       }
//   }
// },{
//   "source": "China",
//   "target": "Tencent",
//   "lineStyle": {
//       "normal": {
//           "color": "transparent"
//       }
//   }
// },{
//   "source": "China",
//   "target": "Adidas China",
//   "lineStyle": {
//       "normal": {
//           "color": "transparent"
//       }
//   }
// },{
//   "source": "China",
//   "target": "KFC China",
//   "lineStyle": {
//       "normal": {
//           "color": "transparent"
//       }
//   }
// },{
//   "source": "China",
//   "target": "JD.com",
//   "lineStyle": {
//       "normal": {
//           "color": "transparent"
//       }
//   }
// }, {
//   "source": "USA",
//   "target": "Apple",
//   "lineStyle": {
//       "normal": {
//           "color": "transparent"
//       }
//   }
// },{
//   "source": "USA",
//   "target": "Adidas",
//   "lineStyle": {
//       "normal": {
//           "color": "transparent"
//       }
//   }
// }, {
//   "source": "USA",
//   "target": "KFC",
//   "lineStyle": {
//       "normal": {
//           "color": "transparent"
//       }
//   }
// }, {
//   "source": "USA",
//   "target": "Tesla",
//   "lineStyle": {
//       "normal": {
//           "color": "transparent"
//       }
//   }
// },
]

// 指定图表的配置项和数据
var option = {
    baseOption: {
        timeline: {
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 2000,
            loop: false,
            symbolSize: 20,
            bottom: 30,
            controlPosition: 'right',
            controlStyle: {
                itemSize: 25
            },
            data: ['2011', '2012', '2014', '2015', '2016', '2017', '2011-2017']
        },
        backgroundColor: '#f7f8fa',
        // backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        //     offset: 0,
        //     color: '#f7f8fa'
        // }, {
        //     offset: 1,
        //     color: '#cdd0d5'
        // }]),
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
                var decrease = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:15px;height:15px;background-color:#fdd835"></span>';
                //sue
                var sue = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:15px;height:15px;background-color:#3498DB"></span>';
                //Acquire
                var acquire = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:15px;height:15px;background-color:#ff8f00"></span>';
                //cooperate
                var cooperate = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:15px;height:15px;background-color:#FF1744"></span>';

                switch(tip) {
                  case 'USA':
                    res += 'USA<br>';
                    res += acquire;
                    res += '2011: Acquired by Nike<br>'
                    res += increase;
                    res += '2014: McDonald increased stack of USA';
                    break;
                  case 'Nike':
                    res += 'Nike<br>';
                    res += acquire;
                    res += '2011: Nike acquired USA<br>';
                    res += sue;
                    res += '2012: Sued by Adidas';
                    break;
                  case 'Apple':
                    res += 'Apple<br>';
                    res += sue;
                    res += '2012: Apple sued Samsung'
                    break;
                  case 'Samsung':
                    res += 'Nike<br>';
                    res += sue;
                    res += '2012: Sued by Apple'
                    break;
                  case 'McDonald':
                    res += 'McDonald<br>';
                    res += increase;
                    res += '2014: Increased stack of USA';
                    break;
                  case 'China':
                    res += 'China<br>';
                    res += increase;
                    res += '2015: Alibaba increased stack'
                    break;
                  case 'Alibaba':
                    res += 'Alibaba<br>';
                    res += increase;
                    res += '2015: Increased stack of China';
                    break;
                  case 'Tencent':
                    res += 'Tencent<br>';
                    res += increase;
                    res += '2016: Increased stack of JD.com';
                    break;
                  case 'JD.com':
                    res += 'JD.com<br>';
                    res += increase;
                    res += '2016: Tencent increased stack';
                    break;
                  case 'Adidas China':
                    res += 'Adidas China<br>';
                    res += decrease;
                    res += '2014: Adidas decreased stack';
                    break;
                  case 'Adidas':
                    res += 'Adidas China<br>';
                    res += sue;
                    res += '2012: Sued Nike<br>';
                    res += decrease;
                    res += '2014: Decreased stack of Adidas China';
                    break;
                  case 'KFC':
                    res += 'KFC<br>';
                    res += decrease;
                    res += '2015: Decreased stack of KFC China';
                    break;
                  case 'KFC China':
                    res += 'KFC China<br>';
                    res += decrease;
                    res += '2015: KFC decreased stack of KFC China';
                    break;
                  case 'Toyota':
                    res += 'Toyota<br>';
                    res += cooperate;
                    res += '2016: Cooperated with Tesla';
                    break;
                  case 'Tesla':
                    res += 'Tesla<br>';
                    res += cooperate;
                    res += '2016: Cooperated with Toyota<br>';
                    res += acquire;
                    res += '2017: Acquired by Geely';
                    break;
                  case 'Geely':
                    res += 'Geely<br>';
                    res += acquire;
                    res += '2017: Acquired Tesla';
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
            // // bottom: 20,
            top: '28%',
            orient: 'vertical',
            data: [companyNames[1], companyNames[2], companyNames[3], companyNames[4], companyNames[5], companyNames[6]]
        }, {
            tooltip: {
                show: true
            },
            selectedMode: 'false',
            right: 62,
            // // bottom: 20,
            top: '56%',
            orient: 'vertical',
            data: [companyNames[8], companyNames[9], companyNames[10], companyNames[11], companyNames[12], companyNames[13]]
        }, {
            tooltip: {
                show: true
            },
            selectedMode: 'false',
            right: 82,
            // // bottom: 20,
            top: '84%',
            orient: 'vertical',
            data: [companyNames[14], companyNames[15]]
        }, {
            tooltip: {
                show: true
            },
            selectedMode: 'false',
            right: 102,
            // // bottom: 20,
            top: '16%',
            orient: 'vertical',
            data: [companyNames[0], companyNames[7]]
        }],
        animationDuration: 1500,
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
                circular: {
                    rotateLabel: true
                },
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [5, 15],
                edgeLabel: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 20
                        },
                        formatter: "{c}"
                    }
                },
                tooltip: {
                  backgroundColor: '#212121'
                },
                lineStyle: {
                    normal: {
                        color: 'source',
                        width: 3,
                        curveness: 0.2
                    }
                },
                // color: ['#0D47A1', '#1976D2', '#1E88E5', '#2196F3', '#42A5F5', '#64B5F6', '#90CAF9','#B71C1C', '#C62828', '#D32F2F', '#E53935', '#F44336', '#EF5350', '#E57373', '#F57F17', '#FDD835']
                color: ['#0D47A1', '#1976D2', '#1976D2', '#1976D2', '#1976D2', '#1976D2', '#1976D2', '#943126', '#C62828', '#C62828', '#C62828', '#C62828', '#C62828', '#C62828', '#F1C40F', '#F7DC6F']

            },

        ]
    },
    options: [{ //2011
            series: [{
              layout: 'circular',
                data: [data[4], data[3]],
                links: [links[0]],
                width: clientWidth / 4,
                height: clientHeight / 4,
            }]
        },
        { //2012
            series: [{
              layout: 'circular',
                data: [data[4], data[15], data[1], data[5]],
                links: [links[1], links[2]],
                width: clientWidth / 3,
                height: clientHeight / 3,
            }]
        },
        { //2014
            series: [{
              layout: 'circular',
                data: [data[5], data[8], data[2], data[3]],
                links: [links[3], links[4]],

                width: clientWidth / 2,
                height: clientHeight / 2,
            }]
        },
        { //2015
            series: [{
              layout: 'circular',
                data: [data[6], data[7], data[12], data[11]],
                links: [links[5], links[6]],
                width: clientWidth / 2,
                height: clientHeight / 2,

            }]
        },
        { //2016
            series: [{
              layout: 'circular',
                data: [data[0], data[14], data[10], data[9]],
                links: [links[7], links[8]],
                width: clientWidth / 2,
                height: clientHeight / 2,

            }]
        },
        { //2017
            series: [{
                layout: 'circular',
                data: [data[13], data[0]],
                links: [links[9]],
                width: clientWidth / 3,
                height: clientHeight / 3,
            }]
        // },
        // { //2011-2017
        //     series: [{
        //         layout: 'force',
        //         draggable: true,
        //         force:{
        //           // initLayout: 'circular'
        //         },
        //         force: {
        //       repulsion: 400,
        //       // edgeLength: [150, 250],
        //       gravity: 0.1
        //   },
        //         lineStyle: {
        //             normal: {
        //                 color: 'source',
        //                 width: 3,
        //                 curveness: 0
        //             }
        //         },
        //         data: forceData,
        //         links: forcelinks,
        //         width: clientWidth / 1.5,
        //         height: clientHeight / 1.5,
        //
        //     }]
        }, {//2011-2017
            series: [{
                data: data,
                links: links,
                lineStyle: {
                    normal: {
                        color: 'source',
                        width: 3,
                        curveness: 0.2
                    }
                },
                width: clientWidth / 1.5,
                height: clientHeight / 1.5,

        }]
      },
    ]



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
