import React, { Component }from 'react';
import Conversation from './Conversation';
import { Row, Col, Card, Input, Button} from 'antd';
import config from '../config';
import socket from '../utils/websocket';

class Chatroom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      conversations: [],
    };
    console.log(this.state);


    this.sendMessage = this.sendMessage.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onMessage = this.onMessage.bind(this);

    this.socket = socket(config.chatroomSocket,this.onMessage);

  }

  sendMessage() {
    console.log(this.state.content);
    this.socket.send(this.state.content);
    this.setState({content:''});


  }

  onMessage(msg) {
    console.log(msg);
    let cons = this.state.conversations;
    cons.push(msg.data);
    this.setState({conversation:cons});
  }

  onChange(e) {
    this.setState({content:e.target.value});
  }


  render() {
    return (
      <div style={{position:"fixed",bottom:'20px',right:'20px',width:'250px'}}>
        <Row>
          <Card style={{maxHeight:'250px',overflowY:'scroll'}} >
            {
              this.state.conversations.map( (conservation,idx) => <Conversation key={idx} content={conservation}/>)
            }
          </Card>
        </Row>
        <Row>
          <Col span={18}>
            <Input
              value={this.state.content}
              onChange={this.onChange}
            />
          </Col>
          <Col span={6}>
            <Button type="primary" onClick={this.sendMessage}>发送</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
// function Chatroom(props) {
//   let conservations = ["hello","world","hello","world","hello","world"];
//   let content = "";
//   const sendMessage = (msg) => {
//
//   };
//
//   return (
//     <div style={{position:"fixed",bottom:'20px',right:'20px',width:'250px'}}>
//       <Row>
//         <Card style={{maxHeight:'350px',overflowY:'scroll'}}>
//           {
//             conservations.map( conservation => <Conversation content={conservation}/>)
//           }
//         </Card>
//       </Row>
//       <Row>
//         <Col span={18}>
//           <Input />
//         </Col>
//         <Col span={6}>
//           <Button type="primary" onClick={sendMessage}>发送</Button>
//         </Col>
//       </Row>
//     </div>
//   );
// }

export default Chatroom;
