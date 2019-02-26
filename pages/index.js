import React, { Component } from 'react'
import { List, Tag, Spin, Icon } from 'antd'
import { withRouter } from 'next/router'
import Head from 'next/head'
import styled from 'styled-components'
import { getGroupTopics } from '../services/douban'
import { groups } from '../constants'
import Header from '../components/Header'

const CheckableTag = Tag.CheckableTag
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />

const Container = styled.div`
  width: 960px;
  margin: 40px auto;
  padding-top: 30px;
`

const ListItemTitle = styled.div`
  flex: 1;
  a {
    color: #000;
    text-decoration: none;
    &:visited {
      color: gray;
    }
  }
`

const ListItemContent = styled.div`
  font-size: .8rem;
  flex: 1;
  color: #999;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  margin-top: .2rem;
`

const ListItem = ({ item, index }) => {
  return <List.Item>
    <div style={{ width: '900px' }}>
      <ListItemTitle>
        <a href={item.alt} target="_blank" rel="noopener noreferrer">{item.title}</a>
      </ListItemTitle>
      <ListItemContent>
        {item.content}
      </ListItemContent>
    </div>
  </List.Item>
}

@withRouter
class IndexPage extends Component {

  constructor () {
    super()
    this.state = {
      spinning: false
    }
  }

  static async getInitialProps ({ query }) {
    const group = query.group || groups[0].id
    const { data } = await getGroupTopics(group)
    return {
      data,
      groupId: group
    }
  }

  handleCheckableTagChange = async (value, id) => {
    const { router } = this.props
    await this.setState({
      spinning: true
    })
    await router.push({
      pathname: '/',
      query: {
        group: id
      }
    })
    this.setState({
      spinning: false
    })
  }

  render () {
    const { data, groupId } = this.props

    const ListHeader = () => {
      return groups.map(g => (
        <CheckableTag
          key={g.id}
          checked={groupId === g.id}
          color="#2b68d7"
          onChange={(value) => this.handleCheckableTagChange(value, g.id)}
        >
          {g.name}
        </CheckableTag>
      ))
    }

    return (
      <Container>
        <Head>
          <title>{groups.find(g => g.id === groupId).name} | 租房信息</title>
        </Head>

        <Header />

        <Spin indicator={antIcon} tip="加载中..." spinning={this.state.spinning}>
          <List
            header={<ListHeader groupId={groupId} />}
            style={{ background: '#fff', margin: '0 auto' }}
            bordered
            dataSource={data.topics}
            renderItem={(item, index) => <ListItem item={item} index={index} />}
          />
        </Spin>
    
      </Container>
    )
  }
}

export default IndexPage