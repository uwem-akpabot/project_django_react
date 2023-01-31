import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/vendors/mdi/css/materialdesignicons.min.css';
import './assets/vendors/flag-icon-css/css/flag-icon.min.css';
import './assets/vendors/css/vendor.bundle.base.css';
import './assets/vendors/font-awesome/css/font-awesome.min.css';
import './assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css';
import './assets/css/style.css';
// Put any other imports below so that CSS from your components takes precedence over default styles.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
