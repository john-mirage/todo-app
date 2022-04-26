import '@assets/styles/index.css';
import Page from '@components/page';
import reducer from "@reducers/root-reducer";
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
  reducer: reducer,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Page/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
