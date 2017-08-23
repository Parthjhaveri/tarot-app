import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENT IMPORTS
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

// REDUX IMPORTS
import { createStore } from 'redux';
import reducer from './frontend/redux/reducers/index.js';
import './frontend/redux/store/store.js'; // STORE
import action from './frontend/redux/actions/index.js';

// CREATE THE STORE/ STORE IN REFERENCE VARIABLE
const store = createStore(reducer);

function render() {
  ReactDOM.render(
      <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route path='/tarot-app' component={TarotApp} />
        </div>
      </BrowserRouter>,
  document.getElementById('root'));
}

store.subscribe(render);

render();

registerServiceWorker();
