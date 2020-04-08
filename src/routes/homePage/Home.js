// eslint-disable-next-line
import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Button, WhiteSpace, Icon, WingBlank, InputItem, TabBar } from 'antd-mobile';
import { createForm } from 'rc-form';
import Cost from '../../components/cost/Cost';
import DataView from '../../components/info/DataView';
import styles from './Home.css';

const localStorage = window.localStorage;
class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.state.id);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: false,
    };
  }
  loginOut = () => {
    localStorage.clear();
    this.props.dispatch(routerRedux.push({ pathname: '/login' }));

  };

  render() {
    return(
      <div className={ styles.home_footer }>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#d81e06"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="基础数据"
            key="基础数据"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://img.hxjbcdn.com/8d3f585c-37b9-47d5-8bea-f9b2b112b34a.png) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://img.hxjbcdn.com/0aeaa1ba-d76a-469e-b133-2a09501b3c30.png) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            badge={''}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            <DataView/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://img.hxjbcdn.com/6bbbb61e-94e3-4f1e-9187-65d764ab58bf.png) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://img.hxjbcdn.com/e3c0fa39-63fa-4521-bd00-74312db315dd.png) center center /  21px 21px no-repeat' }}
              />
            }
            title="成本数据"
            key="成本数据"
            badge={''}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            <Cost/>
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://img.hxjbcdn.com/41b8cec9-d884-4ebe-8bee-9bdea1b52373.png' }}
            selectedIcon={{ uri: 'https://img.hxjbcdn.com/5929c78f-bfa9-434c-bb1a-258bdd02b6d7.png' }}
            title="我的账号"
            key="我的账号"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            <div>
              <h2 className={ styles.home_h2 }>
                个人账号
              </h2>
              <WhiteSpace size="xl"/>
              <table style={{ marginLeft: 20 }}>
                <tbody>
                <tr>
                  <td style={{ width: 100, fontSize: 16 }}>用户名</td>
                  <td>张三</td>
                </tr>
                <tr>
                  <td>
                    <WhiteSpace size="xl"/>
                  </td>
                </tr>
                <tr>
                  <td>所在城市</td>
                  <td>上海</td>
                </tr>
                <tr>
                  <td>
                    <WhiteSpace size="xl"/>
                  </td>
                </tr>
                <tr>
                  <td>部门</td>
                  <td>总公司</td>
                </tr>
                <tr>
                  <td>
                    <WhiteSpace size="xl"/>
                  </td>
                </tr>
                <tr>
                  <td>姓名</td>
                  <td>真实姓名</td>
                </tr>
                </tbody>
              </table>
              <WhiteSpace size="xl"/>
              <WhiteSpace size="xl"/>
              <div>
                <Button onClick={this.loginOut}>退出登录</Button>
              </div>
            </div>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { homeModel } = state;
  return {
    homeModel
  };
}

export default connect(mapStateToProps)(Home);
