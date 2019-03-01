import React, { Component } from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import { Switch, Button } from 'antd'
import { withTranslation } from 'react-i18next'
const a = 111

const HeaderContainer = styled.div`
  width: 100%;
  background: ${props => props.theme === 'light' ? '#fff' : '#1e1f28'};
  border-bottom: 1px solid ${props => props.theme === 'light' ? '#d9d9d9' : '#444'};
  padding: 10px;
  transition: .2s;
  .header-content {
    width: 960px;
    margin: 0 auto;
    padding: 0 20px;
    .header-brand {
      font-size: 20px;
      font-weight: bold;
      color: ${props => props.theme === 'light' ? '#072' : '#a6a6a6'}
    }
  }
  .right-menus {
    float: right;
    .locale-button {
      margin-left: 15px;
      background-color: ${props => props.theme === 'light' ? '#fff' : '#2b2b2b'};
      color: ${props => props.theme === 'light' ? 'rgba(0,0,0,0.65)' : '#fff'};
    }
  }
`

@withTranslation()
@inject('globalConfigStore')
@observer
class Header extends Component {

  handleThemeChange = (checked) => {
    const { changeTheme } = this.props.globalConfigStore
    let theme = ''
    if (checked) {
      theme = 'dark'
    } else {
      theme = 'light'
    }

    changeTheme(theme)
    window.localStorage.setItem('theme', theme)
  }

  handleLocaleChange = () => {
    const { locale, changeLocale } = this.props.globalConfigStore
    const { i18n } = this.props
    if (locale === 'zh') {
      i18n.changeLanguage('en')
      changeLocale('en')
    } else {
      i18n.changeLanguage('zh')
      changeLocale('zh')
    }
  }

  render () {
    const { theme, locale } = this.props.globalConfigStore
    const { t } = this.props
    const lang = locale === 'zh' ? 'English' : '中文'

    return <HeaderContainer theme={theme}>
      <div className="header-content">
        <span className="header-brand">
          {t('title')}
        </span>

        <div className="right-menus">
          <Switch 
            checkedChildren="黑" 
            unCheckedChildren="白" 
            size="small" 
            checked={theme === 'dark'} 
            onChange={this.handleThemeChange}
          />

          <Button size="small" className="locale-button" onClick={this.handleLocaleChange} >{lang}</Button>
        </div>
      </div>
    </HeaderContainer>
  }
}

export default Header