import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';

import './config/reactotronConfig';

import GlobalStyle from './styles/global';
import Header from './components/Heder';
import Routes from './routes';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <ToastContainer autoClose={2000} />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
