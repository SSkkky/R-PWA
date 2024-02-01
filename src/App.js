import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    if (Notification.permission != 'granted') {
      Notification.requestPermission().then();
    }
  }, [])

  function msg() {
    navigator.serviceWorker.controller.postMessage({
      message: 'Hello, service worker~~~'
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={msg}>알림메세지</button>



        <img src='https://media.tenor.com/8gq2h5eWeJAAAAAi/jokebear-%EB%86%8D%EB%8B%B4%EA%B3%B0.gif' alt="logo" />
        <p>알림 테스트</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
