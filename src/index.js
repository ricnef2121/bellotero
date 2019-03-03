//depencies
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';

//components 
//import App from './Components/App';
import AppRoutes from './routes';

render(
    <Provider store={store}>
        <Router><AppRoutes /></Router>
    </Provider>
    , document.getElementById('app'));