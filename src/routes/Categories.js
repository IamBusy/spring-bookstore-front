import React from 'react';
import { connect } from 'dva';
import styles from './Categories.css';

function Categories() {
  return (
    <div className={styles.normal}>
      Route Component: Categories
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Categories);
