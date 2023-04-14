import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { store } from 'redux/store';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1280,
    },
  },
  // додайте тут інші параметри вашої теми
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/goit_react_team_project">
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
