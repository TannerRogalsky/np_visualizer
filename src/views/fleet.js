import React from 'react';
import {Row, Col} from 'react-bootstrap';

const Fleet = React.createClass({
  render() {
    return (
      <Col md={3}>
        <h3>{this.props.n}</h3>
        <ul>
          <li>Owner: {this.props.owner.alias}</li>
        </ul>
      </Col>
    );
  }
});

export default Fleet;
