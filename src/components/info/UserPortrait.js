import React from 'react';
import { connect } from 'dva';
import { WhiteSpace, Picker, List } from 'antd-mobile';
import { Chart, Axis, Geom, Tooltip, Legend, Coord, Guide } from 'bizcharts';

import { DataSet } from '@antv/data-set';
import styles from './UserPortrait.css';

const { Html } = Guide;

const circularCols = {
  percent: {
    formatter: val => (`${val * 100}%`),
  },
};

const testdata =[
  {newUserCount: 1, index: "venueUserCount", oldUserCount: 158},
  {newUserCount: 1, index: "takeTicketCount", oldUserCount: 158},
  {newUserCount: 1, index: "getTicketUserCount", oldUserCount: 155},
  {newUserCount: 0, index: "deliverCount", oldUserCount: 1},
  {newUserCount: 0, index: "presentUserCount", oldUserCount: 8},
  {newUserCount: 0, index: "orderUserCount", oldUserCount: 8},
  {newUserCount: 0, index: "orderCount", oldUserCount: 13},
  {newUserCount: 0, index: "natureCount", oldUserCount: 2},
];

const regionData = [
  {address: "江宁区", count: 1},
  {address: "黄石港区", count: 1},
  {address: "其他", count: 3},
  {address: "闸北区", count: 116},
  {address: "崇明区", count: 254},
  {address: "金山区", count: 458},
  {address: "奉贤区", count: 868},
  {address: "青浦区", count: 980},
  {address: "长宁区", count: 1456},
  {address: "松江区", count: 1665},
  {address: "虹口区", count: 1715},
  {address: "黄浦区", count: 1807},
  {address: "嘉定区", count: 1844},
  {address: "静安区", count: 2212},
  {address: "普陀区", count: 2252},
  {address: "杨浦区", count: 2535},
  {address: "徐汇区", count: 2642},
  {address: "宝山区", count: 2828},
  {address: "闵行区", count: 3768},
  {address: "浦东新区", count: 10591}
];

const userChartData = [
  { item: '新用户', count: 30 },
  { item: '老用户', count: 80 },
];
const srcTypeList = [
  { value: 'venueUserCount', label: '展会用户' },
  { value: 'getTicketUserCount', label: '索票用户' },
  { value: 'newUserCount', label: '新用户' },
  { value: 'oldUserCount', label: '老用户' },
];
const ds = new DataSet({
  state: {
    chartData: [],
    leftFold: ['索票用户'],
    rightFold: [],
  },
});

const dv = ds.createView().source(regionData);
dv.source(regionData).transform({
  type: 'sort',
  callback(a, b) {
    return b.count - a.count > 0;
  },
});
const du = ds.createView().source(userChartData);
du.transform({
  type: 'percent',
  field: 'count',
  dimension: 'item',
  as: 'percent',
});

const CustomChildren = props => (
  <div
    onClick={props.onClick}
  >
    {props.extra} ▾
  </div>
);




class UserPortrait extends React.Component{

  state = {
    srcType: ['venueUserCount'],
  };

  onChangeSrcType = (srcType) => {
    console.log(srcType);
    this.setState({
      srcType,
    });
  };

  render() {
    const userHtml = `<div style="color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;">展会用户</div>`;
    const srcUserHtml = `<div style="color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;">展会用户</div>`;
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
            <Chart
              data={du}
              height={260}
              padding={[30, 50, 50]}
              scale={circularCols}
              forceFit
            >
              <Coord type="theta" radius={0.8} innerRadius={0.7} />
              <Axis name="percent" />
              <Legend position="bottom" />
              <Tooltip
                showTitle={false}
                itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
              />
              <Guide>
                <Html
                  position={['50%', '50%']}
                  html={userHtml}
                  alignX="middle"
                  alignY="middle"
                />
              </Guide>
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

        <WhiteSpace size="lg" />
        <div className={styles.portrait_content}>
          <div className={styles.portrait_title}>
            <div className={styles.portrait_title_left}>
              用户渠道
            </div>
            <div style={{ marginLeft: 40, width: '50%', color: '#888888'}}>
              <div className={ styles.portrait_circle }>
                <Picker
                  data={srcTypeList}
                  value={this.state.srcType}
                  cols={1}
                  onChange={this.onChangeSrcType}
                >
                  <CustomChildren></CustomChildren>
                </Picker>
              </div>
            </div>
          </div>
          <div className={styles.portrait_chart}>
            <Chart
              data={du}
              height={260}
              padding={[30, 50, 50]}
              scale={circularCols}
              forceFit
            >
              <Coord type="theta" radius={0.8} innerRadius={0.7} />
              <Axis name="percent" />
              <Legend position="bottom" />
              <Tooltip
                showTitle={false}
                itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
              />
              <Guide>
                <Html
                  position={['50%', '50%']}
                  html={srcUserHtml}
                  alignX="middle"
                  alignY="middle"
                />
              </Guide>
              <Geom
                type="intervalStack"
                position="percent"
                color="item"
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
          <div className={styles.portrait_chart1}>
            <Chart
              height={400}
              data={dv}
              padding={[0, 30, 20, 60]}
              forceFit
            >
              <Coord transpose />
              <Axis
                name="address"
                label={{
                  offset: 12,
                }}
              />
              <Axis name="count" grid={null} />
              <Geom
                type="interval"
                size={10}
                position="address*count"
                style={{ fill: 'l(0) 0:#13d694 0.5:#ffd601 1:#f77c06' }}
                tooltip={['address*count', (address, count) => {
                  return {
                    name: `地址: ${address}`,
                    value: `用户数: ${count}`,
                  };
                }]}
              />
            </Chart>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(UserPortrait);


