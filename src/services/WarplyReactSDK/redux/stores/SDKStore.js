//import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reducer from '../reducers';
import promise from './promise';


export default function SDKStore(onCompletion:()=>void):any {
  const persistConfig = {
   key: 'WarplyReactSDK',
   storage: storage,
   stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
  };

  return new Promise((resolve, reject) => {
    try {
      const enhancer = compose(
        applyMiddleware(thunk, promise),
        devTools({
          name: "WarplyReactSDK", realtime: true,
        }),
      );

      const persistedReducer = persistReducer(persistConfig, reducer);

      const store = createStore(persistedReducer, enhancer);
      process.env.NODE_ENV = "production";
      persistStore(store, null, () => resolve(store));
      process.env.NODE_ENV = "development";

  //    return { store, persistor }
    } catch (e) {
      reject(e);
    }
  });
};
