import React from 'react';
import { connect } from 'dva';
import { DatePicker, List } from 'antd-mobile';
import { Chart, Geom, Axis, Tooltip, Label, Legend, Coord } from 'bizcharts';
import nike from '../../assets/nike.png';
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
  amount: {
    alias: '完成量',
  },
  rate: {
    formatter: val => (`${(val * 100).toFixed(1)}%`),
    alias: '完成率',
  },
  session: {
    formatter: val => `${val}届`,
  },
};

class OnSession extends React.Component{
  state = {
    date: now,
    displayMultiple: 'none',
    selectTap: 'present',
    selectIds: [],
  };

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
  };

  handleMultiple = (id) => {
    console.log(id);
    const { selectIds } = this.state;
    if (selectIds.includes(id)) {
      this.setState({
        selectIds: selectIds.filter(ids => ids !== id),
      });
    } else {
      selectIds.push(id);
      this.setState({
        selectIds,
      })
    }
  };

  clickCancel = () => {
    this.setState({
      displayMultiple: 'none',
    })
  };

  clickConfirm = () => {
    const { selectIds } = this.state;
    console.log(selectIds);
  };


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
    ];

    const stayTimeLayeringData = [
      {'10-20' : 45, '0-10': 161, '20-30': 59, '>30' : 686, stayDate: '总体'},
      {'10-20' : 18, '0-10': 63, '20-30': 26, '>30' : 276, stayDate: '11月08日'},
      {'10-20' : 24, '0-10': 88, '20-30': 25, '>30' : 382, stayDate: '11月09日'},
      {'10-20' : 3, '0-10': 10, '20-30': 8, '>30' : 28, stayDate: '11月10日'}
    ];

    const userStayTimeList = [
      {advTime: 120.977, userType: "老用户", stayDate: "11月08日"},
      {advTime: 61.7429, userType: "新用户", stayDate: "11月08日"},
      {advTime: 69.1875, userType: "老用户", stayDate: "11月09日"},
      {advTime: 83.0795, userType: "新用户", stayDate: "11月09日"},
      {advTime: 20.6757, userType: "老用户", stayDate: "11月10日"},
      {advTime: 39.25, userType: "新用户", stayDate: "11月10日"},
    ];

    const presentData = [
      {session: 30, amount: 500, rate: 0.15 },
      {session: 32, amount: 800, rate: 0.24 },
      {session: 33, amount: 600, rate: 0.25 },
      {session: 38, amount: 300, rate: 0.28 },
      {session: 39, amount: 400, rate: 0.30 }
    ];

    const presentUserData = [
      {date: '08月09日', count: 300 },
      {date: '08月10日', count: 400 },
      {date: '08月11日', count: 500 },
    ];

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
    const layeringData = ds.createView().source(stayTimeLayeringData);
    layeringData.transform({
      type: 'fold',
      fields: ['0-10', '10-20', '20-30', '>30'],
      key: '时间',
      value: '停留人数',
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
    const listData = [
      {beginDate: "01.14", cityName: "上海", endDate: "01.14", session: 13, id: 222, cityId: 1},
      {beginDate: "01.09", cityName: "上海", endDate: "01.11", session: 16, id: 223, cityId: 1},
      {beginDate: "01.30", cityName: "上海", endDate: "01.31", session: 17, id: 213, cityId: 1},
      {beginDate: "01.09", cityName: "上海", endDate: "01.11", session: 17, id: 2043, cityId: 1},
      {beginDate: "01.13", cityName: "上海", endDate: "01.15", session: 13, id: 2056, cityId: 2},
      {beginDate: "01.01", cityName: "上海", endDate: "01.03", session: 15, id: 2010, cityId: 2},
      {beginDate: "04.11", cityName: "上海", endDate: "04.13", session: 117, id: 2058, cityId: 2},
      {beginDate: "01.04", cityName: "上海", endDate: "01.06", session: 18, id: 2054, cityId: 2},
    ];
    return(
      <div className={styles.on_session_body}>
        <div className={styles.on_session_pupop} style={{ display: this.state.displayMultiple }}>
          <ul className={styles.list}>
            <p className={styles.title}>请选择对比展届</p>
            <ul className={styles.listNum}>
              {
                listData.map((item, index) => {
                  return (
                    <li key={index} onClick={() => this.handleMultiple(item.id)}>
                      {
                        this.state.selectIds.includes(item.id) ? (
                          <p style={{ color: 'red' }}>{`第${item.session}届 ( ${item.beginDate} - ${item.endDate} )`}</p>
                        ) : (
                          <p>{`第${item.session}届 ( ${item.beginDate} - ${item.endDate} )`}</p>
                        )
                      }
                      {
                        this.state.selectIds.includes(item.id) ? (<img src={nike} />) : null
                      }
                    </li>
                  )
                })
              }
            </ul>
            <div className={styles.btns}>
              <p onClick={this.clickCancel} className={styles.cancel}>取消</p>
              <p onClick={this.clickConfirm} className={styles.next}>确定</p>
            </div>
          </ul>
        </div>
        <div className={styles.on_session_content1}>
          <div className={`${styles.on_session_button} ${ selectTap === 'present' ? styles.on_session_button_select : '' }`} onClick={() => this.selectValid('present')}>
            到场
          </div>
          <div className={`${styles.on_session_button} ${ selectTap === 'order' ? styles.on_session_button_select : '' }`} onClick={() => this.selectValid('order')}>
            订单
          </div>
          <div className={`${styles.on_session_button} ${ selectTap === 'stay' ? styles.on_session_button_select : '' }`} onClick={() => this.selectValid('stay')}>
            停留
          </div>
        </div>
        {
          selectTap && selectTap === 'stay' ? (
            <div className={styles.on_session_content2}>
              <div style={{ height: 360, marginTop: 20 }}>
                <div className={styles.on_session_title_left}>
                  停留时间分层
                </div>
                <div>
                  <Chart
                    data={layeringData}
                    height={320}
                    padding={[30, 20, 80, 50]}
                    forceFit
                  >
                    <Legend />
                    <Axis name="时间" />
                    <Axis
                      name="停留人数"
                    />
                    <Tooltip
                      crosshairs={{
                        type: 'y',
                      }}
                    />
                    <Geom
                      type="interval"
                      position="时间*停留人数"
                      color={['stayDate',['#ff0000', '#00ff00', '#EAD8FF', '#ccffb1']]}
                      adjust={[{ type: 'dodge', marginRatio: 0.1 }]}
                    />
                  </Chart>
                </div>
              </div>
              <div style={{ height: 20, backgroundColor: '#f2f3f7', }}>

              </div>
              <div style={{ height: 360 }}>
                <div className={styles.on_session_title_left}>
                  新老用户停留时间对比
                </div>
                <div>
                  <Chart
                    height={320}
                    padding={[30, 30, 80, 80]}
                    data={userStayTimeList}
                    scale={{ stayDate: { range: [0, 1] } }}
                    forceFit
                  >
                    <Legend />
                    <Axis name="stayDate" />
                    <Axis
                      name="advTime"
                      label={{
                        formatter: val => `${val}分钟`,
                      }}
                    />
                    <Tooltip
                      crosshairs={{
                        type: 'y',
                      }}
                    />
                    <Geom type="line" position="stayDate*advTime" size={2} color="userType" />
                    <Geom
                      type="point"
                      position="stayDate*advTime"
                      size={4}
                      shape="circle"
                      color="userType"
                      style={{
                        stroke: '#fff',
                        lineWidth: 1,
                      }}
                    />
                  </Chart>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.on_session_content2}>
              <div style={{ height: 400, marginTop: 20 }}>
                <div className={styles.on_session_title}>
                  <div className={styles.on_session_title_left}>
                    {
                      selectTap === 'order' ? '订单量' : '到场人流'
                    }
                  </div>
                </div>
                <div style={{ display: 'flex', marginTop: 20, marginBottom: 20, textAlign: 'center' }}>
                  <div className={styles.on_session_content2_time}>今年</div>
                  <div className={styles.on_session_content2_time}>所有</div>
                  <div style={{ marginLeft: 0, width: '40%', color: '#888888'}}>
                    <div onClick={() => this.setState({ displayMultiple: 'block' })} className={ styles.on_session_circle }>
                      +展届对比
                    </div>
                  </div>
                </div>
                <div>
                  <Chart
                    data={presentData}
                    height={300}
                    padding={[20, 50, 100]}
                    scale={circularCols}
                    forceFit
                  >
                    <Axis name="rate" />
                    <Legend />
                    <Tooltip />
                    <Geom type="line" position="session*amount" color="#3182bd" />
                    <Geom
                      type="line"
                      position="session*rate"
                      color="#f7629e"
                    >
                    </Geom>
                    <Geom
                      type="point"
                      position="session*rate"
                      color="#f7629e"
                      size={3}
                      shape="circle"
                    />
                    <Geom
                    type="point"
                    position="session*amount"
                    color="#3182bd"
                    size={3}
                    shape="circle"
                  />
                  </Chart>
                </div>
              </div>
              <div style={{ height: 20, backgroundColor: '#f2f3f7', }}>

              </div>
              <div style={{ height: 360 }}>
                <div className={styles.on_session_title}>
                  <div className={styles.on_session_title_left}>
                    {
                      selectTap === 'order' ? '每日订单' : '每日到场人流'
                    }
                  </div>
                </div>
                <div>
                  <Chart
                    height={300}
                    data={presentUserData}
                    padding={[20, 140, 40, 60]}
                  >
                    <Axis name="date" />
                    <Axis name="count" />
                    <Tooltip
                      crosshairs={{
                        type: 'y',
                      }}
                    />
                    <Geom size={50} type="interval" position="date*count" />
                  </Chart>
                </div>
              </div>
              <div style={{ height: 20, backgroundColor: '#f2f3f7', }}>

              </div>
              <div style={{ height: 360 }}>
                <div className={styles.on_session_title}>
                  <div className={styles.on_session_title_left}>
                    {
                      selectTap === 'order' ? '来源渠道' : '来源渠道'
                    }
                  </div>
                </div>
                <div style={{ margin: 20 }}>
                  <div className={styles.on_session_table_tr}>
                    <div className={ styles.on_session_table_th }>排名</div>
                    <div className={ styles.on_session_table_td }>渠道</div>
                    <div className={ styles.on_session_table_th }>数量</div>
                    <div className={ styles.on_session_table_th }>占比</div>
                  </div>
                  <div className={styles.on_session_table_trd}>
                    <div className={ styles.on_session_table_th }>1</div>
                    <div className={ styles.on_session_table_td }>现场新增</div>
                    <div className={ styles.on_session_table_th }>2234</div>
                    <div className={ styles.on_session_table_th }>30%</div>
                  </div>
                  <div className={styles.on_session_table_trd}>
                    <div className={ styles.on_session_table_th }>1</div>
                    <div className={ styles.on_session_table_td }>现场新增</div>
                    <div className={ styles.on_session_table_th }>2234</div>
                    <div className={ styles.on_session_table_th }>30%</div>
                  </div>
                  <div className={styles.on_session_table_trd}>
                    <div className={ styles.on_session_table_th }>1</div>
                    <div className={ styles.on_session_table_td }>现场新增</div>
                    <div className={ styles.on_session_table_th }>2234</div>
                    <div className={ styles.on_session_table_th }>30%</div>
                  </div>
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


