import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css'; 
import { Button, NavBar, Icon, Steps, WingBlank, WhiteSpace, Picker, Radio, List, Drawer } from 'antd-mobile';
import { district } from 'antd-mobile-demo-data';
const Step = Steps.Step;
const Item = List.Item;
const Brief = Item.Brief;
const RadioItem = Radio.RadioItem;

const steps = [
  {
    title: '实名认证',
    content: '这是实名认证内容',
  },
  {
    title: '选择服务',
    content: '',
  },
  {
    title: '入驻成功',
    content: '这是入驻成功内容',
  },
];


const service = [
  {
    label: '家具师傅',
    value: '家具师傅',
  },
  {
    label: 'IT数码',
    value: 'IT数码',
  },{
    label: '家政清洁',
    value: '家政清洁',
  },
  
];

const aa = [
  [
    {
      label: '类型一',
      value: '类型一',
    },
    {
      label: '类型二',
      value: '类型二',
    },
    {
      label: '类型三',
      value: '类型三',
    },
  ],
  [
    {
      label: '安装',
      value: '安装',
    },
    {
      label: '维修',
      value: '维修',
    },
    {
      label: '送货',
      value: '送货',
    },
  ],
  [
    {
      label: '',
      value: '',
    },
    {
      label: '安装',
      value: '安装',
    },
    {
      label: '维修',
      value: '维修',
    },
    {
      label: '送货',
      value: '送货',
    },
  ],
  [
    {
      label: '',
      value: '',
    },
    {
      label: '安装',
      value: '安装',
    },
    {
      label: '维修',
      value: '维修',
    },
    {
      label: '送货',
      value: '送货',
    },
  ],
];





class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      current: 1,
      // sValue: ['品类一', '安装'],
      sValue: [],
      zIndex:-9999,
      open:false,
      value:0,
      value2:0,
      value3:0,
      label:"5元/公里",
      label2:"5元/层",
      label3:"接受",
      extra:undefined,
      show:"block"
    }
  }
  onChange = (data) => {
    this.setState({
      service: data,
    });
  };

  onChangeValue = (value,label) => {
    this.setState({
      value,
      label
    });
  };
  onChangeValue2 = (value,label) => {
    this.setState({
      value2:value,
      label2:label
    });
  };
  onChangeValue3 = (value,label) => {
    this.setState({
      value3:value,
      label3:label
    });
  };

  next = () => {
    console.log(this.state)
    let current = this.state.current + 1;
    this.setState({ current },() => {
      if(this.state.current !== 1){
        this.setState({
          show:"none"
        })
      }else{
        this.setState({
          show:"block"
        })
      }
    });
  }

  prev = () => {
    let current = this.state.current - 1;
    this.setState({ current },() => {
      if(this.state.current !== 1){
        this.setState({
          show:"none"
        })
      }else{
        this.setState({
          show:"block"
        })
      }
    });
  }
  render(){
    const { current, open, value, value2, value3, label, label2, label3, extra, zIndex, show } = this.state;
    const data = [
      { value: 0, label: '5元/公里' },
      { value: 1, label: '4元/公里' },
      { value: 2, label: '3元/公里' },
    ];
    const data2 = [
      { value: 0, label: '5元/层' },
      { value: 1, label: '4元/层' },
      { value: 2, label: '3元/层' },
    ];
    const data3 = [
      { value: 0, label: '接受' },
      { value: 1, label: '不接受' },
    ];
    return (
      <div>
        <header>
          <NavBar
            style = {{ background:"yellowgreen" }}
            mode="light"
            icon={<Icon type="left" style={{ color:"white" }} />}
            onLeftClick={() => console.log('onLeftClick')}
          >
            <p style={{ color:"white" }}>请完善服务信息</p>
          </NavBar>
        </header>
        <content style={{ marginBottom:100 }}>
          <WingBlank mode={20} className="stepsExample">
            <WhiteSpace />
            <Steps current={current} direction="horizontal">
              {
                steps.map(item => (
                  <Step key={item.title} title={item.title} />
                ))
              }
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
          </WingBlank>
          <WhiteSpace />
          <List style={{ flexBasis: "initial", display:`${show}` }}>
            {/* 服务 */}
            <Picker
              data={service}
              value={this.state.service}
              cols={1}
              onChange={this.onChange}
            >
              <List.Item arrow="horizontal">请选择擅长的服务<br /> （最多1个）</List.Item>
            </Picker>
            <Item
              arrow="horizontal"
              multipleLine
              onClick={() => {}}
              platform="android"
            >
              请选择擅长的品类 （最多3项）<Brief>保证金师傅最多可选5个，非保证金师傅<br/>最多可选3个</Brief>
            </Item>
            <Picker
              data={aa}
              title="选择擅长的品类"
              cascade={false}
              extra="请选择"
              value={this.state.sValue}
              onChange={v => this.setState({ sValue: v })}
              onOk={v => this.setState({ sValue: v })}
            >
              <List.Item arrow="horizontal"><p style={{ color:"#888" }}>品类一</p></List.Item>
            </Picker>
            <Picker
              data={aa}
              title="选择擅长的品类"
              cascade={false}
              extra="请选择"
              value={this.state.sValue2}
              onChange={v => this.setState({ sValue2: v })}
              onOk={v => this.setState({ sValue2: v })}
            >
              <List.Item arrow="horizontal"><p style={{ color:"#888" }}>品类二</p></List.Item>
            </Picker>
            <Picker
              data={aa}
              title="选择擅长的品类"
              cascade={false}
              extra="请选择"
              value={this.state.sValue3}
              onChange={v => this.setState({ sValue3: v })}
              onOk={v => this.setState({ sValue3: v })}
            >
              <List.Item arrow="horizontal"><p style={{ color:"#888" }}>品类三</p></List.Item>
            </Picker>
           
            {/* 服务区域 */}
            <Picker
              extra="请选择"
              data={district}
              value={this.state.pickerValue}
              onChange={v => this.setState({ pickerValue: v })}
              onOk={v => this.setState({ pickerValue: v })}
            >
              <List.Item arrow="horizontal">选择服务区域</List.Item>
              
            </Picker>
            <Drawer
              style={{ zIndex:`${zIndex}` }}
              position="bottom"
              open={open}
              docked={false}
              enableDragHandle
              contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
              sidebar={
                <div style={{
                  height:400,
                  background:"white"
                }}>
                  <div style={{boxSizing:"border-box",padding:10}}>
                    <span>基本服务承诺</span>
                    <div style={{ border:"1px solid #888", marginTop: 10}}>
                      <div style={{ borderBottom:"1px solid #888",background:"yellowgreen" }}>
                        <span style={{ display:"inline-block",padding:10,borderRight:"1px solid #888"}}>空调费用</span>
                        <span style={{ marginLeft: 10}}>配送50元/次，安装或维修30元/次</span>
                      </div>
                      <div style={{ borderBottom:"1px solid #888" }}>
                        <span style={{ display:"inline-block",padding:10,borderRight:"1px solid #888"}}>安装维修</span>
                        <span style={{ marginLeft: 10}}>1个月内免费检修</span>
                      </div>
                      <div style={{ borderBottom:"1px solid #888",background:"yellowgreen" }}>
                        <span style={{ display:"inline-block",padding:10,borderRight:"1px solid #888"}}>二次上门</span>
                        <span style={{ marginLeft: 10}}>提货+安装80元/次</span>
                      </div>
                      <div>
                        <span style={{ display:"inline-block",padding:10,borderRight:"1px solid #888"}}>免费核销</span>
                        <span style={{ marginLeft: 10}}>支持汪师傅核销</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span>附加服务承诺</span>
                  </div>
                  <div style={{marginTop: 10}}>
                    <span>远程费</span>
                    <span style={{marginLeft: 10}} >超远距离可适当收取</span>
                    <div>
                      {data.map(i => (
                        <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChangeValue(i.value,i.label)}>
                          {i.label}
                        </RadioItem>
                      ))}
                    </div>
                  </div>
                  <div style={{marginTop: 10 }}>
                    <span>抬楼费</span>
                    <span style={{marginLeft: 10}} >3楼以下25公斤以内免</span>
                    <div>
                      {data2.map(i => (
                        <RadioItem key={i.value} checked={value2 === i.value} onChange={() => this.onChangeValue2(i.value,i.label)}>
                          {i.label}
                        </RadioItem>
                      ))}
                    </div>
                  </div>
                  
                  <div style={{background:"white"}}>
                    <span>低竞争订单派单</span>
                    <span style={{marginLeft: 10}} >超远距离可适当收取</span>
                    <div>
                      {data3.map(i => (
                        <RadioItem key={i.value} checked={value3 === i.value} onChange={() => this.onChangeValue3(i.value,i.label)}>
                          {i.label}
                        </RadioItem>
                      ))}
                    </div>
                  </div>
                  
                  <Button type="primary" onClick={() => {
                    this.setState({
                      open:false,
                      extra: label + "," + label2 + "," + label3
                    })
                  }}>已选好</Button>
                </div>
              }
            >
              <div></div>
            </Drawer>
            
            <Item arrow="horizontal" extra={extra} multipleLine style={{ paddingBottom: 50}} onClick={() => {
              this.setState({
                open: true,
                zIndex:1
                
              },() => {
                console.log(this.state.extra)
              })
            }}>
              选择服务承诺 <Brief>服务承诺</Brief>
              
            </Item>
          </List>
        </content>
        <footer style={{
          position:"fixed",
          width:"100%",
          bottom:0,
          display:"flex",
        }}>
          <Button disabled={current === 0 ? true : false} style={{width:"50%"}} onClick={this.prev}>上一步</Button>
          <Button disabled={current === 2 ? true : false} style={{width:"50%"}} onClick={this.next} type="primary">下一步</Button>
        </footer>
      </div>
    );
  }
  
}

export default App;
