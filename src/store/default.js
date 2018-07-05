import { observable, action, runInAction } from 'mobx'
import ask from '../lib/ask'
import moment from 'moment'
class DefaultStore {
    constructor(rootStore) {

        // 这个地方 不需要的时候 可以不用 继承
        // 自己rooStroe 
        // 一般情况写都

        this.rootStore = rootStore
    }

    @observable toList = ['1', '2']
    @observable abc = '123'
    @observable time = moment().format('YYYY-MM-DD')
    @observable mailList = []
    @observable state = "pending"

    @action
    addList = (item) => {
        this.toList.push(item)
    }
    

    @action
    getEmailList = async (name, data = {}) => {
        this.state = "pending"
        try {
            const value = await ask(name, { ...data })
            runInAction(() => {
                this.state = 'done'
                this.mailList = value.data.items
            })
        } catch (error) {
            runInAction(() => {
                this.state = "error"
            })
        }
    }
}


export default DefaultStore