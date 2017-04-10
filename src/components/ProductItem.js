/**
 * Created by william on 04/04/2017.
 */
import React, { PropTypes } from 'react';
import { Link } from 'dva/router';
import { Row, Col } from 'antd';

function ProductItem({product, style}) {

  return (
    <div style={{...style,width:'100%',padding:'0px,10px,10px,10px'}}>
      <Row>
        <img src={product.cover} style={{height:150}}/>
      </Row>
      <Row  >
        <font style={{color:'red',fontSize:20}}>¥{product.price}</font>
      </Row>
      <Row>
        {product.name}
      </Row>
    </div>
  );

}

// ProductItem.propTypes = {
//   product: PropTypes.object.required
// };


export default ProductItem;
