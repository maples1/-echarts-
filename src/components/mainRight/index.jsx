import React, { Component } from 'react';
import styles from './index.module.less';
import *as echarts from 'echarts';
class mainRight extends Component {
    render() {
        return <div className={styles.box}>
            <div className={styles.pie}>
                <div id="main6" className={styles.left}></div>
                <div className={styles.titleLeft}>观看时间</div>
                <div id="main7" className={styles.right} ></div >
                <div className={styles.titleRight}>成单比</div>
            </div >
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
        var myChart1 = echarts.init(document.getElementById('main6'));
        var myChart2 = echarts.init(document.getElementById('main7'));
        var option1 = {
            title: {
                text: '客户群年龄分布统计/',
                textStyle: { 'fontSize': 16, 'color': '#2C2F35', 'font-family': 'Microsoft YaHei' },
                left: '3.8%',
            },
            tooltip: {
                trigger: 'item'
            },
            grid: {
                left: '3%',
                right: '4%',
                top: '20%',
                bottom: '20%',
                x2: 10,
                y2: 50,
                containLabel: true,
            },
            dataset: {
                source: [
                    ['product', '广告一', '广告二', '广告三', '广告四'],
                    ['儿童', 6, 3, 3, 1],
                    ['青年', 2, 3, 6, 2],
                    ['中年', 1, 3, 6, 7],
                    ['老年', 3, 4, 1, 2],
                ]
            },
            xAxis: {
                type: 'category',
                boundaryGap: [0, 0.01],
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
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
            series: [
                {
                    type: 'bar',
                    barWidth: 4,
                    itemStyle: {
                        normal: {
                            barBorderRadius: [7, 7, 0, 0],
                        },
                    },
                },
                {
                    type: 'bar', barWidth: 4, itemStyle: {
                        normal: {
                            barBorderRadius: [7, 7, 0, 0],
                        },
                    },
                },
                {
                    type: 'bar', barWidth: 4, itemStyle: {
                        normal: {
                            barBorderRadius: [7, 7, 0, 0],
                        },
                    },
                },
                {
                    type: 'bar', barWidth: 4, itemStyle: {
                        normal: {
                            barBorderRadius: [7, 7, 0, 0],
                        },
                    },
                },
            ],
            // legend: {
            //     y: '90%',
            //     x: '5%',
            //     itemGap: 17,
            //     itemWidth: 6,
            //     itemHeight: 6,
            //     icon: 'square',
            //     textStyle: { fontSize: 9, height: 1, lineHeight: 1 },
            //     backgroundColor: '#F0F6FF',
            // },
            color: ['#8477EA', '#4FA6FF', '#6BDCAF ', '#C5E45F']
        };


        var option2 = {
            title: {
                text: '客户群年龄分布统计/',
                textStyle: { 'fontSize': 16, 'color': '#2C2F35', 'font-family': 'Microsoft YaHei' },
                left: '3.8%',
            },
            tooltip: {
                trigger: 'item'
            },
            grid: {
                left: '3%',
                right: '4%',
                top: '20%',
                bottom: '20%',
                x2: 10,
                y2: 50,
                containLabel: true,
            },
            dataset: {
                source: [
                    ['product', '广告一', '广告二', '广告三', '广告四'],
                    ['儿童', 40, 20, 30, 30],
                    ['青年', 20, 30, 60, 20],
                    ['中年', 10, 20, 20, 40],
                    ['老年', 30, 10, 20, 20],
                ]
            },
            xAxis: {
                type: 'category',
                boundaryGap: [0, 0.01],
                splitLine: {
                    show: false,
                },
                axisTick: {
                    show: false
                },
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
                    formatter:`{value}%`
                },
            },
            series: [
                {
                    type: 'bar',
                    barWidth: 4,
                    itemStyle: {
                        normal: {
                            barBorderRadius: [7, 7, 0, 0],
                        },
                    },
                },
                {
                    type: 'bar', barWidth: 4, itemStyle: {
                        normal: {
                            barBorderRadius: [7, 7, 0, 0],
                        },
                    },
                },
                {
                    type: 'bar', barWidth: 4, itemStyle: {
                        normal: {
                            barBorderRadius: [7, 7, 0, 0],
                        },
                    },
                },
                {
                    type: 'bar', barWidth: 4, itemStyle: {
                        normal: {
                            barBorderRadius: [7, 7, 0, 0],
                        },
                    },
                },
            ],
           
            color: ['#8477EA', '#4FA6FF', '#6BDCAF', '#C5E45F']
        };
        myChart1.setOption(option1);
        myChart2.setOption(option2);
    }
};
export default mainRight;