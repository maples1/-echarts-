import React, { Component } from 'react';
import './Watch.less';
import HeaderLeft from '../components/headerLeft';
import HeaderLe from '../components/headerLe';
import HeaderRight from '../components/headerRight';
import HeaderRi from '../components/headerRi';
import MainLeftTop from '../components/mainLeftTop';
import MainLeft from '../components/mainLeft';
import MainLeftBot from '../components/mainLeftBot';
import MainRightTop from '../components/mainRightTop';
import MainRight from '../components/mainRight';
import MainRightBot from '../components/mainRightBot';
import MainBottom from '../components/mainBottom';
import National from '../components/national';
class Watch extends Component {
    render() {
        return <div className="box">
            <header className="header-box">
                <div className="header">智能冷柜分布统计平台</div>
                <HeaderLeft />
                <HeaderLe />
                <HeaderRi />
                <HeaderRight />
            </header >
            <main className="main-box" >
                <National />
                <MainLeftTop />
                <MainLeft />
                <MainLeftBot />
                <MainRightTop />
                <MainRight />
                <MainRightBot />
                <MainBottom />
            </main >
        </div >
    };
};
export default Watch;