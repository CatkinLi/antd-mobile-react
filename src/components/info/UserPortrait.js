import React from 'react';
import { connect } from 'dva';
import styles from './UserPortrait.css';

class UserPortrait extends React.Component{
  render() {
    return(
      <div className={styles.portrait_body}>
        <div className={styles.portrait_title}>
          <div style={{ fontSize: 20, fontWeight: 500, marginLeft: 10 }}>
            新老用户分布
          </div>
          <div style={{ marginLeft: 40, color: '#888888'}}>
            <select>
              <option value="1" >索票用户</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(UserPortrait);
