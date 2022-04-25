import React from "react";
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./views/loading";
import store from "./app/store";
let persistor = persistStore(store);

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <AppRouter></AppRouter>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
