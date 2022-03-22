import React, { useState } from 'react';
import './App.css';
import { Hello } from './components/hello';
import { Input } from './components/input';

function App() {

  const [message, setMessage] = useState<string>('111111');

  const onBlur = (message: string) => {
    setMessage(message)
   }

  return (
    <div className="App">
      <Hello message={message}></Hello>
      <Input blur={onBlur}></Input>
    </div>
  );
}

export default App;
