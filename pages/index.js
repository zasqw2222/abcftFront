import React, { Component } from 'react'
import { List, Tag } from 'antd'
import { withRouter } from 'next/router'
import Head from 'next/head'
import styled from 'styled-components'
import { getGroupTopics } from '../services/douban'
import { groups } from '../constants'

const CheckableTag = Tag.CheckableTag

const Container = styled.div`
  width: 960px;
  margin: 40px auto
`



const ListItem = ({ item, index }) => {
  return <List.Item>{index + 1}. {item.title}</List.Item>
}

@withRouter
class IndexPage extends Component {

  static async getInitialProps ({ req }) {
    let group 
    console.log(req.query)
    if (req.query.group) {
      group = group
    } else {
      group = groups[0].id
    }

    const { data } = await getGroupTopics(group)
    return {
      data,
      groupId: group 
    }
  }

  handleCheckableTagChange = (value, id) => {
    const { router } = this.props
    router.push(`?group=${id}`)
  }

  render () {
    const { data, groupId } = this.props

    const ListHeader = () => {
      return groups.map(g => (
        <CheckableTag
          key={g.id}
          checked={groupId === g.id}
          onChange={(value) => this.handleCheckableTagChange(value, g.id)}
        >
          {g.name}
        </CheckableTag>
      ))
    }

    return (
      <Container>
        <Head>
          <title>豆瓣租房</title>
        </Head>
        <List
          header={<ListHeader groupId={groupId} />}
          style={{ background: '#fff', margin: '0 auto' }}
          bordered
          dataSource={data.topics}
          renderItem={(item, index) => <ListItem item={item} index={index} />}
        />
    
      </Container>
    )
  }
}

export default IndexPage