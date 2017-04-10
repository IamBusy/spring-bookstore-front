import React from 'react';
import { connect } from 'dva';
import { Row, Col, Layout, Pagination } from 'antd';
import Search from '../components/Search';
import styles from './ListPage.css';
import MyLayout from '../components/Layout';
import Category from '../components/Category';
import ProductItem from '../components/ProductItem';

import { paginationInfo, paginationProducts } from '../models/product/selectors';

const { Header, Footer, Sider, Content } = Layout;

function ListPage(props) {
  let { products, categories, paginationInfo, dispatch } = props;
  let { currentPage, itemsPerPage, total }  = paginationInfo;
  const pageChange = (page) => {
    dispatch({type:'product/changePage', payload: {page}});
  }
  return (
    <div className={styles.normal}>
      <MyLayout {...props} >
        <Row justify="center">
          <Col span={12} offset={6} style={{ marginBottom: 20, marginTop: 20 }}>
            <Search placeholder="input search text" onSearch={value => console.log(value)} />
          </Col>
        </Row>
        <Row style={{paddingBottom:50}}>

          <Layout style={{ marginTop: 10 }}>

            <Sider style={{ marginRight: 10, backgroundColor: '#404040' }}>
              <Category categoryList={categories} ></Category>
            </Sider>

            <Content>
              <Row style={{ marginTop: 0 }}>
                {
                  products.map(product => (
                    <Col xs={{ span: 6 }} md={{ span: 4 }} key={product.id}>
                      <ProductItem product={product} />
                    </Col>

                  ))
                }
              </Row>
              <Row type="flex" justify="center" style={{paddingTop:50}}>
                <Pagination showQuickJumper pageSize={itemsPerPage} defaultCurrent={currentPage} total={total} onChange={pageChange} />
              </Row>

            </Content>
          </Layout>
        </Row>
      </MyLayout>

    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    user: {
      isLoggedIn: state.user.isLoggedIn,
      ...state.user.userInfo
    },
    paginationInfo: paginationInfo(state, ownProps),
    categories: state.category.lists,
    products: paginationProducts(state, ownProps),
    currentPage: state.product.currentPage + 1,
    itemsPerPage: state.product.itemsPerPage,
  };
}

export default connect(mapStateToProps)(ListPage);
