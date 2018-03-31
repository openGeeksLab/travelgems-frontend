import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import FilesystemStorage from 'redux-persist-filesystem-storage';
// import FSStorage from 'redux-persist-fs-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import reducer from '../reducers';
import promise from './promise';

const App = require('../../package.json');

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureStore(onCompletion: () => void): any {
  const persistConfig = {
    key: App.name,
    storage,
    //   storage: FilesystemStorage,
    //   storage: FSStorage(),
    stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
  };

  return new Promise((resolve, reject) => {
    try {
      const enhancer = composeEnhancers(applyMiddleware(thunk, promise));

      const persistedReducer = persistReducer(persistConfig, reducer);

      const store = createStore(persistedReducer, enhancer);
      process.env.NODE_ENV = 'production';
      persistStore(store, null, () => resolve(store));
      process.env.NODE_ENV = 'development';
    } catch (e) {
      reject(e);
    }
  });
}
