import React from 'react';
import { Input, Row, Col, Button } from 'antd';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: null,
    };
    this.search = this.search.bind(this);
    this.change = this.change.bind(this);
  }

  search() {
    const { onSearch } = this.props;
    onSearch();
  }

  change(e) {
    const { value } = e.target;
    this.setState({ key: value });
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={20}><Input placeholder="input search text" onChange={this.change} /></Col>
          <Col span={4}><Button icon="search" onClick={this.search} >Search</Button></Col>
        </Row>
      </div>
    );
  }

}

