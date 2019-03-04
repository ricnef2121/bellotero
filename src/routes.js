import React from 'react';
import { Route, Switch } from 'react-router-dom';

//components
import App from './Components/App';
import Testimonial from './Components/Testimonial';
import Configurator from './Components/Configurator';
import Page404 from './Components/Page404';

const AppRoutes = _ =>
    <App>
        <Switch>
            <Route exact path="/" component={Testimonial}></Route>
            <Route exact path="/page-1" component={Testimonial}></Route>
            <Route path="/page-2" component={Configurator}></Route>
            <Route component={Page404}></Route>
        </Switch>
    </App>


export default AppRoutes;