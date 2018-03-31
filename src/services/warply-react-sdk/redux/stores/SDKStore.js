import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import reduxReset from 'redux-reset';

import reducer from '../reducers';
import promise from './promise';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function SDKStore(onCompletion: () => void): any {
  const persistConfig = {
    key: 'WarplyReactSDK',
    storage,
    stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
  };

  return new Promise((resolve, reject) => {
    try {
      const enhancer = composeEnhancers(
        applyMiddleware(thunk, promise),

        reduxReset(),
      );

      const persistedReducer = persistReducer(persistConfig, reducer);

      const store = createStore(persistedReducer, enhancer);
      process.env.NODE_ENV = 'production';
      persistStore(store, null, () => resolve(store));
      process.env.NODE_ENV = 'development';

      //    return { store, persistor }
    } catch (e) {
      reject(e);
    }
  });
}
