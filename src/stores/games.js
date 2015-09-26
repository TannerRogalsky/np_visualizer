import {List} from 'immutable';
import {createStore} from 'redux';

import {ADD_GAME} from '../actions/games';

export default createStore(function(games = new List(), action) {
  switch (action.type) {
    case ADD_GAME:
      return games.push(action.game);
  }
})
