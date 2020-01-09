import React from 'react';
import { connect } from 'dva';
import { WhiteSpace } from 'antd-mobile';
import styles from './UserPortrait.css';

class UserPortrait extends React.Component{
  render() {
    return(
      <div className={styles.portrait_body}>
        <div className={styles.portrait_content}>
          <div className={styles.portrait_title}>
            <div className={styles.portrait_title_left}>
              新老用户分布
            </div>
            <div style={{ marginLeft: 40, width: '50%', color: '#888888'}}>
              <div className={ styles.portrait_circle }>
                索票用户 ▾
              </div>
            </div>
          </div>
          <div className={styles.portrait_chart}>

          </div>
        </div>

        <WhiteSpace size="lg" />
        <div className={styles.portrait_content}>
          <div className={styles.portrait_title}>
            <div className={styles.portrait_title_left}>
              用户渠道
            </div>
            <div style={{ marginLeft: 40, width: '50%', color: '#888888'}}>
              <div className={ styles.portrait_circle }>
                展会用户 ▾
              </div>
            </div>
          </div>
          <div className={styles.portrait_chart}>

          </div>
        </div>
        <WhiteSpace size="lg" />
        <div className={styles.portrait_content}>
          <div className={styles.portrait_title}>
            <div className={styles.portrait_title_left}>
              地理区域分布
            </div>
            <div style={{ marginLeft: 40, width: '50%', color: '#888888'}}>
              <div className={ styles.portrait_circle }>
                寄快递用户 ▾
              </div>
            </div>
          </div>
          <div style={{ color: '#888888', lineHeight: '40px' }}>
            现场新增不含在内人数: 100
          </div>
          <div className={styles.portrait_chart}>

          </div>
        </div>
      </div>
    )
  }
}

export default connect()(UserPortrait);
