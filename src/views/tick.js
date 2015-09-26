import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import Player from './player';

const Tick = React.createClass({
  propTypes: {
    params: React.PropTypes.shape({
      gameId: React.PropTypes.string.isRequired,
      tickId: React.PropTypes.string.isRequired
    }).isRequired
  },

  getDefaultProps() {
    return {
      games: []
    };
  },

  render() {
    const gameId = Number(this.props.params.gameId);
    const tickId = Number(this.props.params.tickId);
    const tick = this.props.games.find(function(game) {
      return game.gameId === gameId && game.tick === tickId;
    }).data;

    return (
      <div className="container-fluid">
        <h1>{tick.name}</h1>
        {
          Object.keys(tick.players).map(function(playerUid) {
            const player = tick.players[playerUid];
            return (
              <div className='row'>
                <Player key={playerUid} {...player} />
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

export default connect(mapStateToProps)(Tick);
