import React, { Component } from 'react';
import styles from './index.module.less';
import *as echarts from 'echarts';
class mainRightTop extends Component {
    render() {
        return <div className={styles.box}>
            <div className={styles.pie}>
                <div id="main8" className={styles.left}></div>
                <span className={styles.titleLeft}>性别</span>
                <div id="main9" className={styles.right} ></div >
                <div className={styles.titleRight}>性别</div>
            </div>
            <div className={styles.innerBox}>
                <div className={styles.left}>
                    <div className={styles.icon}></div>
                    <span>广告一</span>
                </div>
                <div className={styles.content}>
                    <div className={styles.icon}></div>
                    <span>广告二</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.icon}></div>
                    <span>广告三</span>
                </div>
                <div className={styles.rightR}>
                    <div className={styles.icon}></div>
                    <span>广告四</span>
                </div>
            </div>
        </div >
    };
    componentDidMount() {
        var myChart1 = echarts.init(document.getElementById('main8'));
        var myChart2 = echarts.init(document.getElementById('main9'));

        let option1 = {
            title: {
                text: '每日停留观看广告时间/',
                textStyle: { 'fontSize': 16, 'color': '#2C2F35', 'font-family': 'Microsoft YaHei' },
                left: '8%',
                top: '0.4%',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'none'
                },
            },
            grid: {
                left: '3%',
                right: '4%',
                top: '17%',
                bottom: '20%',
                x2: 10,
                y2: 50,
                containLabel: true,
            },
            xAxis: {
                data: ['男性停留时间/h', ' ', '女性停留时间/h'],
                axisTick: { show: false },
                axisLine: { show: false },
                axisLabel: {
                    show: true,
                    textStyle: {
                        fontSize: 8,
                        color: '#5FA7E2'
                    }
                },
            },
            yAxis: {
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    },
                },
            },
            color: ['red'],
            series: [{
                name: '广告一',
                type: 'pictorialBar',
                barCategoryGap: '90%',//柱子左移动
                symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                itemStyle: {
                    opacity: 0.5
                },
                emphasis: {
                    itemStyle: {
                        opacity: 10
                    }
                },
                data: [7, 0, 4], //柱子高度
                // data: [323, 160, 325, 118],
                z: 10
            },
            {
                name: 'glyph',
                type: 'pictorialBar',
                barGap: '90%',//柱子左移动
                symbolPosition: 'end',//小球高点 低点
                symbolSize: 150,
                symbolOffset: [-5, '-133%'],//小球左 右
                data: [{
                    value: 6.6,
                    symbolSize: [4, 4]
                }, {
                    value: 6,
                    symbolSize: [0, 0]
                }, {
                    value: 4,
                    symbolSize: [4, 4]
                }, {
                    value: 0,
                    symbolSize: [0, 0]
                }
                ]
            },
            {
                name: '广告二',
                type: 'pictorialBar',
                barCategoryGap: '-30%',
                symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                itemStyle: {
                    opacity: 0.5
                },
                emphasis: {
                    itemStyle: {
                        opacity: 10
                    }
                },
                data: [5, 0, 4], //柱子高度
                // data: [323, 160, 325, 118],
                z: 10
            },
            {
                name: 'glyph',
                type: 'pictorialBar',
                barGap: '-70%',//柱子左移动
                symbolPosition: 'end',//小球高点 低点
                symbolSize: 150,
                symbolOffset: [-4.2, '-133%'],//小球左 右
                data: [{
                    value: 4.8,
                    symbolSize: [4, 4]
                }, {
                    value: 0,
                    symbolSize: [0, 0]
                }, {
                    value: 3.7,
                    symbolSize: [4, 4]
                }, {
                    value: 0,
                    symbolSize: [0, 0]
                }
                ]
            }, {
                name: '广告三',
                type: 'pictorialBar',
                barCategoryGap: '-30%',
                symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                itemStyle: {
                    opacity: 0.5
                },
                emphasis: {
                    itemStyle: {
                        opacity: 10
                    }
                },
                data: [3, 0, 6], //柱子高度
                // data: [323, 160, 325, 118],
                z: 10
            },
            {
                name: 'glyph',
                type: 'pictorialBar',
                barGap: '-270%',//柱子左移动
                symbolPosition: 'end',//小球高点 低点
                symbolSize: 150,
                symbolOffset: [-4.5, '-133%'],//小球左 右
                data: [{
                    value: 2.7,
                    symbolSize: [4, 4]
                }, {
                    value: 0,
                    symbolSize: [0, 0]
                }, {
                    value: 5.6,
                    symbolSize: [4, 4]
                }, {
                    value: 5,
                    symbolSize: [4, 4]
                }
                ]
            }, {
                name: '广告四',
                type: 'pictorialBar',
                barCategoryGap: '20%',
                symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                itemStyle: {
                    opacity: 0.5
                },
                emphasis: {
                    itemStyle: {
                        opacity: 10
                    }
                },
                data: [4, 0, 7],
                z: 10
            },
            {
                name: 'glyph',
                type: 'pictorialBar',
                barGap: '-75%',//柱子左移动
                symbolPosition: 'end',//小球高点 低点
                symbolSize: 150,
                symbolOffset: [-4.5, '-133%'],//小球左 右
                data: [{
                    value: 3.7,
                    symbolSize: [4, 4]
                }, {
                    value: 0,
                    symbolSize: [0, 0]
                }, {
                    value: 6.7,
                    symbolSize: [4, 4]
                }, {
                    value: 0,
                    symbolSize: [0, 0]
                }
                ]
            },
            ],
            color: ['#8477EA', '#4FA6FF', '#6BDCAF ', '#C5E45F']
        };

        var option2 = {
            title: {
                text: '成单比/',
                textStyle: { 'fontSize': 16, 'color': '#2C2F35', 'font-family': 'Microsoft YaHei' },
                right: '26%',
                top: '0.4%',
            },
            tooltip: {
                trigger: 'axis',
            },
            grid: {
                left: '3%',
                right: '4%',
                top: '17%',
                bottom: '20%',
                x2: 10,
                y2: 50,
                containLabel: true,
            },
            xAxis: {
                data: ['男性成单比', '', '女性成单比'],
                axisTick: { show: false },
                axisLine: { show: false },
                axisLabel: {
                    show: true,
                    textStyle: {
                        fontSize: 8,
                        color: '#5FA7E2'
                    }
                },
            },
            yAxis: {
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    },
                    formatter: `{value}%`
                },
            },
            series: [{
                name: '广告一',
                type: 'pictorialBar',
                barCategoryGap: '90%',//柱子左移动
                symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                itemStyle: {
                    opacity: 0.5
                },
                emphasis: {
                    itemStyle: {
                        opacity: 10
                    }
                },
                data: [30, 0, 40], //柱子高度
                // data: [323, 160, 325, 118],
                z: 10
            },
            {
                name: 'glyph',
                type: 'pictorialBar',
                barGap: '90%',//柱子左移动
                symbolPosition: 'end',//小球高点 低点
                symbolSize: 150,
                symbolOffset: [-5, '-133%'],//小球左 右
                data: [{
                    value: 30,
                    symbolSize: [4, 4]
                }, {
                    value: 0,
                    symbolSize: [0, 0]
                }, {
                    value: 40,
                    symbolSize: [4, 4]
                }, {
                    value: 0,
                    symbolSize: [0, 0]
                }
                ]
            },
            {
                name: '广告二',
                type: 'pictorialBar',
                barCategoryGap: '-30%',
                symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                itemStyle: {
                    opacity: 0.5
                },
                emphasis: {
                    itemStyle: {
                        opacity: 10
                    }
                },
                data: [50, 0, 40] ,//柱子高度
                // data: [323, 160, 325, 118],
                z: 10
            },
            {
                name: 'glyph',
                type: 'pictorialBar',
                barGap: '-70%',//柱子左移动
                symbolPosition: 'end',//小球高点 低点
                symbolSize: 150,
                symbolOffset: [-4.2, '-133%'],//小球左 右
                data: [{
                    value: 48,
                    symbolSize: [4, 4]
                }, {
                    value: 0,
                    symbolSize: [0, 0]
                }, {
                    value: 37,
                    symbolSize: [4, 4]
                }, {
                    value: 0,
                    symbolSize: [0, 0]
                }
                ]
            }, {
                name: '广告三',
                type: 'pictorialBar',
                barCategoryGap: '-30%',
                symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                itemStyle: {
                    opacity: 0.5
                },
                emphasis: {
                    itemStyle: {
                        opacity: 10
                    }
                },
                data: [30, 0, 60], //柱子高度
                // data: [323, 160, 325, 118],
                z: 10
            },
            {
                name: 'glyph',
                type: 'pictorialBar',
                barGap: '-270%',//柱子左移动
                symbolPosition: 'end',//小球高点 低点
                symbolSize: 150,
                symbolOffset: [-4.5, '-133%'],//小球左 右
                data: [{
                    value: 27,
                    symbolSize: [4, 4]
                }, {
                    value: 0,
                    symbolSize: [0, 0]
                }, {
                    value: 56,
                    symbolSize: [4, 4]
                }, {
                    value: 0,
                    symbolSize: [0, 0]
                }
                ]
            }, {
                name: '广告四',
                type: 'pictorialBar',
                barCategoryGap: '20%',
                symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                itemStyle: {
                    opacity: 0.5
                },
                emphasis: {
                    itemStyle: {
                        opacity: 10
                    }
                },
                data: [30, 0, 20],
                z: 10
            },
            {
                name: 'glyph',
                type: 'pictorialBar',
                barGap: '-75%',//柱子左移动
                symbolPosition: 'end',//小球高点 低点
                symbolSize: 150,
                symbolOffset: [-4.5, '-133%'],//小球左 右
                data: [{
                    value: 27,
                    symbolSize: [4, 4]
                }, {
                    value: 0,
                    symbolSize: [0, 0]
                }, {
                    value: 20,
                    symbolSize: [4, 4]
                }, {
                    value: 0,
                    symbolSize: [0, 0]
                }
                ]
            },
            ],

            color: ['#8477EA', '#4FA6FF', '#6BDCAF ', '#C5E45F']
        };
        myChart1.setOption(option1);
        myChart2.setOption(option2);
    }

};
export default mainRightTop;