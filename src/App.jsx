import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/about">关于</Link></li>
        </ul>
      </nav>
      
      <div>
      </div>
    </div>
  );
};

export default App;