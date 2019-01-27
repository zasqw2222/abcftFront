import { Row, Col, Collapse } from 'antd'
import Head from 'next/head'
const Panel = Collapse.Panel

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

function callback(key) {
  console.log(key);
}

export default () => (
  <div>
    <Head>
      <title>SSR in Next.js</title>
    </Head>
    <Row>
      <Collapse onChange={callback}>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </Row>
  </div>
)