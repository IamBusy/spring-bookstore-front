import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './DetailPage.css';
import Category from '../components/Category';

import MyLayout from '../components/Layout';
import { Row, Col, InputNumber, Button, notification, message, Menu, Icon } from 'antd';
const { SubMenu, MenuItemGroup } = Menu;

import { categoryList } from '../models/category/selectors';

function DetailPage(props) {
  const { product } = props;
  let quantity = 1;
  function changeQuantity(qt) {
    quantity = qt;
  }

  function addToCart() {
    const { dispatch, user } = props;
    if(!user.isLoggedIn)
    {
      message.error('请先登陆');
      return;
    }
    dispatch({ type: 'cart/add', payload: { product, quantity: quantity } });
    notification.open({
      message: '购物车添加成功！',
    });
  }

  return (
    <MyLayout {...props}>
      <Row >
          <Menu
        onClick={addToCart}
        mode="horizontal"
        style={{background:null}}
      >
        <SubMenu title={<span><Icon type="setting" />分类</span>}>
          <Category {...props.category} />
        </SubMenu>

        <Menu.Item key="home" >
          <Link to="/"> <Icon type="appstore" />首页</Link>
        </Menu.Item>

      </Menu>
      </Row>
      
      <Row style={{ paddingTop: 50 }}>
        <Col md={{ span: 8 }} xs={{ span: 12 }}>
          <img style={{ width: '100%', borderRadius: 20 }} src="http://pic.uumeitu.com/2015/0518/风情万种蕾丝内衣性感美女大尺度诱惑写真/11.jpg" />
        </Col>
        <Col md={{ span: 16 }} xs={{ span: 12 }} style={{ paddingLeft: 50 }}>
          <Row style={{ fontSize: 36 }}>
            {product.name}
          </Row>
          <Row style={{ fontSize: 16, paddingTop: 10 }}>
            价格：
            <span style={{ color: 'red' }}>{product.price}</span>
          </Row>
          <Row style={{ fontSize: 16, paddingTop: 10 }}>
            出版社：
            <span>{product.publisher}</span>
          </Row>
          <Row style={{ fontSize: 16, paddingTop: 10 }}>
            <InputNumber min={1} max={999} defaultValue={1} onChange={changeQuantity} />
            <Button type="danger" onClick={addToCart}>加入购物车</Button>
          </Row>
        </Col>
      </Row>
    </MyLayout>
  );
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  return {
    product: state.product.itemById[ownProps.params.productId],
    user: {
      isLoggedIn: state.user.isLoggedIn,
      ...state.user.userInfo
    },
    category: categoryList(state, ownProps),
  };
}

export default connect(mapStateToProps)(DetailPage);
