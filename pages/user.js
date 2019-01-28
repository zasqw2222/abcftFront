import React, { Component } from 'react'
import { withRouter } from 'next/router'

@withRouter
class UserPage extends Component {
  render() {
    const { router } = this.props
    return (
      <div>user {router.query.id}</div>
    )
  }
}

export default UserPage