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
        {
          this.props.games.map(function(game) {
            return (
              <div key={game._id}>
                <Link to={`/game/${game.gameId}`}>{game.gameId}</Link>
              </div>
            );
          })
        }
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
