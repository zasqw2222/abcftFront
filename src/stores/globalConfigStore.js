import { observable, action } from 'mobx'

class GlobalConfigStore {
  @observable theme = window.localStorage.getItem('theme') || 'light'
  @observable locale = window.localStorage.getItem('i18nextLng') || 'zh'

  @action changeTheme = theme => {
    this.theme = theme
  }

  @action changeLocale = (locale) => {
    this.locale = locale
  }
}

export default new GlobalConfigStore()