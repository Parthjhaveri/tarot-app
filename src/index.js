import React from 'react';
import ReactDOM from 'react-dom';

import App from './frontend/App';
import MainBanner from './frontend/components/mainBanner.js';
import Navbar from './frontend/components/navbar.js';
import About from './frontend/components/about.js';
import BookMe from './frontend/components/waysToBook.js';
import Footer from './frontend/components/footer.js';
import TarotApp from './frontend/components/tarotApp.js';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path='/tarot-app' component={TarotApp} />
    </div>
  </BrowserRouter>,
  document.getElementById('root'));


registerServiceWorker();
