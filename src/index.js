import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Projects here
import IDCard from './projects/IDCard';
import TodoList from './projects/TodoList';

ReactDOM.render(<TodoList />, document.getElementById('root'));
registerServiceWorker();
