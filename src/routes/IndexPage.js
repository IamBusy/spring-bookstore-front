import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import {Row,Col,Layout,Carousel,Input} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import Search from '../components/Search';
import TopBar from '../components/TopBar';
import ProductItem from '../components/ProductItem';
import Category from '../components/Category';
import {recommendationSelector} from '../models/product/selectors';
import Chatroom from '../components/Chatroom';
import { routeTo } from '../utils/helper';

function IndexPage({ user, categories,recommendation,dispatch }) {
  const categoryChange = (category)=>{
    console.log(category);
  };

  //let { dispatch } = props;

  const search = key => {
    dispatch({type:'product/search', payload:{key}});
    routeTo('/categories/1');
  };

  return (
    <div>
      <Layout>
        <Header style={{backgroundColor:'#ececec',paddingLeft:0,paddingRight:0}}>
          <TopBar {...user} />


        </Header>
        <Content>
          <Layout style={{marginLeft:20,marginRight:20}}>
            {/*<img style={{backgroundColor:"white",width:"100%",position:"fixed",width:200,top:0,left:20}}
                  src="//misc.360buyimg.com/mtd/pc/index/home/images/logo.v2.png"></img>*/}

            <Content style={{marginTop:10}}>
              <Layout>

                <Row style={{marginLeft:210,marginTop:20,marginBottom:20}}>
                  <Col span={12} offset={4}>
                    <Search  placeholder="input search text"  onSearch={value => search(value)}/>
                  </Col>
                </Row>

                <Layout style={{marginTop:10}}>
                  <Sider style={{marginRight:10,backgroundColor:'#404040'}}>
                    <Category categoryList={categories} onChange={categoryChange} ></Category>
                  </Sider>

                  <Content>
                    <Carousel autoplay>
                      <div><img style={{width:"100%"}} src="//img11.360buyimg.com/da/jfs/t4132/196/1340121366/224199/40dcb547/58c0b20eNc964116b.jpg"></img></div>
                      <div><img style={{width:"100%"}} src="//img12.360buyimg.com/da/jfs/t4759/264/140644577/186003/e128fd11/58db7ba8N570db415.jpg"></img></div>
                      <div><img style={{width:"100%"}} src="//img10.360buyimg.com/da/jfs/t4774/223/205904374/183701/b205bbc9/58dcbabbNdb7a2e0e.jpg"></img></div>
                    </Carousel>
                  </Content>
                </Layout>
                <Footer style={{paddingLeft:0,paddingRight:0}}>
                  <Row gutter={24}>
                    {
                      recommendation.map(product => (
                        <Col span={4} key={product.id}>
                          <ProductItem  product={product}></ProductItem>
                        </Col>
                      ))
                    }
                  </Row>
                </Footer>
              </Layout>

            </Content>
          </Layout>
        </Content>
        <Footer style={{backgroundColor:'#404040',textAlign:'center',color:'white'}}>
          Copyright © 2017 Bookstore Inc. 保留所有权利。京公网安备 11010802022978号   |   公共事务邮箱 gr@bookstore.com 商务合作邮箱 bdinchina@bookstore.com
        </Footer>
      </Layout>
      <Chatroom></Chatroom>
    </div>
  );
}


function mapStateToProps(state, ownProps) {
  return {
    user:{
      isLoggedIn: state.user.isLoggedIn,
      ...state.user.userInfo
    },
    categories: state.category.lists,
    recommendation: recommendationSelector(state, ownProps),
  };
}

export default connect(mapStateToProps)(IndexPage);
