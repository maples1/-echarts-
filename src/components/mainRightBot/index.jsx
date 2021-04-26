import React, { Component } from 'react';
import styles from './index.module.less';
import *as echarts from 'echarts';
class mainRightBot extends Component {
    render() {
        return <div className={styles.box}>
            <div id="main4" className={styles.inner}></div>
            <div className={styles.innerBox}>
                <div className={styles.left}>
                    <div className={styles.icon}></div>
                    <span>东方树叶</span>
                </div>
                <div className={styles.content}>
                    <div className={styles.icon}></div>
                    <span>元气森林</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.icon}></div>
                    <span>农夫山泉</span>
                </div>
            </div>
        </div >
    };
    componentDidMount() {
        var myChart = echarts.init(document.getElementById('main4'));
        var option = {
            title: {
                text: '购买hot时段',
                textStyle: { 'fontSize': 16, 'color': '#2C2F35', 'font-family': 'Microsoft YaHei' },
                left: '7%',
                top: '4.2%',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: { 
                    type: 'shadow'
                }
            },
            // legend: {
            //     y: '85%',
            //     x: '8%',
            //     itemGap: 17,
            //     itemWidth: 6,
            //     itemHeight: 6,
            //     icon: 'square',
            //     textStyle: { fontSize: 9, height: 1, lineHeight: 1 },
            //     backgroundColor: '#F0F6FF',
            // },
            grid: {
                left: '8%',
                right: '4%',
                top: '20%',
                bottom: '20%',
                containLabel: true,
            },
            xAxis: [{
                type: 'value',
                boundaryGap: [0, 0.01],
                splitLine: {
                    show: true
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
                data: ['18-23点', '15-18点', '12-15点', '10-12点', '6-10点'],
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
                        fontSize: 8
                    },
                },
            },
            series: [
                {
                    name: '东方树叶',
                    type: 'bar',
                    stack: 'total',
                    barWidth:12,
                    label: {
                        show: false
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [3, 1, 1, 3, 2],

                },
                {
                    name: '元气森林',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: false
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [4, 3, 3, 6, 2]
                },
                {
                    name: '农夫山泉',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: false
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [3, 4, 3, 2, 1],
                    itemStyle:{
                        normal:{
                            barBorderRadius:[0,2,2,0],
                        }
                    }
                },
            ],
            color: ['#D7F27D', '#52C499', '#2496FF']
        };
        myChart.setOption(option);
    };
};
export default mainRightBot;