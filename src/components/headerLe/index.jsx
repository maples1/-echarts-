import React, { Component } from 'react';
import styles from './index.module.less';
class headerLe extends Component {
    state={
        data:50,
        dataAfter:1602,
    }
    render() {
        let{data,dataAfter}=this.state;
        return <div>
            <div className={styles.box}>
                <div className={styles.icon}></div>
                <div className={styles.right}>
                    <div className={styles.num}>{data}/{dataAfter}</div>
                    <div className={styles.sum}>柜机销量(日/月)</div>
                </div >
            </div >
        </div >
    };
    componentDidMount() {
        setInterval(() => {
            this.setState({
                data: Math.round(Math.random() * 9 + 45),
                dataAfter:Math.round(Math.random()*320+1442)
            })
        }, 10000)
    }
};

export default headerLe;