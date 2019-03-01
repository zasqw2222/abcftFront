import React, { Component } from 'react'
import { List, Tag, Spin } from 'antd'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import qs from 'query-string'
import { inject, observer } from 'mobx-react'
import { withTranslation } from 'react-i18next';

import groups from './groups'
import { getGroupTopics } from '../../services/douban'

const CheckableTag = Tag.CheckableTag

const ListContainer = styled.div`
  width: 960px;
  margin: 0 auto;
  padding: 20px;
  transition: .1s;
  .title-link {
    color: ${props => props.theme === 'light' ? '#000' : '#b3b3b3'};;
    text-decoration: none;
  }
  .ant-tag-checkable-checked {
    background-color: ${props => props.theme === 'light' ? '#072' : '#9c9c9c'};
  }

  .ant-list-bordered {
    border: 1px solid ${props => props.theme === 'light' ? '#e8e8e8' : '#403f3f'};
    .ant-list-item, .ant-list-header {
      border-bottom: 1px solid ${props => props.theme === 'light' ? '#e8e8e8' : '#403f3f'}!important;
    }
  }

  .post-list {
    background-color: ${props => props.theme === 'light' ? '#fff' : '#1b1c23'};
    .ant-list-split .ant-list-header {
      border-bottom: 1px solid #403f3f
    }
  }

  .ant-tag {
    color: ${props => props.theme === 'light' ? 'rgba(0, 0, 0, 0.65)' : '#9c9c9c'};
  }

  .ant-tag-checkable-checked {
    color: #fff;
  }

  .ant-tag-checkable {
    &:active {
      background-color: ${props => props.theme === 'light' ? 'rgba(0, 0, 0, 0.65)' : '#9c9c9c'};
    }
    &:not(.ant-tag-checkable-checked):hover {
      color: ${props => props.theme === 'light' ? '#072' : '#9c9c9c'};
    }
  }
`

@withTranslation()
@withRouter
@inject('globalConfigStore')
@observer
class Home extends Component {

  constructor (props) {
    super()
    const query = qs.parse(props.location.search)
    const groupId = query.groupId || 'shanghaizufang'
    this.state = {
      spinning: true,
      groupId: groupId,
      topics: []
    }
  }

  async componentDidMount () {
    const query = qs.parse(this.props.location.search)
    const groupId = query.groupId || this.state.groupId
    const { data } = await getGroupTopics(groupId)
    this.setState({
      groupId,
      topics: data.topics,
      spinning: false
    })
  }

  handleCheckableTagChange = async (value, id) => {
    if (value) {
      await this.setState({ spinning: true })
      const { data } = await getGroupTopics(id)
      this.setState({
        groupId: id,
        topics: data.topics,
        spinning: false
      })
      this.props.history.push({
        pathname: '/',
        search: `?groupId=${id}`
      })
    }
  }

  render () {

    const { theme } = this.props.globalConfigStore
    const { t } = this.props

    const ListHeader = () => {
      return groups.map(g => (
        <CheckableTag
          key={g.id}
          checked={this.state.groupId === g.id}
          color="#072"
          onChange={(value) => this.handleCheckableTagChange(value, g.id)}
        >
          {t(g.name)}
        </CheckableTag>
      ))
    }

    return (
      <ListContainer theme={theme}>
        <Spin spinning={this.state.spinning}>
          <List
            className="post-list"
            header={<ListHeader />}
            bordered
            dataSource={this.state.topics}
            renderItem={item => (<List.Item>
              <a className="title-link" href={item.alt} target="_blank" rel="noopener noreferrer">{item.title}</a>
            </List.Item>)}
          />
        </Spin>
      </ListContainer>
    )
  }
}

export default Home