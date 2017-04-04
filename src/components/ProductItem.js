/**
 * Created by william on 04/04/2017.
 */
import React, { PropTypes } from 'react';
import { Link } from 'dva/router';
import { Row, Col } from 'antd';

function ProductItem({product}) {

  return (
    <div style={{width:'100%'}}>
      <Row>
        <img src={product.cover} style={{height:150,maxWidth:200}}/>
      </Row>
      <Row>
        <Col span={12}>
          {product.name}
        </Col>
        <Col span={12}>
          {product.price}
        </Col>
      </Row>
    </div>
  );

}

// ProductItem.propTypes = {
//   product: PropTypes.object.required
// };


export default ProductItem;
