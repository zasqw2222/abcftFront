/**
 * @description 异步请求核心
 * @author dhhuang1
 * @date 2018/5/8 下午2:33:41
 */

import axios from 'axios'

import api from '../config'

//可以拿到 不同环境 需要在
// webpack.config不同配置文件中设置
const env = process.env.NODE_ENV

//可以 确定前缀地址
// 在这个框架里面可以配置 packjson 里面的 proxy 来确定代理
// 正式开发的时候 去掉 baseURL
// const baseURL = 'http://rap2api.taobao.org/app/mock/12201/'

export default function ask(name, opt = {}) {

    //取传进来的用户信息
    let {
        headers,
        data,
        params,
        responseType
    } = opt
    /**
     * 获取接口信息
     * 如果后期涉及到权限
     * 可以在接口信息里面
     * 设定 并取到
     */
    let {
        method,
        url
    } = api[name]

    let instance = axios.create({
        // baseURL,
        // `withCredentials` 表示跨域请求时是否需要使用凭证
        withCredentials: false
    })

    // 响应中间处理层
    instance.interceptors.response.use(function (response) {
        // 请求成功后 处理在此
        return response.data
    }, function (error) {

        // 请求失败 错误在此

        
        return Promise.reject(error)
    });

    let promise = instance.request({
        responseType,
        url,
        method,
        headers,
        params,
        data
    })

    return promise
}

