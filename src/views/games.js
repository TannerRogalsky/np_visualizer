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
    const uniqueGames = this.props.games.reduce(function(uniqueGames, game) {
      uniqueGames[game.gameId] = game;
      return uniqueGames;
    }, {});

    return (
      <Layout>
        <h1>Games</h1>
        <ul>
          {
            Object.keys(uniqueGames).map(function(gameId) {
              const game = uniqueGames[gameId];
              const data = game.data;
              return (
                <li key={game._id}>
                  <Link to={`/game/${gameId}`}>{data.name}</Link>
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
