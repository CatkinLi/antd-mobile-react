import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { ListView } from 'antd-mobile';
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
  {
    id: 4,
    name: '2019 华夏家博春季展',
    total: `200万`,
  },
  {
    id: 5,
    name: '2019 华夏家博春季展',
    total: `200万`,
  },
  {
    id: 6,
    name: '2019 华夏家博春季展',
    total: `200万`,
  },
  {
    id: 7,
    name: '2019 华夏家博春季展',
    total: `200万`,
  },
];
const NUM_ROWS = 8;
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
      isLoading: NUM_ROWS > 7
    });
  }
  onEndReached = (event) => {
    this.setState({ isLoading: false });
  };
  handleData = (id) => {
    console.log(id);
    this.props.dispatch(routerRedux.push('progress',{ id: id }));
  };
  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 15,
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
        <div key={rowID} style={{ background: '#F5F5F9', padding: '0 15px' }} onClick={ () => this.handleData(obj.id)}>
          <div
            style={{
              background: 'white',
              padding: '0px 8px',
              lineHeight: '56px',
              fontSize: 18,
              borderBottom: '0px solid #F6F6F6',
            }}
          >{obj.name}
          </div>
          <div style={{ display: 'inline', background: 'white', padding: '5px 0' }}>
            <div style={{ lineHeight: 1, padding: '0px 8px', background: 'white' }}>
              <div style={{ paddingBottom: '8px',  fontWeight: 'bold' }}>
                <span style={{ fontSize: '16px', color: '#d81e06', }}>{obj.total}</span>
                <span style={{ color: '#888', }}> 展会用户{obj.id}</span>
              </div>
            </div>
            <div style={{ marginTop: -54, marginRight: 15, float: 'right' }}>
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
          <span>项目列表</span><span style={{ float: 'right', marginLeft: 80 }}>2019年8月9日 15:56:24</span>
        </div>
        <ListView
          ref={el => this.lv = el}
          dataSource={this.state.dataSource}
          initialListSize={7}
          renderHeader={null}
          renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
            {this.state.isLoading ? 'Loading...' : '已经到底了'}
          </div>)}
          renderRow={row}
          renderSeparator={separator}
          className="am-list"
          pageSize={1}
          useBodyScroll
          onScroll={() => { console.log('scroll'); }}
          scrollRenderAheadDistance={500}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={1000}
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
