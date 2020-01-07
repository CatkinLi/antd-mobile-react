import React from 'react';
import { connect } from 'dva';
import { ListView, WhiteSpace, Icon, WingBlank, InputItem } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import styles from './Project.css';
const data = [
  {
    id: 1,
    name: '2019 华夏家博春季展',
    total: `200万`,
  },
  {
    id: 2,
    name: '2019 华夏家博春季展',
    total: `200万`,
  },
  {
    id: 3,
    name: '2019 华夏家博春季展',
    total: `200万`,
  },
];
const NUM_ROWS = 5;
let pageIndex = 0;


function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}

class Project extends React.Component{
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource,
      isLoading: true,
      hasMore: false,
    };
  }

  componentDidMount() {
    /*setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 10000);*/
    this.rData = genData();
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.rData),
      isLoading: false,
    });
  }
  onEndReached = (event) => {
    console.log(this.state.isLoading);
    console.log(this.state.hasMore);
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    /*setTimeout(() => {
      this.rData = { ...this.rData, ...genData(++pageIndex) };
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 10000);*/
  };
  handleData = (id) => {
    console.log(id);
  };
  render() {
    const { dataSource } = this.state;
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div key={rowID} style={{ padding: '0 15px' }} onClick={ () => this.handleData(obj.id)}>
          <div
            style={{
              lineHeight: '50px',
              fontSize: 18,
              borderBottom: '0px solid #F6F6F6',
            }}
          >{obj.name}</div>
          <div style={{ display: '-webkit-box', display: 'flex', padding: '5px 0' }}>
            <div style={{ lineHeight: 1 }}>
              <div style={{ marginBottom: '8px',  fontWeight: 'bold' }}>
                <span style={{ fontSize: '16px', color: '#d81e06', }}>{obj.total}</span>
                <span style={{ color: '#888', }}> 展会用户{obj.id}</span>
              </div>
            </div>
            <div style={{ marginTop: -30, marginLeft: 190 }}>
              <span style={{ fontSize: '30px', color: '#888' }}>></span>
            </div>
          </div>
        </div>
      );
    };
    return(
      <div>
        <h2 className={ styles.project_h2}>
          选择展会项目
        </h2>
        <div style={{ margin: 20 }}>
          <span>项目列表</span><span style={{ marginLeft: 80 }}>2019年8月9日 15:56:24</span>
        </div>
        <ListView
          ref={el => this.lv = el}
          dataSource={this.state.dataSource}
          renderHeader={null}
          renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
            {this.state.isLoading ? 'Loading...' : '已经到底了'}
          </div>)}
          renderRow={row}
          renderSeparator={separator}
          className="am-list"
          pageSize={4}
          useBodyScroll
          onScroll={() => { console.log('scroll'); }}
          scrollRenderAheadDistance={500}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={10}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { projectModel } = state;
  return {
    projectModel
  };
}

export default connect(mapStateToProps)(Project);