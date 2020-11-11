import React from "react";
import ReactDOM from "react-dom";
import "jquery/dist/jquery.min.js";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import firebasecf from "./config/firebase/config";
import {
  createFirestoreInstance,
  reduxFirestore,
  getFirestore,
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import firebase from "firebase/app";
import App from "./App";
import { RoomProvider } from "./Context";
import { BrowserRouter } from "react-router-dom";

import Loading from "./components/Extras/Loading";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase, firebasecf)
  )
);

const profileSpecificProps = {
  userProfile: "users",
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false,
  config: firebasecf,
};

const rrfProps = {
  firebase,

  config: profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth))
    return (
      <div className="auth-card feedbackdisplay">
        <h1>JUST A SEC</h1>
        <Loading title="LOADING..." />
      </div>
    );
  return children;
}
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <RoomProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </RoomProvider>
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
