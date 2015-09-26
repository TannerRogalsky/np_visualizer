import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

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
    const tick = this.props.games.find(game => game.gameId === gameId && game.tick === tickId).data;

    return (
      <div>
        {
          tick.name
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
