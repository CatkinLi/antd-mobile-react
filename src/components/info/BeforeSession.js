import React from 'react';
import { connect } from 'dva';
import { DatePicker } from 'antd-mobile';
import styles from './BeforeSession.css'

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
class BeforeSession extends React.Component{
  state = {
    date: now,
  }
  render(){
    return(
      <div className={styles.before_body}>
        <div className={styles.before_content1}>
          <div className={`${styles.before_button} ${styles.before_button_select}`}>
            索票
          </div>
          <div className={styles.before_button}>
            有效
          </div>
          <div className={styles.before_content1_bottom}>
            今日索票用户 (更新周期: 5min/次) :
            <span style={{ color: 'red' }}> 898</span>
          </div>
        </div>
        <div className={styles.before_content2}>
          <div style={{ padding: '20px 20px 20px 20px',}}>
            <div style={{ display: 'flex', textAlign: 'center' }}>
              <div style={{ lineHeight: '30px', fontSize: '15px' }}>时间范围 </div>
              <div className={styles.before_content2_time}>今天</div>
              <div className={styles.before_content2_time}>昨天</div>
              <div className={styles.before_content2_time}>近7天</div>
            </div>
            <div style={{ display: 'flex', margin: '20px 10px 10px 10px'}}>
              <div style={{ width: '90%', flexBasis: 'initial'}}>
                <DatePicker
                  mode="date"
                  title="Select Date"
                  extra="Optional"
                  value={this.state.date}
                  onChange={date => this.setState({ date })}
                >
                </DatePicker>
              </div>
              <div>至</div>
              <div>
                <input style={{ width: '97%', border:0, borderBottom: '1px solid #f2f3f7',}}>
                </input>
              </div>
            </div>
          </div>
          <div>
            趋势
          </div>
          <div>
            来源渠道
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(BeforeSession);

