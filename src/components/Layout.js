import React from 'react';
import { Layout } from 'antd';
import TopBar from './TopBar';
const { Header, Footer, Sider, Content } = Layout;

function BaseLayout(props) {
  const { user } = props;

  return (
    <div>
      <Layout>
        <Header style={{backgroundColor:'#ececec',paddingLeft:0,paddingRight:0}}>
          <TopBar {...user} />
        </Header>
        <Content style={{ marginLeft:20, marginRight: 20}}>
          {props.children}
        </Content>
        <Footer style={{backgroundColor:'#404040',textAlign:'center',color:'white'}}>
          Copyright © 2017 Bookstore Inc. 保留所有权利。京公网安备 11010802022978号   |   公共事务邮箱 gr@bookstore.com 商务合作邮箱 bdinchina@bookstore.com
        </Footer>
      </Layout>
    </div>
  );
}

export default BaseLayout;
