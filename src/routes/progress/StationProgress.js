import React from 'react';
import { connect } from 'dva';
import { Grid, WhiteSpace, List } from 'antd-mobile';
import { Chart, Tooltip, Geom, Guide } from 'bizcharts';
import styles from './StationProgress.css';
import {routerRedux} from "dva/router";

const { Text } = Guide;
const data = [{
  gender: '索票',
  value: 20,
}, {
  gender: '有效',
  value: 50,
}, {
  gender: '到场',
  value: 70,
}, {
  gender: '订单',
  value: 91,
}];

const scale = {
  value: {
    min: 0,
    max: 100,
  },
};

const data1 = [
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
  constructor(props) {
    super(props);
    console.log(this.props.location.state.id);
  }
  cityData = (id) => {
    console.log(id);
    this.props.dispatch(routerRedux.push('/home',{ id: id }));
  };
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
                data={data1}
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
            <div style={{ margin: 10, height: 190, backgroundColor: '#fff' }}>
              <div style={{ padding: 10 }} onClick={() => this.cityData(1)}>
                <div>
                  <span style={{ fontSize: 16, fontWeight: 550 }}>上海 8.9-8.11</span>
                  <span className={styles.progress_on_time}> 已开展</span>
                  <span style={{ float: 'right' }}></span>
                </div>
                <div>
                  <Chart
                    height={100}
                    padding={{ left: 0, top: 30, right: 0, bottom: 0 }}
                    data={data}
                    scale={scale}
                    forceFit>
                    <Tooltip/>
                    <Geom
                      type="interval"
                      position="gender*value"
                      color={['gender', ['#FDBDCA', '#F79FB1', '#F58095', '#F2637A']]}
                      shape="liquid-fill-gauge"
                      style={{
                        lineWidth: 4,
                        opacity: 0.75,
                      }}
                    />
                    <Guide>
                      {
                        data.map(
                          row => (<Text
                            content={`${row.value.toFixed(0)}%`}
                            top
                            position={{
                              gender: row.gender,
                              value: 50,
                            }}
                            style={{
                              opacity: 0.75,
                              fontSize: window.innerWidth / 20,
                              textAlign: 'center',
                            }}
                          />))
                      }
                    </Guide>
                  </Chart>
                </div>
                <div style={{ height: 30, textAlign: 'center', lineHeight: '30px' }}>
                  <div className={styles.progress_cell_text}>索票</div>
                  <div className={styles.progress_cell_text}>有效</div>
                  <div className={styles.progress_cell_text}>到场</div>
                  <div className={styles.progress_cell_text}>订单</div>
                </div>
                <div style={{ height: 30, textAlign: 'center' }}>
                  <div className={styles.progress_cell_num}>
                    <div>
                      6000/5000
                    </div>
                  </div>
                  <div className={styles.progress_cell_num}>
                    <div>
                      6000/5000
                    </div>
                  </div>
                  <div className={styles.progress_cell_num}>
                    <div>
                      6000/5000
                    </div>
                  </div>
                  <div className={styles.progress_cell_num}>
                    <div>
                      6000/5000
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <WhiteSpace size="sm"/>
            <div style={{ margin: 10, height: 190, backgroundColor: '#fff' }}>
              <div style={{ padding: 10 }} onClick={() => this.cityData(2)}>
                <div>
                  <span style={{ fontSize: 16, fontWeight: 550 }}>重庆 8.9-8.11</span>
                  <span className={styles.progress_on_time}> 已开展</span>
                  <span style={{ float: 'right' }}></span>
                </div>
                <div>
                  <Chart
                    height={100}
                    padding={{ left: 0, top: 30, right: 0, bottom: 0 }}
                    data={data}
                    scale={scale}
                    forceFit>
                    <Tooltip/>
                    <Geom
                      type="interval"
                      position="gender*value"
                      color={['gender', ['#FDBDCA', '#F79FB1', '#F58095', '#F2637A']]}
                      shape="liquid-fill-gauge"
                      style={{
                        lineWidth: 4,
                        opacity: 0.75,
                      }}
                    />
                    <Guide>
                      {
                        data.map(
                          row => (<Text
                            content={`${row.value}%`}
                            top
                            position={{
                              gender: row.gender,
                              value: 50,
                            }}
                            style={{
                              opacity: 0.75,
                              fontSize: window.innerWidth / 20,
                              textAlign: 'center',
                            }}
                          />))
                      }
                    </Guide>
                  </Chart>
                </div>
                <div style={{ height: 30, textAlign: 'center', lineHeight: '30px' }}>
                  <div className={styles.progress_cell_text}>索票</div>
                  <div className={styles.progress_cell_text}>有效</div>
                  <div className={styles.progress_cell_text}>到场</div>
                  <div className={styles.progress_cell_text}>订单</div>
                </div>
                <div style={{ height: 30, textAlign: 'center' }}>
                  <div className={styles.progress_cell_num}>
                    <div>
                      6000/5000
                    </div>
                  </div>
                  <div className={styles.progress_cell_num}>
                    <div>
                      6000/5000
                    </div>
                  </div>
                  <div className={styles.progress_cell_num}>
                    <div>
                      6000/5000
                    </div>
                  </div>
                  <div className={styles.progress_cell_num}>
                    <div>
                      6000/5000
                    </div>
                  </div>
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
            <WhiteSpace size="sm"/>
            <div style={{ margin: 10, height: 190, backgroundColor: '#fff' }}>
              <div style={{ padding: 10 }} onClick={() => this.cityData(3)}>
                <div>
                  <span style={{ fontSize: 16, fontWeight: 550 }}>苏州 8.9-8.11</span>
                  <span className={styles.progress_on_time}> 已开展</span>
                  <span style={{ float: 'right' }}></span>
                </div>
                <div>
                  <Chart
                    height={100}
                    padding={{ left: 0, top: 30, right: 0, bottom: 0 }}
                    data={data}
                    scale={scale}
                    forceFit>
                    <Tooltip/>
                    <Geom
                      type="interval"
                      position="gender*value"
                      color={['gender', ['#FDBDCA', '#F79FB1', '#F58095', '#F2637A']]}
                      shape="liquid-fill-gauge"
                      style={{
                        lineWidth: 4,
                        opacity: 0.75,
                      }}
                    />
                    <Guide>
                      {
                        data.map(
                          row => (<Text
                            content={`${row.value}%`}
                            top
                            position={{
                              gender: row.gender,
                              value: 50,
                            }}
                            style={{
                              opacity: 0.75,
                              fontSize: window.innerWidth / 20,
                              textAlign: 'center',
                            }}
                          />))
                      }
                    </Guide>
                  </Chart>
                </div>
                <div style={{ height: 30, textAlign: 'center', lineHeight: '30px' }}>
                  <div className={styles.progress_cell_text}>索票</div>
                  <div className={styles.progress_cell_text}>有效</div>
                  <div className={styles.progress_cell_text}>到场</div>
                  <div className={styles.progress_cell_text}>订单</div>
                </div>
                <div style={{ height: 30, textAlign: 'center' }}>
                  <div className={styles.progress_cell_num}>
                    <div>
                      6000/5000
                    </div>
                  </div>
                  <div className={styles.progress_cell_num}>
                    <div>
                      6000/5000
                    </div>
                  </div>
                  <div className={styles.progress_cell_num}>
                    <div>
                      6000/5000
                    </div>
                  </div>
                  <div className={styles.progress_cell_num}>
                    <div>
                      6000/5000
                    </div>
                  </div>
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
            <WhiteSpace size="sm"/>
            <div style={{ margin: 10, height: 190, backgroundColor: '#fff' }}>
              <div style={{ padding: 10 }}>
                <div>
                  <span style={{ fontSize: 16, fontWeight: 550 }}>上海 8.9-8.11</span>
                  <span className={styles.progress_on_time}> 已开展</span>
                  <span style={{ float: 'right' }}></span>
                </div>
                <div>
                  <Chart
                    height={100}
                    padding={{ left: 0, top: 30, right: 0, bottom: 0 }}
                    data={data}
                    scale={scale}
                    forceFit>
                    <Tooltip/>
                    <Geom
                      type="interval"
                      position="gender*value"
                      color={['gender', ['#FDBDCA', '#F79FB1', '#F58095', '#F2637A']]}
                      shape="liquid-fill-gauge"
                      style={{
                        lineWidth: 4,
                        opacity: 0.75,
                      }}
                    />
                    <Guide>
                      {
                        data.map(
                          row => (<Text
                            content={`${row.value}%`}
                            top
                            position={{
                              gender: row.gender,
                              value: 50,
                            }}
                            style={{
                              opacity: 0.75,
                              fontSize: window.innerWidth / 20,
                              textAlign: 'center',
                            }}
                          />))
                      }
                    </Guide>
                  </Chart>
                </div>
                <div style={{ height: 30, textAlign: 'center', lineHeight: '30px' }}>
                  <div className={styles.progress_cell_text}>索票</div>
                  <div className={styles.progress_cell_text}>有效</div>
                  <div className={styles.progress_cell_text}>到场</div>
                  <div className={styles.progress_cell_text}>订单</div>
                </div>
                <div style={{ height: 30, textAlign: 'center' }}>
                  <div className={styles.progress_cell_num}>
                    <div>
                      6000/5000
                    </div>
                  </div>
                  <div className={styles.progress_cell_num}>
                    <div>
                      6000/5000
                    </div>
                  </div>
                  <div className={styles.progress_cell_num}>
                    <div>
                      6000/5000
                    </div>
                  </div>
                  <div className={styles.progress_cell_num}>
                    <div>
                      6000/5000
                    </div>
                  </div>
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
