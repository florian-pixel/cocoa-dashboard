//import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'
import { StandardCardCollection } from "./ui-components";

function App() {
  return (
    <div className="App">
      <StandardCardCollection />
    </div>

  );
}

export default withAuthenticator(App);
