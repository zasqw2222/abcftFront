/**
 * @description Loading 组件
 * @date 2018.01.10
 * @author abc
 */

import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
const Loading = (props) => {
    return <div className="wechat-loading-wrapper">
        <div className="line-scale">
            <div className="layui-layer-content">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <p>{props.title}</p>
    </div>
}
// 默认props值
Loading.defaultProps = {
    title: '正在加载...'
}
// props 类型
Loading.propTypes = {
    title: PropTypes.string
}
export default Loading

