import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import Layout from './layout';

const Game = React.createClass({
  propTypes: {
    params: React.PropTypes.shape({
      gameId: React.PropTypes.string.isRequired
    }).isRequired
  },

  getDefaultProps() {
    return {
      games: []
    };
  },

  render() {
    const gameId = Number(this.props.params.gameId);
    const ticks = this.props.games.filter(function(game) {
      return game.gameId === gameId;
    });
    const sortedTicks = ticks.sort(function(a, b){
      return a.tick - b.tick;
    });

    return (
      <Layout>
        <h2>Ticks</h2>
        <ul>
          {
            sortedTicks.map(function(tick) {
              return (
                <li key={tick._id}>
                  <Link to={`/game/${tick.gameId}/tick/${tick.tick}`}>{tick.tick}</Link>
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

export default connect(mapStateToProps)(Game);
