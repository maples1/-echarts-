import React, { Component } from 'react';
import styles from './index.module.less';
class headerRi extends Component {
    state = {
        data: 18976,
    };
    render() {
        let { data } = this.state;
        return <div>
            <div className={styles.box}>
                <div className={styles.left}>
                    <div className={styles.num}>{data}</div>
                    <div className={styles.sum}>客流量统计(人数)</div>
                </div>
                <div className={styles.icon}></div>
            </div>
        </div>
    };
    componentDidMount() {
        setInterval(() => {
            this.setState({
                data: Math.round(Math.random() * 3794 + 17079)
            })
        }, 10000)
    }
};
export default headerRi;