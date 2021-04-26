import React, { Component } from 'react';
import styles from './index.module.less';
import *as echarts from 'echarts';
class mainLeftTop extends Component {
    render() {
        return <div className={styles.box}>
            <div className={styles.pie}>
                <div id="main1" className={styles.left}></div>
                <div id="main2" className={styles.right} ></div >
            </div >
        </div >
    };
    componentDidMount() {
        var myChart1 = echarts.init(document.getElementById('main1'));
        var myChart2 = echarts.init(document.getElementById('main2'));
        var option1 = {
            title: {
                text: '各省柜机分布数量',
                textStyle: { 'fontSize': 15, 'color': '#2C2F35', 'font-weight': 'normal', 'font-family': 'Microsoft YaHei' },
                left: '16%',
            },

            legend: {
                y: '78%',
                x: 'center',
                itemGap: 20,
                itemWidth: 7,
                itemHeight: 7,
                icon: 'square',
                textStyle: { fontSize: 14, height: 1, lineHeight: 1 },
                backgroundColor: '#F0F6FF',
            },
            graphic: {
                type: 'text',
                left: 'center',
                top: '85px',
                z: 3,
                style: {
                    width: 68,
                    height: 29,
                    font: 'bolder 22px Microsoft YaHei'
                }
            },
            series: [
                {
                    name: '城市',
                    type: 'pie',
                    radius: ['40%', '60%'],
                    avoidLabelOverlap: false,
                    center: ['30%', '43%'],
                    label: {
                        show: true,
                        position: 'center',
                        normal: {
                            show: true,
                            formatter: [
                                // '{value|{c}}',
                                '{value|12316}',
                                '{name|{b}}'
                            ].join('\n'),
                            y: 'center',
                            rich: {
                                value: {
                                    color: '#303133',
                                    fontSize: 22,
                                    fontWeight: 'bold',
                                    lineHeight: 25,
                                },
                                name: {
                                    color: '#4FA6FF',
                                    lineHeight: 20
                                },
                            },
                            position: 'center',
                            lineHeight: 20,
                        }
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '14',
                            color: '#4FA6FF',
                            fontWeight: 400,
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 12316, name: '北京' },
                        { value: 7335, name: '上海' },
                        { value: 5820, name: '广州' },
                        { value: 4834, name: '深圳' },
                        { value: 4834, name: '哈尔滨' },
                        { value: 3040, name: '天津' },
                        { value: 3020, name: '南京' },
                        { value: 3500, name: '苏州' },
                        { value: 3200, name: '合肥' },
                        { value: 3050, name: '厦门' },
                        { value: 3300, name: '南宁' },
                        { value: 3600, name: '其他地区' }
                    ]
                }
            ],
            color: ['#1890FF', '#8BB7EB', '#8477EA ', '#FB7293 ', '#FF9F7F ', '#FFD65C ', '#A7EFBE ', '#3AD2F7 ', '#586B8F ', '#52C499 ', '#5FA04F ', '#D5F176 ',]
        };
        var option2 = {
            title: {
                text: '各省柜机在线率与故障率',
                textStyle: { 'fontSize': 15, 'color': '#2C2F35', 'font-weight': 400, 'font-family': 'Microsoft YaHei' },
                left: '1%',
            },
            tooltip: {
                trigger: 'item'
            },
            graphic: {
                type: 'text',
                left: 'center',
                top: '85px',
                z: 3,
            },
            series: [
                {
                    name: '城市',
                    type: 'pie',
                    radius: ['40%', '60%'],
                    avoidLabelOverlap: false,
                    center: ['30%', '45%'],
                    label: {
                        show: true,
                        normal: {
                            show: true,
                            formatter: [
                                '{value|98%/1%}',
                                '{name|{b}}'
                            ].join('\n'),
                            y: 'center',
                            rich: {
                                value: {
                                    color: '#303133',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    lineHeight: 25,
                                },
                                name: {
                                    color: '#4FA6FF',
                                    lineHeight: 20
                                },
                            },
                            position: 'center',
                            lineHeight: 30,
                        }
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '14',
                            color: '#4FA6FF',
                            fontWeight: 400,
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 12316, name: '北京' },
                        { value: 7335, name: '上海' },
                        { value: 5820, name: '广州' },
                        { value: 4834, name: '深圳' },
                        { value: 4834, name: '哈尔滨' },
                        { value: 3040, name: '天津' },
                        { value: 3020, name: '南京' },
                        { value: 3500, name: '苏州' },
                        { value: 3200, name: '合肥' },
                        { value: 3050, name: '厦门' },
                        { value: 3300, name: '南宁' },
                        { value: 3600, name: '其他地区' }
                    ],
                    color: ['#1890FF', '#8BB7EB', '#8477EA ', '#FB7293 ', '#FF9F7F ', '#FFD65C ', '#A7EFBE ', '#3AD2F7 ', '#586B8F ', '#52C499 ', '#5FA04F ', '#D5F176 ',]
                }
            ]
        };
        myChart1.setOption(option1);
        myChart2.setOption(option2);
    }
};
export default mainLeftTop;