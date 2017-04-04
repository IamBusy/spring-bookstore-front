/**
 * Created by william on 04/04/2017.
 */
import {Row, Col, Menu, Icon} from 'antd';
import {Link} from 'dva/router';
import React, { Component } from 'react';
import Particles from 'react-particles-js';



export default class SignLayout extends Component{
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div >
        <Particles width="100%" height="100%" params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 5
              }
            }
          }
        }} style={{position: 'absolute'}}/>

        <Row type="flex" justify="center" style={{zIndex:99}}>
          <Col>
            <Row style={{textAlign:'center',fontSize:36,fontFamily:'Microsoft YaHei',color:'#108ee9',paddingTop:80}}>
              <Icon type="book" />BookStore
            </Row>
            <Row style={{paddingTop:20}}>
              <h2 style={{textAlign:'center'}}>与世界分享你的知识、经验和见解</h2>
            </Row>
            <Row type="flex" justify="center">
              <Menu  mode="horizontal">
                <Menu.Item key="signin">
                  <Link to='/signin'>Signin</Link>
                </Menu.Item>
                <Menu.Item key="signup"><Link to='/signup'>Signup</Link></Menu.Item>
              </Menu>
            </Row>
            <Row style={{paddingTop:20}}>
              {this.props.children}
            </Row>
          </Col>
        </Row>

      </div>
    );
  }
}


