import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import Layout from './layout';

const Games = React.createClass({
  getDefaultProps() {
    return {
      games: []
    };
  },

  render() {
    return (
      <Layout>
        <h1>Games</h1>
        <ul>
          {
            this.props.games.map(function(game) {
              const data = game.data;
              return (
                <li key={game._id}>
                  <Link to={`/game/${game.gameId}`}>{data.name}</Link>
                </li>
              );
            })
          }
        </ul>
      </Layout>
    );
  }
});

const mapStateToProps = function(state) {
  return {
    games: state
  };
};

export default connect(mapStateToProps)(Games);
