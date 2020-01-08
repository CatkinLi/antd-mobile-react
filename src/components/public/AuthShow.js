import React from 'react';
import { connect } from 'dva';

class AuthShow extends React.Component {
  render() {
    const { have, noHave, tagKey = '', sys, location } = this.props;
    const { functionRoleList } = sys;
    const urlList = functionRoleList.filter(item => location.pathname.indexOf(item.routeUrl) > -1);
    const haveList = urlList.filter(e => e.functionKey === tagKey);
    const isShow = haveList.length > 0;
    const result = isShow ? (<span>{have}</span>) : noHave ? (<span>{noHave}</span>) : '';
    return (<span>{result}</span>);
  }
}

AuthShow.propTypes = {};
function mapStateToProps(state) {
  const { sys } = state;
  return {
    sys,
  };
}
export default connect(mapStateToProps)(AuthShow);

