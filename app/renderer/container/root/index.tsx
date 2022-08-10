import React from "react";
import './index.less'

function Root() {
    return (
        <div styleName={'root'}>
            <div styleName={'container'}>
                <img/>
                <div styleName={"title"}>resumeMook</div>
                <div styleName={"tips"}>一个模板简历制作平台，让你的简历更加出众</div>
                <div styleName={"action"}>
                    {['介绍', '简历', '源码'].map((text, index) => {
                        return (
                            <div key={index} styleName="item">{text}</div>
                        )
                    })}
                </div>
                <div styleName={'copyright'}>
                    <div styleName={'footer'}>
                        <p styleName={'copyright'}>
                            Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By Pumpkin
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Root