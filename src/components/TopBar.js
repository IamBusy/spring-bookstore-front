import React from 'react';
import { Menu, Icon, Row, Col, Dropdown } from 'antd';
import { Link } from 'dva/router';
import style from './TopBar.less';

function TopBar({ isLoggedIn, name, photo }) {
  console.log(isLoggedIn);

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/account">我的账户</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/order">我的订单</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/signin">退出登陆</Link>
      </Menu.Item>
    </Menu>
  );


  return (
    <Row className={style.topBar}>
      {
        isLoggedIn &&
        (
          < div >
            <Col span={2} className={style.photo}>
              <img src={photo} />
            </Col>
            <Col span={2}>
              <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                  {name} <Icon type="down" />
                </a>
              </Dropdown>

            </Col>
          </div>
        )
      }
      {
        !isLoggedIn && (
          <Col span={4} style={{paddingLeft: '20px'}}>
          <Link to="/signin">立即登录</Link>
          </Col>
          
        )
      }
    </Row>
  );
}

export default TopBar;
