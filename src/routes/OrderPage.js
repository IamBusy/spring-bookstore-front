import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Row, Col, Table, Pagination, Button } from 'antd';
import AccountLayout from '../components/AccountLayout';
import { paginationInfo, paginationOrders } from '../models/order/selectors';

function OrderPage(props) {
  const { orders, paginationInfo } = props;
  const { itemsPerPage, total, currentPage } = paginationInfo;

  const columns = [{
    title: '订单号',
    dataIndex: 'id',

  }, {
    title: '商品',
    render: (text,record) =>
      (<div>
        {
          record.products.map(product=>(
            <Row key={product.id} type="flex" align="middle">
              <Col span={4}><img src={product.cover } style={{width:'100%'}}/></Col>
              <Col span={10}><Link to={`/products/${product.id}`}>{product.name}</Link></Col>
              <Col span={10}>{product.price}</Col>
            </Row>
          ))
        }

      </div>)
  }, {
    title: '总价',
    dataIndex: 'total',
  }, {
    title: '时间',
    dataIndex: 'createdAt',
  }, {
    title: '操作',
    render: (text, record)=> <Button type="danger"  disabled>移除</Button>
  }];

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


  return (
    <AccountLayout {...props} selectKey="order">
      <Row>
        <Table
          pagination={{total: orders.length, defaultPageSize:5}}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={orders}
        />
      </Row>



    </AccountLayout>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    user:{
      isLoggedIn: state.user.isLoggedIn,
      ...state.user.userInfo
    },
    paginationInfo: paginationInfo(state, ownProps),
    orders: paginationOrders(state, ownProps),

  };
}

export default connect(mapStateToProps)(OrderPage);
