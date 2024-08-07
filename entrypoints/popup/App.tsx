import { useState, useEffect } from 'react';
import { browser } from 'wxt/browser';
import './app.css';

function App() {
  const [tabs, setTabs] = useState<any[]>([]);

  useEffect(() => {
    browser.tabs.query({ currentWindow: true }).then((tabs) => {
      setTabs(tabs);
    });
  }, []);

  function deleteTab(tabId: number | undefined) {
    if (tabId) {
      browser.tabs.remove(tabId);
    } else {
      alert('cannot delete tab');
    }
    setTabs(prevTabs => prevTabs.filter(tab => tab.id !== tabId));
  }

  return (
    <>
      <h1>WXT + React</h1>
      {tabs.map((tab) => (
        <div key={tab.id} className='aaa'>
          <h2><a href={tab.url}>{tab.title}</a></h2>
          <button onClick={() => deleteTab(tab.id)}>remove</button>
          <br />
        </div>
      ))}
    </>
  );
}

export default App;