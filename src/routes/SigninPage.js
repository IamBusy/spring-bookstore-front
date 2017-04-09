import React from 'react';
import { connect } from 'dva';
import { Layout, Row, Col, Icon, Menu} from 'antd';
import  SigninForm from '../components/SigninForm';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu, MenuItemGroup } = Menu;
import { Link } from 'dva/router';
import SignLayout from '../components/SignLayout';



function SigninPage({ dispatch, user }) {
  return (
    <SignLayout>
      <SigninForm dispatch={dispatch} user={user} redirect="/"></SigninForm>
    </SignLayout>
  );
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(_actions, dispatch),
  };
}


function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(SigninPage);
