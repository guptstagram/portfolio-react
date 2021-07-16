import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DetailsProvider } from './contexts/myDetailsContext';

import * as serviceWorker from "./serviceWorkerRegistration";

ReactDOM.render(
  <React.StrictMode>
    <DetailsProvider>
      <App />
    </DetailsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
