import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
import Controller from './screens/Controller';
import MovieFilterCard from './screens/home/MovieFilterCard';

ReactDOM.render(<Controller />, document.getElementById('root'));
registerServiceWorker();
