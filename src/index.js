import gamesStore from './stores/games';
import {addGame} from './actions/games';
import request from 'superagent';

request.get('/api/games').end(function(err, res) {
  for (const game of res.body) {
    gamesStore.dispatch(addGame(game));
  }
});

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route} from 'react-router';
import Games from './views/games';
import Game from './views/game';
import Tick from './views/tick';

ReactDOM.render((
  <Provider store={gamesStore}>
    <Router>
      <Route path="/" component={Games} />
      <Route path="/game/:gameId" component={Game}/>
      <Route path="/game/:gameId/tick/:tickId" component={Tick}/>
    </Router>
  </Provider>
), document.getElementById('root'))
