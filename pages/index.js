import React, { Component } from 'react'
import { Row, Icon, Collapse } from 'antd'
import { withRouter } from 'next/router'
import Head from 'next/head'
const Panel = Collapse.Panel

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
}

@withRouter
class IndexPage extends Component {
  render () {
    return (
      <div style={{
        width: 1200,
        margin: '10px auto'
      }}>
        <Head>
          <title>SSR in Next.js</title>
        </Head>
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
        >
          <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    )
  }
}

export default IndexPage