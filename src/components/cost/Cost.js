import React from 'react';
import { connect } from 'dva';
import { Grid, WhiteSpace, Icon, WingBlank, InputItem } from 'antd-mobile';

import { createForm } from 'rc-form';
import styles from './Cost.css';

const data1 = [
  {
    title: '渠道消费(元)',
    value: 3256000.3,
  },
  {
    title: '实际现金花费(元)',
    value: 3253132.5,
  },
  {
    title: '用户获取成本(元)',
    value: 58.88,
  },
  {
    title: '有效成本(元)',
    value: 98.33,
  },
  {
    title: '到场成本(元)',
    value: 129.99,
  },
  {
    title: '下单成本(元)',
    value: 365.33,
  },
];
class Cost extends React.Component{
  render(){
    return(
      <div>
        <h2 className={ styles.cost_h2}>
          2019华夏家博秋季展
        </h2>
        <div className={ styles.title }>
          <div className={ styles.circle }>
            上海
          </div>
          <span style={{ marginLeft: 20, color: '#f7f7f7' }}>上海8.9-8.11(已开展)</span>
        </div>
        <div className={ styles.cost_count}>
          <Grid
            data={data1}
            columnNum={2}
            itemStyle={{ height: 120 }}
            renderItem={item => (
              <div style={{ padding: '12.5px' }}>
                <div style={{ textAlign: 'left', fontSize: '14px', marginTop: '12px', marginLeft: '20px' }}>
                  <span style={{ color: '#888', fontSize: '14px' }}>{item.title}</span>
                  <br/>
                  <span style={{ fontSize: '20px', lineHeight: '40px' }}>{item.value}</span>
                </div>
              </div>
            )}
          />
          <div className={styles.cost_tooltip}>
            详细报表请在CRM后台查看
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Cost);
