import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { store } from 'redux/store';
import './index.css';
import CalcRightSide from 'components/CalcRightSide/CalcRightSide';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/goit_react_team_project">
        <CalcRightSide />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
