import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/1')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>My App</h1>
      {data ?
        
        data : ''}
    </div>
  );
}

export default App;
