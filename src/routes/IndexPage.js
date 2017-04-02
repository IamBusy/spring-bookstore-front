import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Category from '../components/Category';
import {Row,Col,Layout,Carousel,Input} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
//const {Search} = Input;
import Search from '../components/Search';


let categories = [
  {name:1},
  {name:2},
  {name:3}
];

function IndexPage() {
  return (
    <div>
      <Layout>
        <Header>

        </Header>
        <Content>
          <Layout style={{marginLeft:20,marginRight:20}}>
            <img style={{backgroundColor:"white",width:"100%",position:"fixed",width:200,top:0,left:20}} 
                  src="//misc.360buyimg.com/mtd/pc/index/home/images/logo.v2.png"></img>

            <Content style={{marginTop:10}}>
              <Layout>

                <Row style={{marginLeft:210,marginTop:20,marginBottom:20}}>
                  <Col span={10} offset={4}>
                    <Search  placeholder="input search text"  onSearch={value => console.log(value)}/>
                  </Col>
                </Row>

                <Layout style={{marginTop:10}}>
                  <Sider style={{marginRight:10}}>
                    <Category categoryList={categories}></Category>
                  </Sider>

                  <Content>
                    <Carousel autoplay>
                      <div><img style={{width:"100%"}} src="//img11.360buyimg.com/da/jfs/t4132/196/1340121366/224199/40dcb547/58c0b20eNc964116b.jpg"></img></div>
                      <div><img style={{width:"100%"}} src="//img12.360buyimg.com/da/jfs/t4759/264/140644577/186003/e128fd11/58db7ba8N570db415.jpg"></img></div>
                      <div><img style={{width:"100%"}} src="//img10.360buyimg.com/da/jfs/t4774/223/205904374/183701/b205bbc9/58dcbabbNdb7a2e0e.jpg"></img></div>
                    </Carousel>
                  </Content>
                </Layout>
                <Footer>footer</Footer>
              </Layout>

      
              
              
              
            </Content>
          </Layout>
        </Content>
        <Footer>footer</Footer>
      </Layout>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
