import React, { Component } from 'react';
import { Redirect } from 'dva/router';
import { connect } from 'dva';

@connect((state) => {
  return{
    isLogin: state.login.isLogin
  }
})
class B extends Component {

  state = { redirect: false }

  render () {
    const { isLogin } = this.props;

    if (this.state.redirect) {
      return <Redirect push to='/a' />
    }

    return (
      <div>
        <h1>我是B</h1>
        <p><button onClick={() => { this.setState({ redirect: true }) }}>跳转到A</button></p>
        <p>现在的登陆状态是：{isLogin ? '已登录' : '未登陆'}</p>
      </div>
    )
  }
}

export default B;
