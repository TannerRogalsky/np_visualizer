import React from 'react';
import {Row, Col} from 'react-bootstrap';

const Star = React.createClass({
  render() {
    const ownerName = this.props.owner ? this.props.owner.alias : 'Unclaimed';

    return (
      <Col md={4}>
        <h3>{this.props.n}</h3>
        <div>Owner: {ownerName}</div>
        <ul className='list-inline'>
          <li>Natural Resources: {this.props.nr}</li>
          <li>Economy: {this.props.e}</li>
          <li>Industry: {this.props.i}</li>
          <li>Science: {this.props.s}</li>
        </ul>
      </Col>
    );
  }
});

export default Star;
