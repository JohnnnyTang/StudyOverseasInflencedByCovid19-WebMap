export default class Charts {
    constructor(myCharts) {
        this.charts = myCharts;
        this.chartOptions = [
            {
                title: {
                    text: '截至2021年6月新冠肺炎累计确诊数',
                    show: false
                },
                //backgroundColor: 'rgba(255, 255, 255, 0.4)',
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                // legend: {
                //     data: ['2021年6月']
                // },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    axisLabel : {

                        formatter: function(){
        
                            return "";
                        }
                    },
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['哥伦比亚','阿根廷','意大利','英国','俄罗斯', '土耳其', '法国', '巴西', '印度', '美国']
                },
                series: [
                    {
                        type: 'bar',
                        data: [3777600,4172742,4247032,
                        {value:4596987,
                        itemStyle:{
                            color:'#a90000'
                        }},5176051,
                         5342028, 5806247, 17533221, 29570881, 
                            {value:33485549,
                            itemStyle: {
                                color:'#a90000'
                            }}
                        ],
                        color: '#a90000'
                        
                    }
                ]
            }, 
            //{},
            {
                title: {
                    text: '2020年全球最佳留学国家排行榜TOP10',
                    subtext: '全球教育网发布',
                    show: false
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                // legend: {
                //     data: ['2021年6月']
                // },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    axisLabel : {

                        formatter: function(){
        
                            return "";
                        }
                    },
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['法国','西班牙','英国','荷兰','瑞典', '美国', '瑞士', '德国', '澳大利亚', '加拿大']
                },
                series: [
                    {
                        type: 'bar',
                        data: [
                            75.76,
                            76.21,
                            76.54,
                            77.25,
                            77.65,
                            77.67,
                            78.00,
                            81.48,
                            83.67,
                            85.01
                        ],
                        color: 'rgb(0,137,123)'
                        
                    }
                ]
            }, 
            {
                title: {
                    text: '留学生新入学总人数', 
                    show: false
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['UK', 'USA']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    axisLabel : {

                        formatter: function(){
        
                            return "";
                        }
                    },
                    type: 'category',
                    boundaryGap: true,
                    data: ['前五年平均', '19-20学年']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: 'UK',
                        type: 'line',
                        data: [460380, 556625]
                    },
                    {
                        name: 'USA',
                        type: 'line',
                        data: [285293, 267712],
                        color:'rgb(170,49,77)'
                    }
                ]
            }, 
            {
                title: {
                    text: '英国各大学留学生新生入学总数',
                    show: false
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                // legend: {
                //     data: ['2021年6月']
                // },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    axisLabel : {

                        formatter: function(){
        
                            return "";
                        }
                    },
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['伦敦都市大学'
                            ,'伦敦玛丽女王大学'
                            ,'牛津大学'
                            ,'伦敦政治经济学院'
                            ,'卡迪夫大学'
                            ,'诺丁汉大学'
                            ,'帝国理工学院'
                            ,'华威大学'
                            ,'利物浦大学'
                            ,'伯明翰大学'
                            ,'伦敦艺术大学'
                            ,'曼彻斯特大学'
                            ,'南安普顿大学'
                            ,'剑桥大学'
                            ,'格拉斯哥大学'
                            ,'谢菲尔德大学'
                            ,'考文垂大学'
                            ,'爱丁堡大学'
                            ,'伦敦国王学院'
                            ,'伦敦大学学院'
                            ,'利兹大学'
                            ,'纽卡斯尔大学'
                    ]
                },
                series: [
                    {
                        type: 'bar',
                        data: [
                            {value:-7365,
                            itemStyle:{
                                color:'rgb(84,112,198)'
                            }},
                            {value:-1387,
                            itemStyle:{
                                color:'rgb(84,112,198)'
                            }},
                            
                            ,522
                            ,689
                            ,831
                            ,1297
                            ,1452
                            ,1467
                            ,1497
                            ,1733
                            ,1950
                            ,1969
                            ,1976
                            ,2046
                            ,2149
                            ,2245
                            ,2884
                            ,3113
                            ,3311
                            ,3965
                            ,4473
                            ,4981
                        ],
                        color: '#a90000'
                        
                    }
                ]
            }, 
            {
                title: {
                    text: '英国生源国留学生人数变化率',
                    show:false
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                // legend: {
                //     data: ['2021年6月']
                // },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    axisLabel : {
    
                    formatter: function(){
    
                        return "";
                    }
                    },
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['意大利'
                        ,'荷兰'
                        ,'德国'
                        ,'美国'
                        ,'西班牙'
                        ,'瑞士'
                        ,'法国'
                        ,'波兰'
                        ,'爱尔兰'
                        ,'希腊'
                        ,'保加利亚'
                        ,'韩国'
                        ,'立陶宛'
                        ,'马来西亚'
                        ,'罗马尼亚'
                        ,'加拿大'
                        ,'挪威'
                        ,'新加坡'
                        ,'瑞典'
                        ,'越南'
                        ,'泰国'
                        ,'沙特阿拉伯'
                        ,'土耳其'
                        ,'中国'
                        ,'日本'
                        ,'巴基斯坦'
                        ,'孟加拉国'
                        ,'尼日利亚'
                        // ,'印度'
                    ]
                },
                series: [
                    {
                        name: '2021年6月',
                        type: 'bar',
                        data: [
                                {value:-5.910,
                                itemStyle:{
                                    color:'rgb(84,112,198)'
                                }},
                                {value:-5.780,
                                itemStyle:{
                                    color:'rgb(84,112,198)'
                                }},
                                {value:-5.050,
                                itemStyle:{
                                    color:'rgb(84,112,198)'
                                }},
                                {value:-3.760,
                                itemStyle:{
                                    color:'rgb(84,112,198)'
                                }},
                                {value:-3.480,
                                itemStyle:{
                                    color:'rgb(84,112,198)'
                                }},
                                {value:-3.250,
                                itemStyle:{
                                    color:'rgb(84,112,198)'
                                }},
                                {value:-3.180,
                                itemStyle:{
                                    color:'rgb(84,112,198)'
                                }},
                                {value:-3.070,
                                itemStyle:{
                                    color:'rgb(84,112,198)'
                                }},
                                {value:-2.730,
                                itemStyle:{
                                    color:'rgb(84,112,198)'
                                }},
                                {value:-1.810,
                                itemStyle:{
                                    color:'rgb(84,112,198)'
                                }},
                                {value:-1.510,
                                itemStyle:{
                                    color:'rgb(84,112,198)'
                                }},
                                {value:-1.070,
                                itemStyle:{
                                    color:'rgb(84,112,198)'
                                }},
                                {value:-0.280,
                                itemStyle:{
                                    color:'rgb(84,112,198)'
                                }},
                                ,0.080
                                ,0.390
                                ,0.510
                                ,0.730
                                ,1.080
                                ,1.550
                                ,2.290
                                ,3.850
                                ,4.210
                                ,4.600
                                ,6.500
                                ,7.240
                                ,14.320
                                ,23.000
                                ,25.600
                                // ,71.870
                        ],
                        color: '#a90000'
                        
                    }
                ]
            }, 
            {
                title: {
                    text: '美国各大学新生入学留学生总数', 
                    show: false
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                // legend: {
                //     data: ['2021年6月']
                // },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    axisLabel : {

                        formatter: function(){
        
                            return "";
                        }
                    },
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['MSU',//'密歇根州立大学'
                            'IUB',//,'印第安纳大学伯明顿分校'
                            'UMN',//,'明尼苏达大学'
                            'UTA',//,'德克萨斯大学阿灵顿分校'
                            'UB',//'纽约州立大学布法罗分校'
                            'TAMU',//,'德州农工大学'
                            'UCLA',//'加利福尼亚大学洛杉矶分校'
                            'UF',//'佛罗里达大学'
                            'UTD',//'德州大学达拉斯分校'
                            'ASU',//'亚利桑那州立大学'
                            'PUWL',//'普渡大学西拉法叶校区'
                            'PSU',//'宾夕法尼亚州立大学帕克校区'
                            'UW',//'华盛顿大学'
                            'UMich',//'密歇根大学安娜堡分校'
                            'UIUC',//'伊利诺伊大学厄巴纳-香槟分校'
                            'OSU',//'俄亥俄州立大学哥伦比亚校区'
                            'BU',//'波士顿大学'
                            'CMU',//'卡内基梅隆大学'
                            'UCB',//'加州大学伯克利分校'
                            'USC',//'南加州大学'
                            'CU',//'哥伦比亚大学'
                            'UCSD',//'加利福尼亚大学圣迭戈分校'
                            'NU',//'美国东北大学'
                            'NYU',//'纽约大学'
                            'UCD',//'加利福尼亚大学戴维斯分校'''
                            'UCI',//'加利福尼亚大学欧文分校'
                            'Cornell'//'康奈尔大学'
                    ]
                },
                series: [
                    {
                        type: 'bar',
                        data: [
                            {value:-6361,
                            itemStyle:{
                                color:'rgb(84,112,198)'
                            }},
                            {value:-5803,
                            itemStyle:{
                                color:'rgb(84,112,198)'
                            }},
                            {value:-2804,
                            itemStyle:{
                                color:'rgb(84,112,198)'
                            }},
                            {value:-1455,
                            itemStyle:{
                                color:'rgb(84,112,198)'
                            }},
                            {value:-1370,
                            itemStyle:{
                                color:'rgb(84,112,198)'
                            }},
                            {value:-1338,
                            itemStyle:{
                                color:'rgb(84,112,198)'
                            }},
                            {value:-129,
                            itemStyle:{
                                color:'rgb(84,112,198)'
                            }}
                            ,0
                            ,61
                            ,330
                            ,359
                            ,648
                            ,731
                            ,923
                            ,1421
                            ,1906
                            ,2029
                            ,2299
                            ,2379
                            ,2826
                            ,3373
                            ,3841
                            ,4203
                            ,4452
                            ,4846
                            ,5580
                            ,6180
                        ],
                        color: '#a90000'
                        
                    }
                ]
            }, 
            {
                title: {
                    text: '美国生源国留学生人数变化率', 
                    show: false
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                // legend: {
                //     data: ['2021年6月']
                // },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    axisLabel : {

                        formatter: function(){
        
                            return "";
                        }
                    },
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['日本',
                            '马来西亚',
                            '加纳',
                            '西班牙',
                            '韩国',
                            '巴基斯坦',
                            '土耳其',
                            '委内瑞拉',
                            '科威特',
                            '尼泊尔',
                            '澳大利亚',
                            '沙特阿拉伯',
                            '哥伦比亚',
                            '意大利',
                            '泰国',
                            '加拿大',
                            '法国',
                            '墨西哥',
                            '英国',
                            '伊朗',
                            '新加坡',
                            '中国',
                            '巴西',
                            '德国',
                            '俄罗斯',
                            '孟加拉国',
                            '越南',
                            '尼日利亚',
                            '印度尼西亚',
                            '印度'
                    ]
                },
                series: [
                    {
                        type: 'bar',
                        data: [-19.369731139999900,
                                -14.296351930000000,
                                -14.241736639999900,
                                -13.895112320000000,
                                -12.985006260000000,
                                -10.674736449999900,
                                -10.313332160000000,
                                -9.946061811000000,
                                -9.405951020000000,
                                -8.702297986000000,
                                -7.448686652000000,
                                -6.675744039000000,
                                -6.055116972000000,
                                -6.013942421000000,
                                -5.425628318000000,
                                -5.387770117000000,
                                -4.883359683000000,
                                -4.390494873000000,
                                -3.812819083000000,
                                -2.975603178000000,
                                -2.975379951000000,
                                -1.808885242000000,
                                -1.746208640000000,
                                -1.376099877000000,
                                -0.662267508000000,
                                {value:0.465466542000000,
                                itemStyle:{
                                    color:'#a90000'
                                }},
                                {value:1.071809434000000,
                                itemStyle:{
                                    color:'#a90000'
                                }},
                                {value:2.481458595000000,
                                itemStyle:{
                                    color:'#a90000'
                                }},
                                {value:3.067062328000000,
                                itemStyle:{
                                    color:'#a90000'
                                }},
                                {value:10.498220079999900,
                                itemStyle:{
                                    color:'#a90000'
                                }}
                        ],
                        // color: '#a90000'
                        color:'rgb(84,112,198)'
                        
                    }
                ]
            }
        ]
    }

    SetProperChart(scrollRegion) {
        let myChart = echarts.init(this.charts[scrollRegion]);
        myChart.setOption(this.chartOptions[scrollRegion]);
    }
}