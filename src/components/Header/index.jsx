import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d9d9d9;
  padding: 10px;
  .header-content {
    width: 960px;
    margin: 0 auto;
    padding: 0 20px;
    .header-brand {
      font-size: 20px;
      font-weight: bold;
      color: #072
    }
  }
`


class Header extends Component {
  render () {
    return <HeaderContainer>
      <div className="header-content">
        <span className="header-brand">
          豆瓣租房
        </span>
      </div>
    </HeaderContainer>
  }
}

export default Header