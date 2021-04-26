import React, { useEffect, useRef,useState } from 'react';
import styles from './index.module.less';
function HeaderRight() {
    let num = useRef();
    let[n]=useState(90.21+'%');
    useEffect(() => {
        setInterval(() => {
            num.current.innerText = (Math.random() * 18.2 + 81.21).toFixed(2) + '%';
        }, 10000);
    });
    return <div>
        <div className={styles.box}>
            <div className={styles.left}>
                <div className={styles.num} ref={num}>{n}</div>
                <div className={styles.sum}>成交率</div>
            </div>
            <div className={styles.icon}></div>
        </div>
    </div>
};
export default HeaderRight;