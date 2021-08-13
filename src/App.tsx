import React, {useLayoutEffect, useState} from 'react';
import './App.css';

function App() {

  function setCookie(name: string, value: string, days: number) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }
  function getCookie(name: string) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
      let c = ca[i];
      while (c.charAt(0)===' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }

  const wtfCookieName = 'wtfCookieName';
  const [failedShown] = useState(!!getCookie(wtfCookieName));

  useLayoutEffect(() => {
    if (!failedShown) {
      console.log('storing cookie');
      setCookie(wtfCookieName, 'true', 1);
    }
  }, [failedShown])

  if (!failedShown) {
    return <h2>WTFCOOKIE WAS STORED</h2>;
  }
  return <h1>WTFCOOKIE EXISTS</h1>
}

export default App;
