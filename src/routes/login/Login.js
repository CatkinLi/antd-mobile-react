import React from 'react';
import { connect } from 'dva';
import { Button, WhiteSpace, Icon, WingBlank, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import styles from './Login.css';

class Login extends React.Component {

  handleSubmit = () => {
    const { form, dispatch } =this.props;
    console.log(this.props);
    console.log(dispatch);
    console.log(form.getFieldsValue());
    form.validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'loginModel/login',
          payload: values,
        });
      }
    });
    console.log(11);
  };

  render() {
    const { getFieldProps } =this.props.form;
    return(
      <div className={styles.login_normal}>
        <div className={styles.login_back}>
          <div className={styles.login_title}>
            <span>登录</span>
          </div>
          <div className={styles.login_logo}>
          </div>
          <div className={styles.login_title}>
            <span>请使用CRM后台账号登录</span>
          </div>
          <WhiteSpace size="xl" />
          <WingBlank>
            <InputItem
              {...getFieldProps('userName')}
              placeholder="请输入用户名"
            >
              <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
            </InputItem>
          </WingBlank>
          <WhiteSpace size="sm" />
          <WingBlank>
            <InputItem
              {...getFieldProps('password')}
              placeholder="请输入密码"
              type="password"
            >
              <div style={{ backgroundImage: 'url(https://img.hxjbcdn.com/0322e160-ce37-4b15-b4b9-91f65ca6709b.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
            </InputItem>
          </WingBlank>
          <WhiteSpace size="xl" />
          <WingBlank>
            <Button onClick={this.handleSubmit}>登录</Button>
          </WingBlank>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { loginModel } = state;
  return {
    loginModel
  };
}
const LoginWrapper = createForm()(Login);
export default connect(mapStateToProps)(LoginWrapper);
