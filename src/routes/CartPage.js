import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import MyLayout from '../components/Layout';

import { Table, InputNumber, Progress, Button, Row, Col } from 'antd';
import { list } from '../models/cart/selectors';
import { selectCreateInfo } from '../models/order/selectors';


function CartPage(props) {

  const { products, createInfo, dispatch } = props;

  let productsChosen = [];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      productsChosen = selectedRowKeys;
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };
  const columns = [{
    title: '商品',
    dataIndex: 'cover',
    render: (text,record) =>(
      <a href={`/products/${record.id}`}><img src={record.cover} style={{width:50}}/></a>
    )

  }, {
    title: '名称',
    dataIndex: 'name',
    render: (text,record) => <Link to={`/products/${record.id}`}>{text}</Link>
  }, {
    title: '单价',
    dataIndex: 'price',
  }, {
    title: '数量',
    dataIndex: 'quantity',
    render: (quantity, record) => <InputNumber min={1} value={quantity} onChange={(qt)=>{changeQuantity(record,qt);}} />
  }, {
    title: '小计',
    render: (text, record)=> <span>{ Math.ceil(record.quantity*record.price*100)/100 }</span>
  }, {
    title: '操作',
    render: (text, record)=> <Button type="danger" onClick={()=>removeProduct(record)}>移除</Button>
  }];


  function changeQuantity(product,quantity){
    console.log((product),quantity);
    const { dispatch } = props;
    dispatch({ type: 'cart/add', payload: { product, quantity: quantity } });
  }

  function submitOrder() {
    console.log('submitOrder');
    dispatch({type:'order/createOrder', payload: {products:productsChosen}});

  }

  function removeProduct(product) {

    dispatch({type:'cart/remove', payload: {productId:product.id}});
  }

  return (
    <MyLayout {...props}>
      <Row><Table pagination={{total: products.length, defaultPageSize:10}} rowSelection={rowSelection} columns={columns} dataSource={products} /></Row>
      <Row type="flex" justify="center" style={{paddingTop:30,paddingBottom:30}}>
        {
          createInfo.isCreating?
            <Button type="primary" loading >提交订单</Button>
          :
            <Button type="primary" onClick={submitOrder}>提交订单</Button>
        }

      </Row>



    </MyLayout>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    user: {
      isLoggedIn: state.user.isLoggedIn,
      ...state.user.userInfo
    },
    products: list(state, ownProps),
    createInfo: selectCreateInfo(state, ownProps),
  };
}

export default connect(mapStateToProps)(CartPage);
