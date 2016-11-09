import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducer';
import logger from '../middlewares/logger'
import randomId from '../middlewares/randomId'
import loadAllArticles from '../middlewares/api'

const enhancer = compose(
    applyMiddleware(loadAllArticles, randomId, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducer, {}, enhancer);
window.store = store

export default store
