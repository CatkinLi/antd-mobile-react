import React from 'react';
import { connect } from 'dva';
import styles from './SessionData.css';
class SessionData extends React.Component{
  render() {
    return(
      <div className={styles.session_body}>
        <div className={styles.session_title}>
            <div style={{ fontSize: 20, fontWeight: 500, marginLeft: 10 }}>
              关键指标
            </div>
            <div style={{ marginLeft: 40, color: '#888888'}}>
              2019年08月08日 19:00更新
            </div>
        </div>
        <div style={{ height: 100 }}>
          <div className={ styles.session_cell_title }>
            <div className={styles.session_cell_text}>展会用户</div>
            <div className={styles.session_cell_text}>索票人数</div>
            <div className={styles.session_cell_text}>现场取票人数</div>
          </div>
          <div className={ styles.cell_title_num }>
            <div className={styles.session_cell_num}>96325</div>
            <div className={styles.session_cell_num}>80778</div>
            <div className={styles.session_cell_num}>53887</div>
          </div>
          <div style={{ height: 30, lineHeight: '20px',marginLeft: 20 }}>
            <div className={styles.session_cell_text}>
              <span>
                比上届<span style={{ color: '#d81e06'}}>+0.2%</span>
              </span>
            </div>
            <div className={styles.session_cell_text}>
              <span>
                比上届<span style={{ color: '#d81e06'}}>+0.2%</span>
              </span>
            </div>
            <div className={styles.session_cell_text}>
              <span>
                比上届<span style={{ color: '#4d882a'}}>-0.2%</span>
              </span>
            </div>
          </div>
        </div>
        <div style={{ height: 100 }}>
          <div className={ styles.session_cell_title }>
            <div className={styles.session_cell_text}>快递人数</div>
            <div className={styles.session_cell_text}>到场人数</div>
            <div className={styles.session_cell_text}>下单人数</div>
          </div>
          <div className={ styles.cell_title_num }>
            <div className={styles.session_cell_num}>96325</div>
            <div className={styles.session_cell_num}>80778</div>
            <div className={styles.session_cell_num}>53887</div>
          </div>
          <div style={{ height: 30, lineHeight: '20px',marginLeft: 20 }}>
            <div className={styles.session_cell_text}>
              <span>
                比上届<span style={{ color: '#d81e06'}}>+0.2%</span>
              </span>
            </div>
            <div className={styles.session_cell_text}>
              <span>
                比上届<span style={{ color: '#d81e06'}}>+0.2%</span>
              </span>
            </div>
            <div className={styles.session_cell_text}>
              <span>
                比上届<span style={{ color: '#4d882a'}}>-0.2%</span>
              </span>
            </div>
          </div>
        </div>
        <div style={{ height: 100 }}>
          <div className={ styles.session_cell_title }>
            <div className={styles.session_cell_text}>订单数</div>
            <div className={styles.session_cell_text}>客单量</div>
            <div className={styles.session_cell_text}>客单价(元)</div>
          </div>
          <div className={ styles.cell_title_num }>
            <div className={styles.session_cell_num}>96325</div>
            <div className={styles.session_cell_num}>80778</div>
            <div className={styles.session_cell_num}>53887</div>
          </div>
          <div style={{ height: 30, lineHeight: '20px',marginLeft: 20 }}>
            <div className={styles.session_cell_text}>
              <span>
                比上届<span style={{ color: '#d81e06'}}>+0.2%</span>
              </span>
            </div>
            <div className={styles.session_cell_text}>
              <span>
                比上届<span style={{ color: '#d81e06'}}>+0.2%</span>
              </span>
            </div>
            <div className={styles.session_cell_text}>
              <span>
                比上届<span style={{ color: '#4d882a'}}>-0.2%</span>
              </span>
            </div>
          </div>
        </div>
        <div style={{ height: 100 }}>
          <div className={ styles.session_cell_title }>
            <div className={styles.session_cell_text}>停留时间(分)</div>
          </div>
          <div className={ styles.cell_title_num }>
            <div className={styles.session_cell_num}>96325</div>
          </div>
          <div style={{ height: 30, lineHeight: '20px',marginLeft: 20 }}>
            <div className={styles.session_cell_text}>
              <span>
                比上届<span style={{ color: '#d81e06'}}>+0.2%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(SessionData);
