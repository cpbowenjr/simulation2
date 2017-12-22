import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/components/dashboard' component={Dashboard}/>
        <Route path='/components/propname' component={PropName}/>
        <Route path='/components/address' component={Address}/>
        <Route path='/components/addimage' component={AddImage}/>
        <Route path='/components/mortgage' component={Mortgage}/>
        <Route path='/components/rent' component={Rent}/>
    </Switch>
)