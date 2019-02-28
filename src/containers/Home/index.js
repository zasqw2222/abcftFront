import React, { Component } from 'react'
import { List, Tag, Spin } from 'antd'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import qs from 'query-string'

import groups from './groups'
import { getGroupTopics } from '../../services/douban'

const CheckableTag = Tag.CheckableTag

const ListContainer = styled.div`
  width: 960px;
  margin: 0 auto;
  padding: 20px;
  .title-link {
    color: #000;
    text-decoration: none;
  }
  .ant-tag-checkable-checked {
    background-color: #072;
  }

  .ant-tag-checkable {
    &:active {
      background-color: #072;
    }
    &:not(.ant-tag-checkable-checked):hover {
      color: #072
    }
  }

  
`

@withRouter
class Home extends Component {

  state = {
    spinning: true,
    groupId: 'shanghaizufang',
    topics: []
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

    const ListHeader = () => {
      return groups.map(g => (
        <CheckableTag
          key={g.id}
          checked={this.state.groupId === g.id}
          color="#072"
          onChange={(value) => this.handleCheckableTagChange(value, g.id)}
        >
          {g.name}
        </CheckableTag>
      ))
    }

    return (
      <ListContainer>
        <Spin spinning={this.state.spinning}>
          <List
            style={{ background: '#fff' }}
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