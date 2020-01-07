import React from 'react';
import { connect } from 'dva';
import { Button, WhiteSpace, Icon, WingBlank, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import styles from './Cost.css';

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
          <span>上海8.9-8.11(已开展)</span>
        </div>
      </div>
    )
  }
}

export default connect()(Cost);
