import React from 'react';
import { Tag } from 'antd';

function Conversation(props) {
  return (
    <Tag >
      {props.content}
    </Tag>
  );
}

export default Conversation;
