import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import tasks from './tasks'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    tasks
  });
