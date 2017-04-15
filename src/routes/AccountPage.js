import React from 'react';
import { connect } from 'dva';
import MyLayout from '../components/Layout';
import { Row, Col, Layout, Menu, Icon, DatePicker, Form, Input } from 'antd';
import AccountLayout from '../components/AccountLayout';

const FormItem = Form.Item;


function AccountPage(props) {
  const { user } = props;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
  };

  return (
    <AccountLayout {...props}  selectKey="account">
      <Form>
        <FormItem
          {...formItemLayout}
          label="Name"
        >
          <Input placeholder="Your name" id="name" value={user.name} disabled />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="兴趣"
        >
          <Input placeholder="Your interests" id="interest" disabled />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="个人简介"
        >
          <Input placeholder="You can introduce yourself here" id="introduction" disabled/>
        </FormItem>

      </Form>
    </AccountLayout>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    user: {
      isLoggedIn: state.user.isLoggedIn,
      ...state.user.userInfo,
    },
  };
}

export default connect(mapStateToProps)(AccountPage);
