import React from 'react';
import { Card, Row} from 'antd';

function Promption(props) {
  const { title, content} = props;
  return (
    <Card>
      <Row type="flex" justify="center"><h1>{title}</h1></Row>
      <Row>{content}</Row>
    </Card>
  );
}

export default Promption;
