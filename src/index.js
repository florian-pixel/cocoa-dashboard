import React from 'react';
import ReactDOM from 'react-dom/client';
import {Amplify} from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
import App from './App';
Amplify.configure(awsconfig);

/*import './index.css'; */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AmplifyProvider>
          <App />
      </AmplifyProvider>
  </React.StrictMode>
);

