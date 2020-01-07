import React from 'react';
import { connect } from 'dva';
import { Grid, WhiteSpace, List, WingBlank, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import styles from './StationProgress.css';

const data = [
  {
    title: '订单总进度',
    value: '80.67%',
  },
  {
    title: '索票总进度',
    value: '80.36%',
  },
  {
    title: '有效总进度',
    value: '80%',
  },
  {
    title: '到场总进度',
    value: '80.66%',
  },
];
const Item = List.Item;
const Brief = Item.Brief;

class StationProgress extends React.Component{
    render(){
      return(
        <div>
          <h2 className={ styles.progress_h2}>
            2019华夏家博秋季展
          </h2>
          <div className={ styles.progress_title }>
            <div className={ styles.progress_time }>
              <span>分站展会进程</span><span style={{ marginLeft: 80 }}>2019年8月9日 15:56:24</span>
            </div>
            <div className={ styles.progress_count}>
              <Grid
                data={data}
                columnNum={2}
                itemStyle={{ height: 99 }}
                renderItem={item => (
                  <div style={{ padding: '12.5px' }}>
                    <div style={{ fontSize: '14px', marginTop: '12px' }}>
                      <span style={{ color: '#888', fontSize: '14px' }}>{item.title}</span>
                      <br/>
                      <span style={{ fontSize: '20px', lineHeight: '40px' }}>{item.value}</span>
                    </div>
                  </div>
                )}
              />
            </div>
            <WhiteSpace size="sm"/>
            <div style={{ margin: 10 }}>
              <div>
                <div>
                  上海 8.9-8.11<span style={{ marginLeft: 20, width: 60, backgroundColor: '#92c152'}}> 已开展</span>
                  <span style={{ float: 'right' }}>></span>
                </div>
                <div>
                  索票
                </div>
              </div>
              {/*<List>
                <Item
                  multipleLine
                  onClick={() => {}}
                  platform="android"
                >

                </Item>
                <Item
                  multipleLine
                  onClick={() => {}}
                  platform="android"
                >
                  <div>
                    <div>
                      上海 8.9-8.11<span style={{ marginLeft: 20, width: 60, backgroundColor: '#92c152'}}> 已开展</span>
                      <span style={{ float: 'right' }}>></span>
                    </div>
                    <div>
                      索票
                    </div>
                  </div>
                </Item>
              </List>*/}
            </div>
          </div>
        </div>
      )
    }
}

function mapStateToProps(state) {
  const { StationProgressModel } = state;
  return {
    StationProgressModel
  };
}

export default connect()(StationProgress);
