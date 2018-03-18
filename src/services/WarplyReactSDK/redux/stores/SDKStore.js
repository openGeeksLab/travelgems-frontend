//import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reducer from '../reducers';
import promise from './promise';

const persistConfig = {
 key: 'root',
 storage: storage,
 stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const enhancer = compose(
  applyMiddleware(thunk, promise),
  devTools({
    name: "WarplyReactSDK", realtime: true,
  }),
);

const persistedReducer = persistReducer(persistConfig, reducer);

const SDKStore = () => {
  const store = createStore(persistedReducer, enhancer);
  process.env.NODE_ENV = "production";
  const persistor = persistStore(store);
  process.env.NODE_ENV = "development";

  return { store, persistor }
};

export default SDKStore;
