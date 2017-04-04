import React from 'react';
import { connect } from 'dva';
import { Layout, Row, Col, Icon, Menu} from 'antd';
import  SigninForm from '../components/SigninForm';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu, MenuItemGroup } = Menu;
import { Link } from 'dva/router';
import SignLayout from '../components/SignLayout';



function SigninPage() {
  return (
    <SignLayout>
      <SigninForm></SigninForm>
    </SignLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(SigninPage);
