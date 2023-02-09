import logo from './logo.svg';
import './App.css';
// import {withAuthenticator, Button, Heading} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
import Todo from './toDo'

function App({signOut, user}) {
  return (
    <div className="App">
      <Todo  signOut={signOut} user={user}/>
    </div>
  );
}

export default App; 