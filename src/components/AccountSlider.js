import React from 'react';
import { Link } from 'dva/router';
import { Row, Col, Layout, Menu, Icon } from 'antd';

function AccountSlider(props) {
  const { selectKey } = props;
  return (
    <div>
      <Menu
        style={{ width: '100%' }}
        defaultSelectedKeys={[selectKey]}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item key="account"><Link to="/account">个人信息</Link></Menu.Item>
        <Menu.Item key="order"><Link to="/order">我的订单</Link></Menu.Item>
        <Menu.Item key="setting"><Link to="/">设置中心</Link></Menu.Item>

      </Menu>

    </div>
  );
}

export default AccountSlider;
