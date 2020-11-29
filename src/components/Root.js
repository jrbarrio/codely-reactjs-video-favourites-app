import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import List from './List';
import Detail from './Detail';
import About from './About';

const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={List}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/:id" component={Detail}/>
        </Switch>
    </BrowserRouter>
);

export default Root;
