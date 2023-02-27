import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://52.249.252.41/api')
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
