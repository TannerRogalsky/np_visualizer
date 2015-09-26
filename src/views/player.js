import React from 'react';
import {Row, Col} from 'react-bootstrap';

const Player = React.createClass({
  render() {
    return (
      <Col md={6}>
        <h3>{this.props.alias}</h3>
        <Row>
          <Col md={6}>
            <ul>
              <li>Economy: {this.props.total_economy}</li>
              <li>Industry: {this.props.total_industry}</li>
              <li>Science: {this.props.total_science}</li>
              <li>Ships: {this.props.total_strength}</li>
              <li>Stars: {this.props.total_stars}</li>
              <li>Carriers: {this.props.total_fleets}</li>
            </ul>
          </Col>
          <Col md={6}>
            <ul>
              {
                Object.keys(this.props.tech).map((techName) => {
                  const tech = this.props.tech[techName];
                  return (
                    <li>{techName}: {tech.level}</li>
                  );
                })
              }
            </ul>
          </Col>
        </Row>
      </Col>
    );
  }
});

export default Player;
