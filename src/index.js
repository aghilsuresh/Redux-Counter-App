import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import  store  from './Components/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}> <App /> </Provider>
  </React.StrictMode>
);

// to globally acces the store we need to import provider and give its atribute store with the name of the store.
//provider tag is used to make the store globally accesible