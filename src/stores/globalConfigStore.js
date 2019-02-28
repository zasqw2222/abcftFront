import { observable, action } from 'mobx'

class GlobalConfigStore {
  @observable theme = 'light'
  @observable locale = 'zh_CN'

  @action changeTheme (theme) {
    this.theme = theme
  }

  @action changeLocale (locale) {
    this.locale = locale
  }
}

export default new GlobalConfigStore()