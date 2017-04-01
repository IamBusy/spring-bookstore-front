import React from 'react';
import { connect } from 'dva';
import Layout from '../components/Layout';
import styles from './IndexPage.css';
import Category from '../components/Category';

let categories = [
  {name:1}
];

function IndexPage() {
  return (
    <Layout>
      <div>
        <Category categoryList={categories}></Category>
      </div>
      <div></div>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
