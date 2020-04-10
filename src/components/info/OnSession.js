import React from 'react';
import { connect } from 'dva';
import { DatePicker, List } from 'antd-mobile';
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts';
import { DataSet } from '@antv/data-set';
import styles from './OnSession.css'

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const CustomChildren = ({ extra, onClick, children }) => (
  <div
    onClick={onClick}
    style={{ backgroundColor: 'fff', height: '45px', lineHeight: '55px', }}
  >
    {children}
    <span style={{ color: '#888' }}>
    {extra}
    </span>
  </div>
);

const circularCols = {
  percent: {
    formatter: val => (`${val * 100}%`),
  },
};

class OnSession extends React.Component{
  state = {
    date: now,
    selectTap: 'order',
  }

  selectValid = (type) => {
    if (type === 'order') {
      this.setState({
        selectTap: 'order',
      })
    } else if (type === 'present') {
      this.setState({
        selectTap: 'present',
      })
    } else {
      this.setState({
        selectTap: 'stay',
      })
    }

  }

  render(){
    const { selectTap } = this.state;

    const visitStatusData = [
      {item: '寄快递', count: 30},
      {item: '不需要', count: 50},
      {item: '空号', count: 40},
      {item: '关机', count: 3},
      {item: 'C类客户', count: 78},
      {item: 'D类客户', count: 37},
      {item: 'A类客户', count: 28},
      {item: 'B类客户', count: 163},
      {item: 'E类客户', count: 30},
    ]

    const srcData = [
      {src: "新浪", count: 1},
      {src: "朋友圈", count: 1},
      {src: "今日头条", count: 3},
      {src: "微信小程序", count: 116},
      {src: "百度搜索", count: 254},
      {src: "短信", count: 458},
      {src: "官网", count: 868},
      {src: "自媒体", count: 980},
      {src: "电话", count: 1456},
      {src: "互动", count: 1665},
      {src: "抖音", count: 1715},
      {src: "什么搜索", count: 5466},
      {src: "快手", count: 1807},
      {src: "西瓜视频", count: 10591}
    ];
    const ds = new DataSet({

    });

    const dv = ds.createView().source(srcData);
    dv.source(srcData).transform({
      type: 'sort',
      callback(a, b) {
        return b.count - a.count > 0;
      },
    });
    const dvs = ds.createView().source(visitStatusData);
    dvs.transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent'
    });
    const data = [
      {
        count: 10,
        time: '00',
      },
      {
        count: 20,
        time: '01',
      },
      {
        count: 30,
        time: '02',
      },
      {
        count: 40,
        time: '03',
      },
      {
        count: 50,
        time: '04',
      },
      {
        count: 30,
        time: '05',
      },
      {
        count: 60,
        time: '06',
      },
      {
        count: 30,
        time: '09',
      },
      {
        count: 80,
        time: '16',
      },
      {
        count: 120,
        time: '18',
      },
      {
        count: 70,
        time: '23',
      },
    ];
    const cols = {
      time: {
        type: 'linear',
        tickInterval: 2,
      },
      count: {
        alias: '人数'
      }
    };
    return(
      <div className={styles.on_session_body}>
        <div className={styles.on_session_content1}>
          <div className={`${styles.on_session_button} ${ selectTap === 'order' ? styles.on_session_button_select : '' }`} onClick={() => this.selectValid('order')}>
            到场
          </div>
          <div className={`${styles.on_session_button} ${ selectTap === 'present' ? styles.on_session_button_select : '' }`} onClick={() => this.selectValid('present')}>
            订单
          </div>
          <div className={`${styles.on_session_button} ${ selectTap === 'stay' ? styles.on_session_button_select : '' }`} onClick={() => this.selectValid('stay')}>
            停留
          </div>
        </div>
        {
          selectTap && selectTap === 'ticket' ? (
            <div className={styles.on_session_content2}>
              <div style={{ padding: '20px 20px 20px 20px',}}>
                <div style={{ display: 'flex', textAlign: 'center' }}>
                  <div style={{ lineHeight: '30px', fontSize: '15px' }}>时间范围 </div>
                  <div className={styles.on_session_content2_time}>今天</div>
                  <div className={styles.on_session_content2_time}>昨天</div>
                  <div className={styles.on_session_content2_time}>近7天</div>
                </div>
                <div style={{ display: 'flex', margin: '20px 10px 10px 10px'}}>
                  <div style={{ width: '46%', textAlign: 'center', borderBottom: '1px solid'}}>
                    <DatePicker
                      mode="date"
                      title="选择开始时间"
                      extra="开始时间"
                      value={this.state.date}
                      onChange={date => this.setState({ date })}
                    >
                      <CustomChildren></CustomChildren>
                    </DatePicker>
                  </div>
                  <div style={{ lineHeight: '50px' }}>至</div>
                  <div style={{ width: '46%', textAlign: 'center', borderBottom: '1px solid'}}>
                    <DatePicker
                      mode="date"
                      title="选择结束时间"
                      extra="结束时间"
                      value={this.state.date}
                      onChange={date => this.setState({ date })}
                    >
                      <CustomChildren></CustomChildren>
                    </DatePicker>
                  </div>
                </div>
              </div>
              <div style={{ height: 400, marginTop: 20 }}>
                <div className={styles.on_session_title_left}>
                  趋势
                </div>
                <div>
                  <Chart  height={330} padding={[ 20, 50, 30, 50 ]} width={window.innerWidth} data={data} scale={cols}>
                    <Axis name="time" />
                    <Axis name="count" />
                    <Legend />
                    <Tooltip/>
                    <Geom type="areaStack" position="time*count" color={'l(90) 0:#1890ff 0.5:#73c2f3 1:#ffffff'} />
                    <Geom type="lineStack" position="time*count" tooltip={false}  size={1} />
                  </Chart>
                </div>
              </div>
              <div style={{ height: 400, marginTop: 20 }}>
                <div className={styles.on_session_title_left}>
                  来源渠道
                </div>
                <div>
                  <Chart
                    height={360}
                    data={dv}
                    padding={[20, 30, 20, 90]}
                    forceFit
                  >
                    <Coord transpose />
                    <Axis
                      name="src"
                      label={{
                        offset: 12,
                      }}
                    />
                    <Axis name="count" grid={null} />
                    <Geom
                      type="interval"
                      size={10}
                      position="src*count"
                      style={{ fill: 'l(0) 0:#d81e06 0.5:#ffd601 1:#f77c06' }}

                    />
                  </Chart>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.on_session_content2}>
              <div style={{ height: 360, marginTop: 20 }}>
                <div className={styles.on_session_title}>
                  <div className={styles.on_session_title_left}>
                    首访状态分布
                  </div>
                  <div style={{ marginLeft: 0, width: '40%', color: '#888888'}}>
                    <div className={ styles.on_session_circle }>
                      索票用户 ▾
                    </div>
                  </div>
                </div>
                <div>
                  <Chart
                    data={dvs}
                    height={300}
                    padding={[10, 30, 80]}
                    scale={circularCols}
                    forceFit
                  >
                    <Coord type="theta" radius={0.8} innerRadius={0.7} />
                    <Axis name="percent" />
                    <Legend position="bottom" itemWidth={80} />
                    <Tooltip
                      showTitle={false}
                      itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
                    />
                    <Geom
                      type="intervalStack"
                      position="percent"
                      color={['item', ['#f7629e', '#ffce3d']]}
                      tooltip={['item*percent', (item, percent) => {
                        return {
                          name: item,
                          value: `${(percent * 100).toFixed(1)}%`,
                        };
                      }]}
                      style={{ lineWidth: 1, stroke: '#fff' }}
                    >
                      {/*<Label
                  content="percent"
                  formatter={(val, item) => {
                    return ` ${item.point.item} : ${(item.point.count).toFixed(0)} \n\r${(item.point.percent * 100).toFixed(1)}% `;
                  }}
                />*/}
                    </Geom>
                  </Chart>
                </div>
              </div>
              <div style={{ height: 20, backgroundColor: '#f2f3f7', }}>

              </div>
              <div style={{ height: 360, paddingTop: 20, display: 'none' }}>
                <div className={styles.on_session_title}>
                  <div className={styles.on_session_title_left}>
                    二访状态分布
                  </div>
                  <div style={{ marginLeft: 0, width: '40%', color: '#888888'}}>
                    <div className={ styles.on_session_circle }>
                      索票用户 ▾
                    </div>
                  </div>
                </div>
                <div>
                  <Chart
                    data={dvs}
                    height={300}
                    padding={[10, 30, 80]}
                    scale={circularCols}
                    forceFit
                  >
                    <Coord type="theta" radius={0.8} innerRadius={0.7} />
                    <Axis name="percent" />
                    <Legend position="bottom" itemWidth={80} />
                    <Tooltip
                      showTitle={false}
                      itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
                    />
                    <Geom
                      type="intervalStack"
                      position="percent"
                      color={['item', ['#f7629e', '#ffce3d']]}
                      tooltip={['item*percent', (item, percent) => {
                        return {
                          name: item,
                          value: `${(percent * 100).toFixed(1)}%`,
                        };
                      }]}
                      style={{ lineWidth: 1, stroke: '#fff' }}
                    >
                      {/*<Label
                  content="percent"
                  formatter={(val, item) => {
                    return ` ${item.point.item} : ${(item.point.count).toFixed(0)} \n\r${(item.point.percent * 100).toFixed(1)}% `;
                  }}
                />*/}
                    </Geom>
                  </Chart>
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default connect()(OnSession);


