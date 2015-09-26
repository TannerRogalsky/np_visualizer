import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

const Games = React.createClass({
  getDefaultProps() {
    return {
      games: []
    };
  },

  render() {
    return (
      <div>
        {
          this.props.games.map(function(game) {
            return (
              <div key={game._id}>
                <Link to={`/game/${game.gameId}`}>{game.gameId}</Link>
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

export default connect(mapStateToProps)(Games);
