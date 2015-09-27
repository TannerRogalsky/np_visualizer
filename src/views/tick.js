import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import Layout from './layout';
import Player from './player';
import Star from './star';
import Fleet from './fleet';

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
      <Layout>
        <div className="container-fluid">
          <h1>{tick.name}</h1>
          <h2>Players</h2>
          <div className='row'>
            {
              Object.keys(tick.players).map(function(playerUid) {
                const player = tick.players[playerUid];
                return <Player key={playerUid} {...player} />;
              })
            }
          </div>
          <h2>Stars</h2>
          <div className='row'>
            {
              Object.keys(tick.stars).map(function(starUid) {
                const star = tick.stars[starUid];
                return <Star key={starUid} {...star} owner={tick.players[star.puid]}/>;
              })
            }
          </div>
          <h2>Fleets</h2>
          <div className='row'>
            {
              Object.keys(tick.fleets).map(function(fleetUid) {
                const fleet = tick.fleets[fleetUid];
                return <Fleet key={fleetUid} {...fleet} owner={tick.players[fleet.puid]}/>;
              })
            }
          </div>
        </div>
      </Layout>
    );
  }
});

const mapStateToProps = function(state) {
  return {
    games: state
  };
};

export default connect(mapStateToProps)(Tick);
