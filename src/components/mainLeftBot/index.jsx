import React, { Component } from 'react';
import styles from './index.module.less';
import * as echarts from 'echarts';
class mainLeftBot extends Component {
    render() {
        return <div className={styles.box}>
            <div id="main3" className={styles.inner}></div>
            <div className={styles.title}>亿</div>
            <div className={styles.innerBox}>
                <div className={styles.left}>
                    <div className={styles.icon}></div>
                    <span>雪碧</span>
                </div>
                <div className={styles.content}>
                    <div className={styles.icon}></div>
                    <span>可乐</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.icon}></div>
                    <span>农夫山泉</span>
                </div>
            </div>
        </div >
    }
    componentDidMount() {
        var myChart = echarts.init(document.getElementById('main3'));
        var option = {
            title: {
                text: '销售额/',
                textStyle: { 'fontSize': 16, 'color': '#2C2F35', 'font-family': 'Microsoft YaHei' },
                left: '4.8%',
                top: '4.5%',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            // legend: {
            //     y: '85%',
            //     x: '5%',
            //     itemGap: 17,
            //     itemWidth: 6,
            //     itemHeight: 6,
            //     icon: 'square',
            //     textStyle: { fontSize: 9, height: 1, lineHeight: 1 },
            //     backgroundColor: '#F0F6FF',
            // },
            grid: {
                left: '3%',
                right: '4%',
                top: '20%',
                bottom: '20%',
                containLabel: true,
            },
            xAxis: [{
                type: 'value',
                boundaryGap: [0, 0.01],
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        fontSize: 8,
                        color: '#5FA7E2'
                    }
                },
            }],
            yAxis: {
                type: 'category',
                data: ['北京', '上海', '深圳', '其他地区'],
                splitLine: {
                    show: false,
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
                        fontSize: 10
                    },
                },
            },
            series: [
                {
                    name: '雪碧',
                    type: 'bar',
                    data: [2.1, 2.1, 1.42, 2.8,],
                    showBackground: true,
                    backgroundStyle: {
                        color: '#E9ECF2'
                    },
                    itemStyle: {
                        normal: {
                            barBorderRadius: [0, 7, 7, 0],
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: '#9AEBFF' },
                                { offset: 1, color: '#379FFF' },
                            ]),

                        },
                    }
                },
                {
                    name: '可乐',
                    type: 'bar',
                    data: [1.2, 1.12, 2.21, 4.21,],
                    showBackground: true,
                    backgroundStyle: {
                        color: '#E9ECF2'
                    },
                    itemStyle: {
                        normal: {
                            barBorderRadius: [0, 7, 7, 0],
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: '#9AF2CF' },
                                { offset: 1, color: '#52C499' },
                            ])
                        }
                    }
                },
                {
                    name: '农夫山泉',
                    type: 'bar',
                    data: [3.1, 1.1, 1.9, 2.4],
                    showBackground: true,
                    backgroundStyle: {
                        color: '#E9ECF2'
                    },
                    itemStyle: {
                        normal: {
                            barBorderRadius: [0, 7, 7, 0],
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: '#FFF59C ' },
                                { offset: 1, color: '#FFD65C' },
                            ])
                        }
                    }
                },
            ],
            color: ['#1890FF', '#42D09C', '#FFD65C']
        };
        myChart.setOption(option);
    }
};
export default mainLeftBot;