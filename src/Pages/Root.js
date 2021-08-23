import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import PagesPromotionsSearch from './Promotions/Search/Search';

const Root = () => {
  return(
    <Router>
      <Switch>
        <Route path="/" component={PagesPromotionsSearch} />
      </Switch>
    </Router>  
  )
}

export default Root;