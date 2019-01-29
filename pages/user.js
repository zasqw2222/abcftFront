import React, { Component } from 'react'
import { withRouter } from 'next/router'

@withRouter
class UserPage extends Component {
  static getInitialProps({ req }) {
    return {
      params: req.params
    }
  }
  render() {
    const { router, params } = this.props
    return (
      <div>user {params.id}</div>
    )
  }
}

export default UserPage