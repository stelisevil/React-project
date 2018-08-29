import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Projects here
import IDCard from './projects/IDCard';
import TodoList from './projects/TodoList';
import TwitterDashboard from './projects/TwitterDashboard';

// ReactDOM.render(<TodoList />, document.getElementById('root'));
ReactDOM.render(<TwitterDashboard />, document.getElementById('root'));

registerServiceWorker();
