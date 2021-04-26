import React, { Component } from 'react';
import styles from './index.module.less';
import * as echarts from 'echarts';
class mainBottom extends Component {
    render() {
        return <div>
            <div className={styles.box}>
                <div className={styles.innerLeft}>
                    <span>明星产品广告时间占比</span>
                    <div id="main10" className={styles.inner}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.innerBox}></div>
                </div>
                <div className={styles.innerRight}>
                    <span>客户停留明星广告时间占比</span>
                    <div id="main11" className={styles.inner}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.innerBox}></div>
                </div>
            </div>
            <div className={styles.bottomLeft}></div>
            <div className={styles.bottomRight}></div>
        </div >
    };
    componentDidMount() {
        var myChart1 = echarts.init(document.getElementById('main10'));
        var myChart2 = echarts.init(document.getElementById('main11'));
        var option1 = {
            title: {
                text: '',
                subtext: '',
                x: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: '73%',
                textStyle:{fontSize:8},
                icon: 'circle',
                itemWidth:7,
                y:'23%'
            },
            color:['#4992F8','#6BDCAF','#677C9A','#FFD65C'],
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '33%',
                    center:['34%','34%'],
                    data: [
                        { value: 1048, name: '产品一' },
                        { value: 735, name: '产品二' },
                        { value: 380, name: '产品三' },
                        { value: 184, name: '产品四' },
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    label: {
                        show: false,
                    }
                }
            ]
        };
        var option2 = {
            title: {
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: '73%',
                textStyle:{fontSize:8},
                icon: 'circle',
                itemWidth:7,
                y:'23%'
            },
            color:['#4992F8','#6BDCAF','#677C9A','#FFD65C'],
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '33%',
                    center:['34%','34%'],
                    data: [
                        { value: 1048, name: '产品一' },
                        { value: 735, name: '产品二' },
                        { value: 380, name: '产品三' },
                        { value: 84, name: '产品四' },
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    label: {
                        show: false,
                    }
                }
            ]
        };
        myChart1.setOption(option1);
        myChart2.setOption(option2);
    }
};
export default mainBottom;