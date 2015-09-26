import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

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
    const ticks = this.props.games.filterNot(function(game) {
      return game.gameId === gameId;
    });

    return (
      <div>
        {
          ticks.map(function(tick) {
            return (
              <div key={tick._id}>
                <Link to={`/game/${tick.gameId}/tick/${tick.tick}`}>{tick.tick}</Link>
              </div>
            );
          })
        }
      </div>
    );
  }
});

const mapStateToProps = function(state) {
  return {
    games: state
  };
};

export default connect(mapStateToProps)(Game);
