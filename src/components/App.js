import React from 'react';
import Tab1 from './tab1'
import Tab2 from './tab2'

import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function (){
    return(
        <BrowserRouter>
            <Switch>           
                <Route exact path="/" component={Tab1}/>  
                <Route path="/list" component={Tab2}/>
            </Switch>
        </BrowserRouter>
    )
}
