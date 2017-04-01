import React from 'react';
import { connect } from 'dva';
import Layout from '../components/Layout';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <Layout>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
