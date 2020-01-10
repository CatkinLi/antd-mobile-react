import React from 'react';
import { connect } from 'dva';
import { WhiteSpace } from 'antd-mobile';
import styles from './BeforeSession.css'


class BeforeSession extends React.Component{
  render(){
    return(
      <div className={styles.before_body}>
        <div style={{ alignItems: 'center', display: 'flex' }}>
          <div className={styles.before_button}>
            索票
          </div>
          <div className={styles.before_button}>
            有效
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(BeforeSession);

