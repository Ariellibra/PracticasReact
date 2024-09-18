import React from 'react';
import MarketDataComponent from './components/MarketDataComponent';
import HotmartWebhookComponent from './components/HotmartWebhookComponent';

function App() {
  return (
    <div className="App">
      <h1>Vite + React + Deriv API + Hotmart Webhooks</h1>
      <MarketDataComponent />
      {/*<HotmartWebhookComponent />*/}
    </div>
  );
}

export default App;
