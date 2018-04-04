import React, { Component } from 'react';
import { Redirect } from 'dva/router';
import { connect } from 'dva';

@connect(({login, loading}) => {
  return{
    loading: loading.effects['login/getUser'],
    isLogin: login.isLogin
  }
})
class A extends Component {

  state = { redirect: false }

  // 路由跳转
  handleRedirect = () => {
    this.setState({ redirect: true })
  }

  // 同步登入
  signIn = () => {
    this.props.dispatch({
      type: 'login/upDateLoignState',
      payload: true
    })
  }

  // 模拟异步退出
  signOut = () => {
    this.props.dispatch({
      type: 'login/getUser',
      payload: false
    })
  }

  render () {
    const { isLogin, loading } = this.props;

    // 跳转拦截
    if (this.state.redirect) {
      return <Redirect push to='/b' />
    }

    return (
      <div>
        <h1>我是A</h1>
        <p>现在的登陆状态是：{isLogin ? '已登录' : '未登陆'}</p>
        <p style={{fontSize: 16, color: 'red'}}>{ loading ? '正在退出...' : '' }</p>
        <p>
          <button onClick={this.handleRedirect}>跳转到B</button>
          {
            !isLogin ? (
              <button onClick={this.signIn}>登入</button>
            ) : (
              <button onClick={this.signOut}>模拟异步退出</button>
            )
          }
        </p>
      </div>
    )
  }
}

export default A;
