import React from 'react';
import { connect } from 'dva';
import styles from './Home.css';
import AppCount from '../components/count'



function mapStateToProps(state) {
  return {count:state.count};
}

export default connect(mapStateToProps)(AppCount);
