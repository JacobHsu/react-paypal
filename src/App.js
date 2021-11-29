import React, { useState } from 'react';
import PayPal from "./components/PayPal";
import './App.css';

function App() {
  const [checkOut, setCheckOut] = useState(false);

  return (
    <div className="App">
      <PayPal />
      {checkOut ? (
        <PayPal />
      ) : (
        <button
          onClick={() => {
            setCheckOut(true);
          }}
        >
          CheckOut
        </button>
      )}
      
    </div>
  );
}

export default App;
