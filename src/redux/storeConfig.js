import {createStore, applyMiddleware, compose} from 'redux';
import reduxSaga from 'redux-saga';
import rootSaga from './sagas';
import reducer from './reduceres';


const sagaMiddleware = reduxSaga();
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


 const storeConfig = () =>{
    return {
        ...createStore(
                reducer,
                composeEnhancers( applyMiddleware( sagaMiddleware ) )
            ),
        runSaga:sagaMiddleware.run(rootSaga)
    };
};

export default storeConfig;

