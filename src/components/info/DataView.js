import React from 'react';
import { connect } from 'dva';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import { routerRedux } from 'dva/router';
import SessionData from './SessionData';
import OnSession from './OnSession';
import UserPortrait from './UserPortrait';
import BeforeSession from './BeforeSession';

import styles from './DataView.css';

const tabs = [
  { title: '数据概览' },
  { title: '展前分析' },
  { title: '展中分析' },
  { title: '用户画像' },
];

class DataView extends React.Component{
  state = {
    selectIds: [222,223],
  };

  render(){
    return(
      <div>
        <h2 className={ styles.data_view_h2}>
          2019华夏家博秋季展
        </h2>
        <div className={ styles.title }>
          <div className={ styles.circle }>
            上海
          </div>
          <span style={{ marginLeft: 20, color: '#f7f7f7' }}>上海 8.9 - 8.11 (已开展)</span>
        </div>
        <div>
          <Tabs tabs={tabs}
                tabBarUnderlineStyle={{ border: '1px #d81e06 solid' }}
                tabBarActiveTextColor="red"
                initialPage={0}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
          >
            <SessionData />
            <BeforeSession />
            <OnSession />
            <UserPortrait />
          </Tabs>
        </div>
      </div>
    )
  }
}

export default connect()(DataView);
