/**
 * @description Home
 * @date 2018.01.15
 * @author dhhuang1
 */



/**
 * 这个例子 里面包括 inject 的两种写法
 * 注释的是第一种写法
 * 未注释是第二种写法
 * 
 * 函数的写法有几种 如果 不使用箭头函数 就要在 constructor 
 * .bind(this)
 * 
 */

// @inject((defaultStore) => {
//   console.log(defaultStore)
//   let stroe = defaultStore.defaultStore
//   return {
//     abc: stroe.abc,
//     arr: stroe.toList.map(item => { return item }),
//     addList: stroe.addList,
//   }
// })



import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import Loading from '../../components/Loading'
import { Button, Alert } from 'antd'

@withRouter
@inject('defaultStore')
@observer
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    onClickHandle = () => {
        let { defaultStore } = this.props
        defaultStore.addList(new Date() - 0)
    }
    askData = () => {
        let { defaultStore } = this.props
        defaultStore.getEmailList('ResapiSearchExactHint', {
            data: {
                keyword: '1',
                limit: 6,
                type: 'sort'
            }
        })
    }
    render() {
        let { defaultStore } = this.props
        return (
            <div className="abc-wechat-ProjectName">
                {defaultStore.time}
                {
                    defaultStore.toList.map((item, index) => {
                        return <Alert key={index} message={item} type="success" />
                    })
                }
                <Button onClick={this.onClickHandle} type="primary">更改</Button><br />

                <Button onClick={this.askData} type="primary">获取邮件列表</Button>
                {`状态 ${defaultStore.state}`}
                {
                    defaultStore.state === 'pending' ? <Loading /> : <ul>
                        {
                            defaultStore.mailList.map((item, index) => {
                                return <li key={index}>{item.email}</li>
                            })
                        }
                    </ul>
                }
                
            </div>
        )
    }
}
export default Home