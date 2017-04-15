import React from 'react';
import { Card, Row} from 'antd';

function Promption(props) {
  const title = props.title?props.title:'尚未登陆';
  const content = props.content?props.content:'请先注册或登陆后再访问该页面';
  return (
    <Card>
      <Row type="flex" justify="center"><h1>{title}</h1></Row>
      <Row>{content}</Row>
    </Card>
  );
}

export default Promption;
