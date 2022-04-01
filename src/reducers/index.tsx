import {combineReducers} from 'redux';
import {Token} from './Token';
import {User} from './User';
import Language from './Language';

const noConnection = (
  state = null,
  action: {type: any; value: any; error: any},
) => {
  switch (action.type) {
    case 'LOAD_NO_CONNECTION':
      return action.value;
    case 'LOAD_NO_CONNECTION_ERROR':
      return action.error;
    default:
      break;
  }
  return state;
};

const rootReducers = combineReducers({
  no_connection: noConnection,
  user: User,
  token: Token,
  lang : Language
});

export default rootReducers;
