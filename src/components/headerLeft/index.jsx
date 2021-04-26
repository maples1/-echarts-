import React, { useEffect, useState,useRef } from 'react';
import styles from './index.module.less';
function HeaderLeft() {
    let num = useRef();
    let[ n]=useState(21153);
    useEffect(() => {
        setInterval(() => {
            num.current.innerText = Math.round(Math.random() * 47002 + 211513)
        }, 10000);
    });
    return <div>
        <div className={styles.box}>
            <div className={styles.icon}></div>
            <div className={styles.right}>
                <span className={styles.num} ref={num} >{n}</span>
                <div className={styles.sum}>柜机数量(当前总量)</div>
            </div>
        </div>
    </div>
};
export default HeaderLeft;