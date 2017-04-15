import React from 'react';
import MyLayout from './Layout';
import { Row, Col, Layout, Menu, Icon, Card } from 'antd';
import AccountSlider from './AccountSlider';

const { Header, Footer, Sider, Content } = Layout;

function AccountLayout(props) {
  const { user } = props;
  return (
    <MyLayout {...props}>
      <Layout>
        <Sider style={{background: '#ececec'}}>
          <Row>
            <img style={{width:'100%'}} src={user.photo}/>
          </Row>
          <Row>
            <AccountSlider {...props}/>
          </Row>
        </Sider>
        <Layout>
          <Content style={{marginLeft:30}}>
            <Card title="" bordered={false} style={{ width: '100%' }}>
              {props.children}
            </Card>
          </Content>
        </Layout>
      </Layout>
    </MyLayout>
  );
}

export default AccountLayout;
