import React from 'react';
import {Menu, Icon } from 'antd';

function TopBar(user) {

  const { name, photo, isLoggedIn } = user;

  return (
    <div >
      {
        isLoggedIn &&
        (
          <Menu
            mode="horizontal"
            theme="dark"
          >
            <Menu.Item key="mail">
              <Icon type="user"/>{name}
            </Menu.Item>
            <Menu.Item key="app">
              <Icon type="appstore"/>Navigation Two
            </Menu.Item>
          </Menu>
        )
      }
      {

        !isLoggedIn&&(
          <Menu
            mode="horizontal"
            theme="dark"
          >
            <Menu.Item key="signin">
              立即登录
            </Menu.Item>
          </Menu>
        )
      }





    </div>
  );
}

export default TopBar;
