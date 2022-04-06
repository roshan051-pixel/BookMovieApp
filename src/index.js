import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
import Controller from './screens/Controller';
import MovieFilterCard from './screens/home/MovieFilterCard';
import UpcomingMovieList from './screens/home/UpcomingMovieList';
import Details from './screens/details/Details';
import LoginRegister from '../src/common/header/LoginRegister';
import MyModal from '../src/common/header/MyModal';

ReactDOM.render(<Controller />, document.getElementById('root'));
registerServiceWorker();
